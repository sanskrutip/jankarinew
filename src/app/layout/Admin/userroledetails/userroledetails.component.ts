import { Component, OnInit,EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RoleDetail } from 'src/app/ClassFiles/role-detail';
import { Rolemenu } from 'src/app/ClassFiles/rolemenu';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userroledetails',
  templateUrl: './userroledetails.component.html',
  styleUrls: ['./userroledetails.component.scss']
})
export class UserroledetailsComponent implements OnInit {
  RoleDetail:RoleDetail;
  Rolemenu:Rolemenu;
  roleid;
  closeResult: string;
  submited = new EventEmitter<string>();
menucount:string;
  constructor(private service: MasterServiceService,private toastr: ToastrService,private modalService: NgbModal, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
    this.service = service;
    
    this.roleid=route.snapshot.params["id"];

    service.GetRoleDetails(this.roleid).subscribe((data: any) => { 
      this.RoleDetail= data;
     console.log(data);
     })

     service.GetMenuForRole(this.roleid).subscribe((data: any) => { 
      this.Rolemenu= data;
     console.log(data);
     })
     service.GetMenuForRole(this.roleid).subscribe((data: any) => { 
      this.menucount= data.length;
     console.log(data);
     })
   }

   Addmenu(){
    this.router.navigate(['/UserRoleMenuAssign', this.roleid]);
   }

   Delete(menuid)
            {
        this.service.RemoveRoleMenu(this.roleid,menuid).subscribe((res) => {
          this.submited.emit(res.toString());
       
            this.toastr.error("Removed SuccessFully");
       
                     this.service.GetMenuForRole(this.roleid).subscribe((data:any)=>{this.Rolemenu=data;})
                     this.service.GetMenuForRole(this.roleid).subscribe((data: any) => { this.menucount= data.length;})

              },
          error => {
            console.log(error);
          }
        );
            }
  ngOnInit() {
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
