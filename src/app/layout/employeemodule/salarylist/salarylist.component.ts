import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Salarylist } from 'src/app/ClassFiles/salarylist';
import { User } from 'src/app/user';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';

@Component({
  selector: 'app-salarylist',
  templateUrl: './salarylist.component.html',
  styleUrls: ['./salarylist.component.scss']
})
export class SalarylistComponent implements OnInit {
  ProgramList: ProgramList[];
  Departmentlist: Departmentlist[];
  url: string;
  strwhr: string;
  salarylist: Salarylist;
  salcount: number;
  lstwhere: Array<string>;
  array = [];
  StrWhere = "";
  whr: string;
  us: string;
  og: string;
  ur: string;
 
  Userrole: string;
  Userrolename: string;
  UserID;
  ogid: string;
  UserActivity:UserActivity[];
model = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 pgname;
 finyear;
  constructor(private service: MasterServiceService, private toastr: ToastrService,
    private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.service = service;
    this.UserID = localStorage.getItem('UserId');
    this.Userrole = localStorage.getItem('role');
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    this.pageload();
    service.GetSalaryList("").subscribe((data: any) => {
      this.salarylist = data;

    })
    this.service.GetSalaryList("").subscribe((data: any) => {

      if (data == "") {

        this.salcount = 0;
      }
      else if (data == null && data[0] == null) {

        this.salcount = 0;
      }
      else {
        this.salcount = data[0].tRecordCount;
      }

    })

  }
  onSelectProgram(pgid) {
    console.log(pgid);
    if (pgid == "")
      this.Departmentlist = null;
    else

      if (this.Userrole == "R5") {
        this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='" + this.UserID + "' and  Department.pgid='" + pgid + "'").subscribe((data: any) => { this.Departmentlist = data; })
      }
      else if (this.Userrole == "R6") {
        this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  Department.pgid='" + pgid + "'").subscribe((data: any) => { this.Departmentlist = data; })

      }

  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }



  filterrecord(searchprogram, searchdepartment, searchmonth, searchyear) {
    this.array = [];
    var where = "";
    this.StrWhere = "";
    if (searchprogram != null && searchprogram != "" && searchprogram != "undefined" && searchprogram != "Select") {
      this.array.push("Program.pgid='" + searchprogram + "'");
    }

    if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined" && searchdepartment != "Select") {
      this.array.push("Department.depid='" + searchdepartment + "'");
    }

    if (searchmonth != null && searchmonth != "" && searchmonth != "undefined" && searchmonth != "Select") {

      this.array.push("SalaryMaster.salmonth='" + searchmonth + "'");
    }

    if (searchyear != null && searchyear != "" && searchyear != "undefined" && searchyear != "Select") {
      this.array.push("SalaryMaster.salyear='" + searchyear + "'");
    }
    this.array.push("Employee.status='0'");

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


    this.service.GetProfile(this.UserID).subscribe((data: any) => {

      this.Userrolename = data[0].Userrolename;
    })


    if (this.Userrolename == "Team Leader") {
      var org = this.service.GetOrgid(this.UserID).FirstOrDefault();
      where += this.GenuserSalList(where, this.UserID, this.Userrolename, org);
    }
    else {


      this.service.GetUserProgramDetails(this.UserID).subscribe((data: any) => {

        where += this.GenuserSalList(where, this.UserID, this.Userrolename, data[0].ogid);

      })


    }

    this.service.GetSalaryList(where).subscribe((data: any) => {
      this.salarylist = data;

    })
    this.service.GetSalaryList(where).subscribe((data1: any) => {

      if (data1 == "") {

        this.salcount = 0;
      }
      else {
        this.salcount = data1[0].tRecordCount;
      }

    })

  }

  ngOnInit() {
    this.pageload();
    this.addressip();
this.adduseractivity();

  }

  GenuserSalList(whr, us, ur, og) {

    var UserWhr = "";
    if (ur == "Accountant" || ur == "Team Leader" || ur == "BillingDep") {
      if (whr == "") {
        UserWhr = "where prepareby='" + us + "' and Program.ogid='" + og + "' and Employee.status=0";
        return UserWhr;
      }
      else {
        UserWhr = " and prepareby='" + us + "' and Program.ogid='" + og + "' and Employee.status=0";
        return UserWhr;
      }
    }
    else if (ur == "Operation Head") {
      if (whr == "") {
        UserWhr = "where Employee.reportsto='" + us + "' and Program.ogid='" + og + "' and Employee.status=0 and SalaryDetails.status=0";
        return UserWhr;
      }
      else {
        UserWhr = " and Employee.reportsto='" + us + "' and Program.ogid='" + og + "' and Employee.status=0 and SalaryDetails.status=0";
        return UserWhr;
      }
    }
    else if (ur == "Program Co-Ordinator" || ur == "Program Co-Ordinator_NDLM") {
      if (whr == "") {
        UserWhr = "where Employee.salapproval='" + us + "' and Program.ogid='" + og + "' and Employee.status=0 and SalaryDetails.status=0";
        return UserWhr;
      }
      else {
        UserWhr = " and Employee.salapproval='" + us + "' and Program.ogid='" + og + "' and Employee.status=0 and SalaryDetails.status=0";
        return UserWhr;
      }
    }
    else if (ur == "Program Co-OrdinatorLTI") {
      if (whr == "") {
        UserWhr = "where Employee.salapproval='" + us + "' and Program.ogid='" + og + "' and Employee.status=0 and SalaryDetails.status=0";
        return UserWhr;
      }
      else {
        UserWhr = " and Employee.salapproval='" + us + "' and Program.ogid='" + og + "' and Employee.status=0 and SalaryDetails.status=0";
        return UserWhr;
      }
    }
    else if (ur == "Admin") {
      if (whr == "") {
        UserWhr = "where Program.ogid='" + og + "' and Employee.status=0";
        return UserWhr;
      }
      else {
        UserWhr = "and Program.ogid='" + og + "' and Employee.status=0";
        return UserWhr;
      }
    }

    else {
      if (whr == "") {
        UserWhr = "where prepareby='" + us + "' and Program.ogid='" + og + "' and Employee.status=0";
        return UserWhr;
      }
      else {
        UserWhr = " and prepareby='" + us + "' and Program.ogid='" + og + "' and Employee.status=0";
        return UserWhr;
      }
    }
  }
 
  pageload()
{
  if(this.Userrole=="R5" )
  {
 this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid where  EmployeeProgram.reportto='"+  this.UserID +"'").subscribe((data:any)=>{this.ProgramList=data;})
  
  this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='"+  this.UserID +"'").subscribe((data:any)=>{this.Departmentlist=data;})



}
else if(this.Userrole=="R6" ) {

  this.service.FillDropDown("SalaryMAster","distinct Program.pgname","Program.pgid","inner join Department on Department.depid=SalaryMAster.department inner join Program on Department.pgid=Program.pgid ").subscribe((data:any)=>{this.ProgramList=data;})
  
  this.service.FillDropDown("SalaryMAster","distinct Department.depname","Department.depid","inner join Department on SalaryMAster.department=Department.depid   ").subscribe((data:any)=>{this.Departmentlist=data;})


}
}
adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserID ;
  activity.activity = "Visiting Salarylist";
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