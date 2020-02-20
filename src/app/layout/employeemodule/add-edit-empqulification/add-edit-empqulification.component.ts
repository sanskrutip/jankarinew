import { Component, OnInit,EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Employee } from 'src/app/ClassFiles/employee';
import { EmployeeQualification } from 'src/app/ClassFiles/employee-qualification';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-empqulification',
  templateUrl: './add-edit-empqulification.component.html',
  styleUrls: ['./add-edit-empqulification.component.scss']
})
export class AddEditEmpqulificationComponent implements OnInit {

  EmpProgramForm: FormGroup;
  EmpQualificationForm: FormGroup;
  EmpReferenceForm: FormGroup;
  submited = new EventEmitter<string>();
  model1 = new EmployeeQualification('', '', '', '', '', );
  employeeId: string;
  employee: Employee[];
  EmployeeQualification: EmployeeQualification[];
  url: string;
  closeResult: string;
  finyear;
  pgname
  constructor(private service: MasterServiceService, private modalService: NgbModal,private toastr: ToastrService, private router: Router,private fb: FormBuilder, private route: ActivatedRoute ) {
    this.service = service;
    this.employeeId = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

    
    
    service.GetEmployeeQualification(this.employeeId).subscribe((data:any)=>{this.EmployeeQualification=data;
    console.log(data);
    })
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    }

  ngOnInit() {
    this.EmpQualificationForm = this.fb.group({
  
      degree: ['', Validators.required],
      university: ['', Validators.required],
      year: ['', Validators.required],
      classes: ['', Validators.required],
      
      
      });
  }

  AddEmpQualification() {


    const EmpQ: EmployeeQualification = new EmployeeQualification();
    EmpQ.empid = this.employeeId;
    EmpQ.degree = this.EmpQualificationForm.value.degree;
    EmpQ.university = this.EmpQualificationForm.value.university;
    EmpQ.year = this.EmpQualificationForm.value.year;
    EmpQ.classes = this.EmpQualificationForm.value.classes;
    // EmpQ.studentid = this.EmpQualificationForm.value.studentid;
    // EmpQ.percentage = this.EmpQualificationForm.value.percentage;
    // EmpQ.graduate = this.EmpQualificationForm.value.graduate;
    // partner.createdby = this.UserId;
    console.log(EmpQ);
    this.service.InsertEmployeeQualification(EmpQ).subscribe((res) => {

      this.submited.emit(res.toString());
      console.log(res.toString());
      localStorage.setItem('quliid', res.toString());
      this.toastr.success ("Added SuccessFully");
      // this.router.navigateByUrl('/Dashboard', { skipLocationChange: true }).then(() =>
      //   this.router.navigate(['/EditEmployeeQulification', this.employeeId]));
      // this.service.GetEmployeeQualification(this.employeeId).subscribe((data: any) => {
      //   this.EmployeeQualification = data;
      //   console.log(data);
      // })
      if(this.employee == undefined)
      {
        this.router.navigate(['/EditEmployeeReference', this.employeeId]);
      }
      else{
        this.router.navigate(['/EmployeeDetails', this.employeeId]);
      }

    },
      error => {
        console.log(error);
      });
  }


  Delete1(quliid) {
    console.log(quliid);
    this.service.RemoveEmployeeQualification(quliid).subscribe((res) => {
      this.submited.emit(res.toString());
      this.toastr.error("Removed SuccessFully");
      this.service.GetEmployeeQualification(this.employeeId).subscribe((data: any) => {
        this.EmployeeQualification = data;
        console.log(data);
      })

      error => {
        console.log(error);
      }

    });
  }
  Skip(){
    this.router.navigate(['/EditEmployeeReference', this.employeeId]);
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
