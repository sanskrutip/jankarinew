import { Component, OnInit ,EventEmitter} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Empleave } from 'src/app/ClassFiles/leavestatus';
import { Employeeleave } from 'src/app/ClassFiles/employeeleave';




@Component({
  selector: 'app-leave-escalation',
  templateUrl: './leave-escalation.component.html',
  styleUrls: ['./leave-escalation.component.scss']
})
export class LeaveEscalationComponent implements OnInit {
  empleaveid:string
  count: number;
  notifycount: number;
  EsclateLeave:string;
  EsclateLeavecount;
  Employeeleave:Employeeleave;
  submited = new EventEmitter<string>();
  UserId;
  constructor(private service: MasterServiceService,private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {

      this.UserId = localStorage.getItem("UserId");
      this.service = service;

      this.service.GetEmployeeLeaveList("where EmployeeLeave.status='Escalate'").subscribe((data: any) => {
         
        this.EsclateLeave= data;
        console.log( this.EsclateLeave)
    })

    this.service.GetEmployeeLeaveList("where EmployeeLeave.status='Escalate'").subscribe((data: any) => {
         
      this.EsclateLeavecount= data.length;
  })
}

  

  ngOnInit() {
  }

  ApproveLeave(empleaveid,eid) {
    const leave: Empleave = new Empleave();   
    leave.status = "Approve";

    leave.approveby = this.UserId;

        
        console.log(leave);
        this.service.ApproveEmployeeLeave(empleaveid,eid,"No",leave).subscribe((res) => {
      
          this.submited.emit(res.toString());
          console.log(res.toString());
        
          this.toastr.success ("Approve SuccessFully");
               this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/ApproveLeaveList']));
               

              },
          error => {
            console.log(error);
          }
        );
        }  

}
