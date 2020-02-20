import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/ClassFiles/state';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { City } from 'src/app/ClassFiles/city';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/ClassFiles/employee';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { style } from '@angular/animations';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.scss']
})
export class EmployeeReportComponent implements OnInit {
  state:State[];
  Distirct:Distirct[];
  city:City[];
  ProgramList:ProgramList[];
  Designationlist:Designationlist[];
  employeelist:Employee[];
  empcount:number;
  strwhr:string;
  sortedData: Employee[];
   lstwhere:Array<string>;
    array = [];
  StrWhere = "";
  UserId;
  Userrole;
  UserActivity:UserActivity[];
model = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 finyear;
 pgname
  constructor( private service: MasterServiceService, private router: Router,private fb: FormBuilder) { 
    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");
    this.pgname = localStorage.getItem("pgname");

    
    this.service = service;
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
//  service.GetStateList().subscribe((data:any)=>{this.state=data;})
//  service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
//  service.GetCityList().subscribe((data:any)=>{this.city=data;})
//  service.GetProgramlist("").subscribe((data: any) => { 
//   this.ProgramList= data;
//   // console.log(data);
//   })

  this.pageload();
  if(this.Userrole=="R5" )
{
  
  this.strwhr="where EmployeeProgram.reportto='"+this.UserId+"'";

}
else if(this.Userrole=="R6" ) {
  this.strwhr="";
}

  service.GetEmployeeReport(this.strwhr).subscribe((data: any) => { 
    this.employeelist= data;
    console.log(   "abc"+this.employeelist );
    })

    this.service.GetEmployeeReport(this.strwhr).subscribe((data: any) => {
      if (data == "") {

        this.empcount = 0;
      }
      else if (data == null && data[0] == null) {

        this.empcount = 0;
      }
      else {
        this.empcount = data[0].tRecordCount;
      }

    })
  }
  filterrecord(searchname,searchstate,searchcity,searchprogram,searchdesignation,searchemptype,searchpif){
    this.array=[];
    var where="";
    this.StrWhere  ="";
    if (searchname != null && searchname != "" && searchname != "undefined"&& searchname != "") {
      this.array.push("Employee.firstname%2B' '%2BEmployee.lastname like '%"+ searchname+"%'");
    }
   
    if (searchstate != null && searchstate != "" && searchstate != "undefined"&& searchstate != "Select") {
      this.array.push("Employee.state='"+searchstate+"'");
    }
    
    if (searchcity != null && searchcity != "" && searchcity != "undefined"&& searchcity != "Select") {
      this.array.push("Employee.city='"+searchcity+"'") ;
    }
   
    if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

      this.array.push("EmployeeProgram.pgid='"+searchprogram+"'" );
    }
  
    if (searchdesignation != null && searchdesignation != "" && searchdesignation != "undefined"&& searchdesignation != "Select") {
      this.array.push("EmployeeProgram.desid='"+searchdesignation+"'") ;
    }
    if (searchemptype != null && searchemptype != "" && searchemptype != "undefined"&& searchemptype != "Select") {
      this.array.push("Employee.emptype='"+searchemptype+"'") ;
    }
    if (searchpif != null && searchpif != "" && searchpif != "undefined"&& searchpif != "Select") {
      this.array.push("Employee.pifassociate='"+searchpif+"'") ;
    }
    if(this.Userrole=="R5" )
    {
      this.array.push("EmployeeProgram.reportto='"+this.UserId+"'") ;
    
    }


   if(this.array.length==0)
   {
    where= this.StrWhere;
   }
   else if (this.array.length == 1)
           {
            this.StrWhere  =   " where " + this.array[0].toString();
          }
          else
                   {
                    this.StrWhere  = " where " + this.array[0].toString();
                    for (let i = 1; i <  this.array.length; i++)
                       {
                        this.StrWhere  =   this.StrWhere  + " and " + this.array[i].toString();
                       }

                      
                   }
                   where=  this.StrWhere;   
                      

    this.service.GetEmployeeReport(where).subscribe((data: any) => {
      this.employeelist = data;
      console.log(   this.empcount );
    })
   
