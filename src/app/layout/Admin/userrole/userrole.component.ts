import { Component, OnInit ,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { Userrole } from 'src/app/ClassFiles/userrole';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.scss']
})
export class UserroleComponent implements OnInit {
  closeResult: string;

  UserroleForm: FormGroup;
  UserRole:Userrole[];
  ProgramList:ProgramList[];
  submited = new EventEmitter<string>();
  model = new Userrole('','','',);
  rolecount:string;
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {

    this.service = service;
    
    service.GetProgramlist("").subscribe((data: any) => { 
      this.ProgramList= data;
     console.log(data);
     })
      

      service.UserRoleList().subscribe((data: any) => { 
      this.UserRole= data;
    console.log( this.UserRole);
    })

    service.UserRoleList().subscribe((data: any) => {  this.rolecount= data.length;})

   }

  ngOnInit() {
    this.UserroleForm = this.fb.group({
      rolename: ['', Validators.required],
      description: ['', Validators.required],
      pgid: ['', Validators.required],
    });
  }
  AddUserrole() {
    const role: Userrole = new Userrole();
    role.rolename = this.UserroleForm.value.rolename;
    role.description = this.UserroleForm.value.description;
    role.pgid = this.UserroleForm.value.pgid;
    console.log(role);
    this.service.InsertRole(role).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
       
      if (res.toString() === "Exists")
      {
      this.toastr.error ("User Role Already Exists");
      }
     else 
      {
        this.toastr.success ("Added SuccessFully");
      }
      localStorage.setItem('roleid', res.toString());
    this.service.UserRoleList().subscribe((data: any) => { this.UserRole= data;})
    this.service.UserRoleList().subscribe((data: any) => {  this.rolecount= data.length;})

           this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/UserRole']));
          
             },
      error => {
        console.log(error);
      }
     
    );

    }



Delete(roleid)
{
console.log(roleid);
this.service.RemoveUserrole(roleid).subscribe((res) => {
  console.log(res);
this.submited.emit(res.toString());
if (res.toString() === "Exception") {
  this.toastr.error("ABC");
}
else {
  this.toastr.info("Removed SuccessFully");
}  
   this.service.UserRoleList().subscribe((data: any) => { this.UserRole= data;})
this.service.UserRoleList().subscribe((data: any) => {  this.rolecount= data.length;})
  },
error => {
console.log(error);
}
);
}
open(content) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
    return `with: ${reason}`;
  }

}
}
