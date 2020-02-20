import { Component, OnInit, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Financialyear } from 'src/app/ClassFiles/financialyear';

import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-financialyear',
  templateUrl: './financialyear.component.html',
  styleUrls: ['./financialyear.component.scss']
})
export class FinancialyearComponent implements OnInit {
  closeResult: string;

  YearForm: FormGroup;
  submited = new EventEmitter<string>();
  model = new Financialyear('', null, null);
  year: Financialyear[];
  fycount: string;
  constructor(private service: MasterServiceService,private modalService: NgbModal
,    private router: Router, private fb: FormBuilder, private toastr: ToastrService
  ) {
    this.service = service;
    service.GetyearList().subscribe((data: any) => {
    this.year = data;
      console.log(data);
    })
    service.GetyearList().subscribe((data: any) => { this.fycount = data.length; })



  }

  ngOnInit() {
    this.YearForm = this.fb.group({

      yearname: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],

    });
  }

  Addfyear() {
    const year: Financialyear = new Financialyear();
    console.log(year);

    year.yearname = this.YearForm.value.yearname;
    year.startdate = this.YearForm.value.startdate;
    year.enddate = this.YearForm.value.enddate;
    this.service.InsertYear(year).subscribe((res) => {
      console.log(res);
      
      this.submited.emit(res.toString());
      console.log(res.toString());
      
      if (res.toString() === "Exists")
      {
      this.toastr.error ("Financial Year Already Exists");
      }
     else 
      {
        this.toastr.success ("Added SuccessFully");
      }
     

      this.service.GetyearList().subscribe((data: any) => { this.year = data; })
      this.service.GetyearList().subscribe((data: any) => { this.fycount = data.length; })
    },
      error => {
        console.log(error);
      }
    );
  }

  Delete(yearid) {
    console.log(yearid);
    this.service.RemoveYear(yearid).subscribe((res) => {
      this.submited.emit(res.toString());
      this.toastr.error("Removed SuccessFully");
      this.service.GetyearList().subscribe((data: any) => { this.year = data; })
      this.service.GetyearList().subscribe((data: any) => { this.fycount = data.length; })
    },
      error => {
        console.log(error);
      }
    );
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }

  }
}