    this.service.GetEmployeeReport(where).subscribe((data: any) => {
      if (data == "") {

        this.empcount = 0;
      }
      else if (data == null && data[0] == null) {

        this.empcount = 0;
      }
      else {
        this.empcount = data[0].tRecordCount;
      }

    
  
    })

   

  }
  onSelectState(stname) {
    console.log(stname);
    if (stname == "")
    this.city = null;
    else
    if(this.Userrole=="R5" )
    {
  
    this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"' and Employee.state='"+stname+"'").subscribe((data:any)=>{this.city=data;})
 }
  else if(this.Userrole=="R6" ) {
  
 
    this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0  and Employee.state='"+stname+"'").subscribe((data:any)=>{this.city=data;})
 
  
  }
    } 
    ExportReport(searchname,searchstate,searchcity,searchprogram,searchdesignation,searchemptype,searchpif) {

      this.array=[];
    var where="";
    this.StrWhere  ="";
    if (searchname != null && searchname != "" && searchname != "undefined"&& searchname != "") {
      this.array.push("Employee.firstname%2B' '%2BEmployee.lastname like '%"+ searchname+"%'");
    }
   
    if (searchstate != null && searchstate != "" && searchstate != "undefined"&& searchstate != "Select") {
      this.array.push("Employee.state='"+searchstate+"'");
    }
    
    if (searchcity != null && searchcity != "" && searchcity != "undefined"&& searchcity != "Select") {
      this.array.push("Employee.city='"+searchcity+"'") ;
    }
   
    if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

      this.array.push("EmployeeProgram.pgid='"+searchprogram+"'" );
    }
  
    if (searchdesignation != null && searchdesignation != "" && searchdesignation != "undefined"&& searchdesignation != "Select") {
      this.array.push("EmployeeProgram.desid='"+searchdesignation+"'") ;
    }
    if (searchemptype != null && searchemptype != "" && searchemptype != "undefined"&& searchemptype != "Select") {
      this.array.push("Employee.emptype='"+searchemptype+"'") ;
    }
    if (searchpif != null && searchpif != "" && searchpif != "undefined"&& searchpif != "Select") {
      this.array.push("Employee.pifassociate='"+searchpif+"'") ;
    }
    if(this.Userrole=="R5" )
    {
      this.array.push("EmployeeProgram.reportto='"+this.UserId+"'") ;
    
    }

   if(this.array.length==0)
   {
    where= this.StrWhere;
   }
   else if (this.array.length == 1)
           {
            this.StrWhere  =   " where " + this.array[0].toString();
          }
          else
                   {
                    this.StrWhere  = " where " + this.array[0].toString();
                    for (let i = 1; i <  this.array.length; i++)
                       {
                        this.StrWhere  =   this.StrWhere  + " and " + this.array[i].toString();
                       }

                      
                   }
                   where=  this.StrWhere;   
                      

    
      this.service.GetEmployeeReport(where).subscribe((data: any) => {
  
        let new_list = data.map(function (obj) {
          return {
            state: obj.state,
            city: obj.city,
            empid: obj.empid,
            empname: obj.empname,
            gender: obj.gender,
            dob: obj.dob,
            doj: obj.doj,
            pancard: obj.pancard,
            aadharnumber: obj.aadharnumber,
            pgname: obj.pgname,
            depname: obj.depname,
            desname: obj.desname,
            partnername: obj.partnername,
            paytype: obj.paytype,
            beneficiaryid: obj.beneficiaryid,
            emptype: obj.emptype,
            mobile: obj.mobile,
            email: obj.email,
            reporttoname: obj.reporttoname,
            salapprovalname: obj.salapprovalname,
            pifassociate: obj.pifassociate,
            maritalstatus: obj.maritalstatus,
            bloodgroup: obj.bloodgroup,
            age: obj.age,
          }
        });
  
  
        new AngularCsv(new_list, "DownLoad Employee Report", this.csvOptions);
  
      })
  
  
  
    }
    csvOptions = {

      quoteStrings: '"',
      decimalseparator: '.',
      // // showLabels: true,
     //showTitle: "Employee Report",

      useBom: true,
      noDownload: false,
   
      headers: ["Office State", "Office City", "Employee ID", "Employee Name", "Gender", "Date of Birth", "Date of Joining", "PAN Number", "Aadhar Number", "Program", "Department", "Designation", "Partner", "Pay Type", "Beneficiary Id", "Emp Type", "Mobile", "Email ID", "Reports To","Salary Approve By","Pif Associate","Marital Status","Bloodgroup","Age"]
    };
  ngOnInit() {

    this.addressip();
    this.adduseractivity();
    
  }

  
pageload()
{
  if(this.Userrole=="R5" )
  {
  this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.state=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.city=data;})
  this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid where  EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.ProgramList=data;})
  
  this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid where  EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.Designationlist=data;})
}
else if(this.Userrole=="R6" ) {

  this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.state=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.city=data;})
  this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid ").subscribe((data:any)=>{this.ProgramList=data;})
  
  this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid   ").subscribe((data:any)=>{this.Designationlist=data;})


}
}

adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserId ;
  activity.activity = "Visiting EmployeeReport";
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