import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Employeeleave } from 'src/app/ClassFiles/employeeleave';
import { Employee } from 'src/app/ClassFiles/employee';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-approveleavelist',
  templateUrl: './approveleavelist.component.html',
  styleUrls: ['./approveleavelist.component.scss']
})
export class ApproveleavelistComponent implements OnInit {
  Employeeleave:Employeeleave
  count:number;
  EmployeeList:Employee
  UserActivity:UserActivity[];
model = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 UserId;
 pgname;
 finyear
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder) { 
    this.UserId = localStorage.getItem("UserId");
    this.pgname = localStorage.getItem("pgname");

   
    this.service = service;
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
  service.GetEmployeeLeaveList("where EmployeeLeave.status='Pending' and EmployeeProgram.reportto='"+this.UserId +"'").subscribe((data: any) => { 
    this.Employeeleave= data;
    console.log( this.Employeeleave);
    })

  
    this.service.GetEmployeeLeaveList("where EmployeeLeave.status='Pending' and EmployeeProgram.reportto='"+this.UserId +"'").subscribe((data1: any) => {
    

      
      if (data1 == "") {

        this.count = 0;
      }
      else {
        this.count = data1[0].tRecordCount;
      }


    })
  }

  ngOnInit() {
    this.addressip();
this.adduseractivity();
  }
  adduseractivity()
  {
    this.ipadd = localStorage.getItem("IP");
  
    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserId ;
    activity.activity = "Visiting ApproveLeavelist";
    activity.pageurl = this.router.url;
    activity.prgid = "";
    activity.userip =   this.ipadd ;
    let date =new Date();
    activity.aLogDate = formatDate(date, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');
  
    this.service.InsertUserActivity(activity).subscribe((data: any) => {
      console.log(data);
    })
  }
  
  
  addressip()
  {  this.service.getIPAddress().subscribe((res:any)=>{
    this.ipAddress=res.ip;
  localStorage.setItem('IP', res.ip);
  });
  
  
  }
}
