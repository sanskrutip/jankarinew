

import { Component, OnInit , EventEmitter} from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router'; 
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {
  closeResult: string;

  DesignationForm: FormGroup;
  dgcount:string;
  Designationlist:Designationlist[];
  Departmentlist:Departmentlist[];
  submited = new EventEmitter<string>();
  model = new Designationlist('','',);
  constructor(private service: MasterServiceService,
    private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {

    this.service = service;
     service.GetDepartmentlist("").subscribe((data: any) => { this.Departmentlist= data;})

  service.GetDesignationtList("").subscribe((data: any) => { 
     this.Designationlist= data;
   console.log( this.Designationlist);
   })

   service.GetDesignationtList("").subscribe((data: any) => {  this.dgcount= data.length;})
    
   }

  ngOnInit() {
    this.DesignationForm = this.fb.group({
      depid: ['', Validators.required],
      desname: ['', Validators.required],
    });
  }
  AddDesignation() {

    const des: Designationlist = new Designationlist();
    console.log(des);
    des.depid = this.DesignationForm.value.depid;
    des.desname = this.DesignationForm.value.desname;
    this.service.InsertDesignation(des).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      console.log(res.toString());
      if (res.toString() === "Exists")
      {
      this.toastr.error ("Designation Already Exists");
      }
     else 
      {
        this.toastr.success ("Added SuccessFully");
      }
      localStorage.setItem('desid', res.toString());


           this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/DesignationList'])); 
           
           this.service.GetDesignationtList("").subscribe((data: any) => { 
            this.Designationlist= data;}) 
            this.service.GetDesignationtList("").subscribe((data: any) => {  this.dgcount= data.length;}) 
           },
      error => {
        console.log(error);
      }
    );
    }
    Delete(desid)
    {
console.log(desid);
this.service.RemoveDesignation(desid).subscribe((res) => {
  this.submited.emit(res.toString());
  if (res.toString() === "Exception")
  {
  this.toastr.error ("Designation  delete from Department");
  }
 else 
  {
    this.toastr.info ("Removed SuccessFully");
  }
  // this.toastr.error("Removed SuccessFully");
         this.service.GetDesignationtList("").subscribe((data: any) => { 
        this.Designationlist= data;}) 
        this.service.GetDesignationtList("").subscribe((data: any) => {  this.dgcount= data.length;}) 
      
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