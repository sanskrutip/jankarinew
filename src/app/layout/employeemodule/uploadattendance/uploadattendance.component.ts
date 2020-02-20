import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Saveexcel } from 'src/app/ClassFiles/saveexcel';


@Component({
  selector: 'app-uploadattendance',
  templateUrl: './uploadattendance.component.html',
  styleUrls: ['./uploadattendance.component.scss']
})
export class UploadattendanceComponent implements OnInit {

  dataArr = [];
  saveexcel: Saveexcel[];


  displayedColumns: string[] = ['empcode', 'date', 'workingdue', 'workinghr', 'status', 'entrystatus'];
  dataSource: MatTableDataSource<Saveexcel>;
  csvRecordsArr: any;
  rowData: any;
  csvContent: string;
  message: string;
  excelDataEncodeToJson;

  constructor(private toastr: ToastrService, private service: MasterServiceService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  //upload excel code
  public csvRecords: any[] = [];
  @ViewChild('fileImportInput',null) fileImportInput: any;
  fileChangeListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;

        let csvRecordsArr = (<any>csvData).replace(/"/g, "").split(/\r\n|\n/);

        let headersRow = this.getHeaderArr(csvRecordsArr);

        this.csvRecords = this.getDataRecordsArrFromCSVFile(csvRecordsArr, headersRow.length);
      };

      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrFromCSVFile(csvRecordsArr: any, headerLength: any) {
    for (let i = 1; i < csvRecordsArr.length; i++) {
      let data = (<string>csvRecordsArr[i]).split(',');
      if (data.length == headerLength) {
        let csvRecord: Saveexcel = new Saveexcel();
        // csvRecord.empid = data[0];
        csvRecord.empcode = data[0];
        csvRecord.date = data[1];
        csvRecord.workingduration = data[2];
        csvRecord.workinghr = data[3];
        csvRecord.status = data[4];
        csvRecord.entrystatus = data[5];

        this.dataArr.push(csvRecord);
      }
    }
    return this.dataArr;

  }


  isCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  // GET CSV FILE HEADER COLUMNS
  getHeaderArr(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArr = [];
    // console.log( csvRecordsArr);
    for (let j = 0; j < headers.length; j++) {
      headerArr.push(headers[j]);
    }
    return headerArr;
  }



  save() {
    var newData = this.dataArr;

    console.log(newData);
    this.service.UploadEMPAttendance(
      newData).subscribe(
        res => {
          if (res[0].Result == "Success") {
            this.toastr.success("Attendance Uploaded SuccessFully!");
          }
          else {
            this.toastr.error("Attendance Not Uploaded!");

          }
        });
  }


  fileReset() {
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }
}