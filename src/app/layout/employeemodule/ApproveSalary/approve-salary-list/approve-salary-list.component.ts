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
  selector: 'app-approve-salary-list',
  templateUrl: './approve-salary-list.component.html',
  styleUrls: ['./approve-salary-list.component.scss']
})
export class ApproveSalaryListComponent implements OnInit {
  salapproval;
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
 finyear;
 array = [];
 ApprovedSalary;
 StrWhere = "";
 whre;
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder) {
    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");
    this.service = service;
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })



    this.pageload();
  
    if(this.Userrole=="R6" || this.Userrole=="R78")
  {
this.whre="where  Employee.status=0 and salarydetails.status=0";
}
else{
  this.whre="where Employee.salapproval='" + this.UserId + "' and Employee.status=0 and salarydetails.status=0";
}
    service.GetApprovedSalaryList(this.whre).subscribe((data: any) => { 
      this.salapproval= data;
      console.log( this.salapproval);
      })
      service.GetApprovedSalaryList(this.whre).subscribe((data: any) => {
        this.count = data.length;
        console.log( "this.count"+this.count );
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
  
  filterrecord(searchmonth,searchyear) {
    this.array = [];
    var where = "";
    this.StrWhere = "";

    if (searchmonth != null && searchmonth != "" && searchmonth != "undefined" && searchmonth != "Select") {
      this.array.push("SalaryMaster.salmonth='" + searchmonth + "'");
    }

    if (searchyear != null && searchyear != "" && searchyear != "undefined" && searchyear != "Select") {

      this.array.push("SalaryMaster.salyear='" + searchyear + "'");

    }

    if(this.Userrole=="R6" || this.Userrole=="R78")
  {
this.array.push(" Employee.status=0");
}
else{
  this.array.push(" where Employee.salapproval='" + this.UserId + "' and Employee.status=0");
}

    if (this.array.length == 0) {
      where = this.StrWhere;
    }
    else if (this.array.length == 1) {
      this.StrWhere = " where " + this.array[0].toString();
    }
    else {
      this.StrWhere = " where " + this.array[0].toString();
      for (let i = 1; i < this.array.length; i++) {
        this.StrWhere = this.StrWhere + " and " + this.array[i].toString();
      }


    }
    where = this.StrWhere;
    console.log(where);
    this.service.GetApprovedSalaryList(where).subscribe((data: any) => {
      this.ApprovedSalary = data;
      console.log("serch list" + this.ApprovedSalary);

    })
    this.service.GetApprovedSalaryList(where).subscribe((data: any) => {
   
      if (data == "") {

        this.ApprovedSalary = 0;
      }
      else if (data == null && data[0] == null) {

        this.ApprovedSalary = 0;
      }
      else {
        this.ApprovedSalary = data[0].tRecordCount;
      }
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
