

import { Component, OnInit, EventEmitter } from '@angular/core';

import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  closeResult: string;
 
  DepartmentForm: FormGroup;
  ProgramList:ProgramList[];
  Departmentlist:Departmentlist[];
  submited = new EventEmitter<string>();
  model = new Departmentlist('','',);
  dgcount:string;
  constructor(private service: MasterServiceService,
    private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {


     
    service.FillDropDown("Program","distinct Program.pgname","Program.pgid","where ogid='OG1'").subscribe((data: any) => {
      this.ProgramList = data;

      
    });

     service.GetDepartmentlist("where Program.ogid='OG1'").subscribe((data: any) => { 
      this.Departmentlist= data;
    console.log( this.Departmentlist);
    })
    service.GetDepartmentlist("where Program.ogid='OG1'").subscribe((data: any) => { 
      this.dgcount= data.length;})  
   }
  ngOnInit() {
    this.DepartmentForm = this.fb.group({
      pgid: ['', Validators.required],
      depname: ['', Validators.required],
    });
  }
  AddDepartment() {
    const dep: Departmentlist = new Departmentlist();
    dep.pgid = this.DepartmentForm.value.pgid;
    dep.depname = this.DepartmentForm.value.depname;
    this.service.InsertDepartment(dep).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      if (res.toString() === "Exists")
      {
      this.toastr.error ("Department Already Exists");
      }
     else 
      {
        this.toastr.success ("Added SuccessFully");
      }
      localStorage.setItem('depid', res.toString());

           this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/DepartmentList']));
           
           this.service.GetDepartmentlist("").subscribe((data: any) => { 
            this.Departmentlist= data;})  
          this.service.GetDepartmentlist("").subscribe((data: any) => { 
            this.dgcount= data.length;})   },
      error => {
        console.log(error);
      }
    );
    }



Delete(depid)
{
console.log(depid);
this.service.RemoveDepartment(depid).subscribe((res) => {
  console.log(res);
this.submited.emit(res.toString());

if (res.toString() === "Exception")
  {
  this.toastr.error ("ABC");
  }
 else 
  {
    this.toastr.info ("Removed SuccessFully");
  }
   this.service.GetDepartmentlist("").subscribe((data: any) => { 
    this.Departmentlist= data;})
    this.service.GetDepartmentlist("").subscribe((data: any) => { 
      this.dgcount= data.length;})
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