import { Component, OnInit, Input } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  isShow = true;

 
  empcount: string;
  empcount1: string;
  EscalateLeave: string;
  UserId;
  Userrole;
  count: number;
  notifycount: number;
  red;
  month;
  year;
  pgid;
  depid;
  Salid;
  IsHidden= true;


  constructor(private service: MasterServiceService, private router: Router, private fb: FormBuilder) {
    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");
    this.service.GetEmployeeLeaveList("where EmployeeLeave.status='Pending' and EmployeeProgram.reportto='" + this.UserId + "'").subscribe((data1: any) => {
      if (data1 == "") {
        this.count = 0;
      }
      else {
        this.count = data1[0].tRecordCount;
      }
      if (this.count != 0) {
        this.empcount = this.count + " Leave Approval Alert!";
      }
      
      else
      {
        var attdata = document.getElementById("dvdata");
        attdata.style.display="none";
      }
     
    })

   
 

    this.service.GetSalAlertList(this.UserId ).subscribe((data1: any) => {
console.log("salmonth"+data1);
this.month = data1[0].salmonth;
this.year = data1[0].salyear;
this.pgid = data1[0].pgid;
this.depid = data1[0].depid;
      if (data1 == "") {
        this.count = 0;
      }
      else {
        this.count = data1.length;
      }


    
      if (this.count != 0) {
     
        this.empcount1 = this.count + " Salary Approval Alert!";
     
      }
      else
      {
        var attdata1 = document.getElementById("dvdata1");
        attdata1.style.display="none";
      }
      
    })



    this.service.GetEmployeeLeaveList("where EmployeeLeave.status='Escalate'").subscribe((data1: any) => {
     console.log("alert"+data1)
      if (data1 == "") {
        this.count = 0;
      }
      else {
        this.count = data1[0].tRecordCount;
      }
      if (this.count != 0) {
        this.EscalateLeave = this.count +"  "+ "  Escalate Leave Approval Alert!";
      }
      
      else
      {
        var attdata = document.getElementById("dvdata2");
        attdata.style.display="none";
      }
     
    })

  }

  ngOnInit() {
  }

  
  featureHide() {
    this.isShow = false;
  };
  submenu() {

    this.red = this.router.navigate(["/ApproveLeaveList"]);
  }
  submenu1() {


    this.red = this.router.navigate(['/SalaryApprove', this.Userrole,this.pgid,this.depid,this.UserId,this.month,this.year]);
    console.log(this.red);
  }


  Escalate() {

    this.red = this.router.navigate(["/LeaveEscalation"]);
  }
}
 