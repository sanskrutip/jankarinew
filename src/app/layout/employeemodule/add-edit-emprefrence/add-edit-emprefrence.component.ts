import { Component, OnInit,EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { EmployeeReference } from 'src/app/ClassFiles/employee-reference';
import { Employee } from 'src/app/ClassFiles/employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-emprefrence',
  templateUrl: './add-edit-emprefrence.component.html',
  styleUrls: ['./add-edit-emprefrence.component.scss']
})
export class AddEditEmprefrenceComponent implements OnInit {
  EmpReferenceForm:FormGroup;
  
  submited = new EventEmitter<string>();
  closeResult: string;
  model2 = new EmployeeReference('','','','','',);
  employeeId : string;
 
  employee:Employee[];
 
  EmployeeReference:EmployeeReference[];
  url:string;
  finyear;
  pgname
  constructor(private service: MasterServiceService, private modalService: NgbModal,private toastr: ToastrService, private router: Router,private fb: FormBuilder, private route: ActivatedRoute ) {
    this.service = service;
    this.employeeId = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

    
    
    service.GetEmployeeReference(this.employeeId).subscribe((data:any)=>{this.EmployeeReference=data;
    console.log(data);
    })
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    }

  ngOnInit() {
    this.EmpReferenceForm = this.fb.group({
  
      refname: ['', Validators.required],
      designation: ['', Validators.required],
      contactno: ['', Validators.required],
      
      });
  }
  AddEmpReference() { 
  
  
    const EmpR: EmployeeReference = new EmployeeReference();
    EmpR.empid =this.employeeId;
    EmpR.refname = this.EmpReferenceForm.value.refname;
    EmpR.designation = this.EmpReferenceForm.value.designation;
    EmpR.contactno = this.EmpReferenceForm.value.contactno;
    
    
    // partner.createdby = this.UserId;
    console.log(EmpR);
    this.service.InsertEmployeeReference(EmpR).subscribe((res) => {
    
    this.submited.emit(res.toString());
    console.log(res.toString());
    localStorage.setItem('refid', res.toString());
    this.toastr.info ("Update SuccessFully");
    if(this.employee !== undefined)
    {
      this.router.navigate(['/EditEmployeeDocument', this.employeeId]);
    }
    else{
      this.router.navigate(['/EmployeeDetails', this.employeeId]);
    }
    },
    error => {
    console.log(error);
    } );

  
    
    }
    
    
    
    Delete2(refid)
    {
    console.log(refid);
    this.service.RemoveEmployeeReference(refid).subscribe((res) => {
    this.submited.emit(res.toString());
    this.toastr.error("Removed SuccessFully");
    this.service.GetEmployeeReference(this.employeeId).subscribe((data:any)=>{this.EmployeeReference=data;
      console.log(data);
      })
    
    error => {
    console.log(error);
    }
    
    });
    }
    Skip(){
      this.router.navigate(['/EditEmployeeDocument', this.employeeId]);
    }
    Back(){
      this.router.navigate(['/EmployeeDetails', this.employeeId]);
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
