import { Component, OnInit ,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { Salaryapprove } from 'src/app/ClassFiles/Salaryapprove';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-salaryapprove',
  templateUrl: './salaryapprove.component.html',
  styleUrls: ['./salaryapprove.component.scss']
})
export class SalaryapproveComponent implements OnInit {
 // spinner
 spinnerButtonOptions: MatProgressButtonOptions = {
  active: false,
  text: 'Save',
  spinnerSize: 18,
  raised: true,
  stroked: false,
  buttonColor: 'primary',
  spinnerColor: 'primary',
  fullWidth: false,
  disabled: false,
  mode: 'indeterminate',

}

showLoadingIndicator = true;

// end of spinner


UpdateForm:FormGroup
Salaryapprove:Salaryapprove[];
displayedColumns: string[] = [ 'SrNo','depname', 'employeename', 'remark','grosssalary','absentday','totaldeduct','netamt',
'ctcamt','absent','basicamt','hraamt','taamt','oaamt','absamt','epfamt','esic1','tds','pt','telephone','advance','loan',
'cpfamt','esic2', 'approve'];
dataSource: MatTableDataSource<Salaryapprove>;
selection = new SelectionModel<Salaryapprove>(true, []);

isAllSelected() {

}

masterToggle(ref) {

  if (this.isSomeSelected()) {
    
    this.selection.clear();
  ref.checked=false;
    
  } else {
  
    this.selection.clear();
    ref.checked=false;
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  console.log(ref);
}

isSomeSelected() {
  
  return this.selection.selected.length > 0;
}

fineyear=0;
role="";
pgid="";
depid="";
userid="";
month= "";
salid= "";
year="";
year1="";
monthname="";
submited = new EventEmitter<string>();
constructor(private toastr: ToastrService,private service: MasterServiceService, private router: Router, private route: ActivatedRoute,private fb: FormBuilder) { 
  this.role=route.snapshot.params["id"];
  this.pgid = route.snapshot.params["id1"];
  this.depid = route.snapshot.params["id2"];
  this.userid=route.snapshot.params["id3"];
  this.month = route.snapshot.params["id4"];
  this.year = route.snapshot.params["id5"];


  service.GetEmpApprovalSalaryData(  this.role,this.pgid, this.depid, this.userid,this.month, this.year).subscribe((data: any) => {         
    this.dataSource  = new MatTableDataSource(data);
    this.salid = data[0].salid;
console.log("this.salid"+this.salid);
  })
  
}

totworking = new FormControl();
save() {
  var newData = this.dataSource.data;

console.log( newData,this.depid,this.monthname, this.year ,this.fineyear,this.userid);

  this.service.ApproveSalary(this.salid,this.userid,newData).subscribe(
      res => {

        if(res=='Success'){
          this.toastr.success ("update SuccessFully");          
        this.router.navigate(['/SalaryList']);
        }
        else if (res=='Failure') {
       
          this.toastr.success ("update Failed"  );          
        this.router.navigate(['/GenerateSalary/:id/:id1/:id2/:id3/:id4/:id5/:id6']);
        }
       
      });

}

ngOnInit() {

}

someFunc(): void {
  this.spinnerButtonOptions.active = true;
  setTimeout(() => {
    this.spinnerButtonOptions.active = false;
  }, 95000)
}

}