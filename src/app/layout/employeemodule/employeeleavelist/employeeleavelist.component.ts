import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Employeeleave } from 'src/app/ClassFiles/employeeleave';
import { Employee } from 'src/app/ClassFiles/employee';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Office } from 'src/app/ClassFiles/office';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-employeeleavelist',
  templateUrl: './employeeleavelist.component.html',
  styleUrls: ['./employeeleavelist.component.scss']
})
export class EmployeeleavelistComponent implements OnInit {
  Employeeleave:Employeeleave
  count:number;
  EmployeeList:Employee
  department:Departmentlist;
  office:Office;
  UserActivity:UserActivity[];
model = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 UserId;
 Userrole;
 strwhr:string;
 pgname;
 finyear
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder) {
    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");
    this.service = service;
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    this.pageload();
  
    this.strwhr="where Employeeleave.empid='"+this.UserId+"'";

    service.GetEmployeeLeaveList( this.strwhr).subscribe((data: any) => { 
      this.Employeeleave= data;
      console.log( this.Employeeleave);
      })
      this.service.GetEmployeeLeaveList( this.strwhr).subscribe((data: any) => {
        this.count = data[0].tRecordCount;
        console.log(   this.count );
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
    activity.activity = "Visiting EmployeeLeavelist";
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
  pageload()
  {
   
    this.service.FillDropDown("Employee","distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid","where Employee.status=0 and Employee.empid='"+ this.UserId+"'")
    .subscribe((data: any) => { this.EmployeeList = data; })
  
    this.service.FillDropDown("Department","distinct Department.depname","Department.depid","inner join Employeeprogram on Employeeprogram.depid=Department.depid where  Employeeprogram.empid='"+ this.UserId+"'")
    .subscribe((data: any) => { this.department = data; 
    console.log(this.department );
    })
  
    this.service.FillDropDown("Employee","distinct Office.offname","Office.offid","inner join Office on Employee.offid=Office.offid where Employee.status=0 and Employee.empid='"+ this.UserId+"'")
    .subscribe((data: any) => { this.office = data;
      console.log(this.department ); })
   
  }
}
