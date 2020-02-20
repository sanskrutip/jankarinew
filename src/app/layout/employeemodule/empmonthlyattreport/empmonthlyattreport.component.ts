import { Component, OnInit ,EventEmitter} from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/ClassFiles/state';
import { City } from 'src/app/ClassFiles/city';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Partner } from 'src/app/ClassFiles/partner';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-empmonthlyattreport',
  templateUrl: './empmonthlyattreport.component.html',
  styleUrls: ['./empmonthlyattreport.component.scss']
})
export class EmpmonthlyattreportComponent implements OnInit {
  UserId;
  Userrole
  state:State[];
  city:City[];
  OrgnizationList:OrgnizationList[];
  ProgramList:ProgramList[];
  Departmentlist:Departmentlist[];
  Designationlist:Designationlist[];
  Partnerlist:Partner[];
  empattrpt: FormGroup;
  url: string;
  strwhr:string;
   lstwhere:Array<string>;
    array = [];
  StrWhere = "";
  showMyContainer: boolean = false;
attmonthlyrpt;
attmonthlyrptcount;
UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 pgname;
 finyear
 submited = new EventEmitter<string>();
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder) {
    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
      this.service = service;
      this.pageload();
   }
   ngOnInit() {

    this.empattrpt = this.fb.group({
           
      month: ['', Validators.required],
     
      year: ['', Validators.required],
     
     
  
          });
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
  else  {
  
 
    this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0  and Employee.state='"+stname+"'").subscribe((data:any)=>{this.city=data;})
 
  
  }

    } 
    onSelectProgram(pgname) {
      console.log(pgname);
      if (pgname == "")
      this.Departmentlist = null;
      
    else {
  
  
      this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid where Department.pgid='"+pgname+"' ").subscribe((data:any)=>{this.Departmentlist=data;})
    
   
    }
  
      }

      onSelectDepartment(depname) {
        console.log(depname);
        if (depname == "")
        this.Designationlist = null;
        
      else {
        this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid  where Designation.depid='"+depname+"'     ").subscribe((data:any)=>{this.Designationlist=data;})
    
   
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

    pageload()
{
  this.addressip();
  this.adduseractivity();

  if(this.Userrole=="R5" )
  {
  this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.state=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.city=data;})
  this.service.FillDropDown("Organization","distinct ogname","ogid","").subscribe((data:any)=>{this.OrgnizationList=data;})

  this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid where  EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.ProgramList=data;})
  this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid where  EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.Designationlist=data;})
  this.service.FillDropDown("Partner","distinct Partner.partnername","Partner.partnerid","").subscribe((data:any)=>{this.Partnerlist=data;})


}
else if(this.Userrole=="R6" ) {

  this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.state=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.city=data;})

  this.service.FillDropDown("Organization","distinct ogname","ogid","").subscribe((data:any)=>{this.OrgnizationList=data; })

  this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid ").subscribe((data:any)=>{this.ProgramList=data; console.log(this.ProgramList)})
  
  this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid   ").subscribe((data:any)=>{this.Designationlist=data;})
  this.service.FillDropDown("Partner","distinct Partner.partnername","Partner.partnerid","").subscribe((data:any)=>{this.Partnerlist=data;})


}
else {

  this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.state=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.city=data;})
  this.service.FillDropDown("Organization","distinct ogname","ogid","").subscribe((data:any)=>{this.OrgnizationList=data;})

  
  this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid ").subscribe((data:any)=>{this.ProgramList=data;})
  
  this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid   ").subscribe((data:any)=>{this.Designationlist=data;})
  this.service.FillDropDown("Partner","distinct Partner.partnername","Partner.partnerid","").subscribe((data:any)=>{this.Partnerlist=data;})


}
}
 


filterrecord(searchname,searchstate,searchcity,searchorg,searchprogram,searchdepartment,searchdesignation,searchmonth,searchyear,searchstatus,searchpartner){
  this.array=[];
  var where="";
  this.StrWhere  ="";
 

if (searchname != null && searchname != "" && searchname != "undefined" && searchname != "") {
  this.array.push("Employee.firstname%2B' '%2BEmployee.lastname like '%"+ searchname+"%'");
}

  if (searchstate != null && searchstate != "" && searchstate != "undefined"&& searchstate != "Select") {
    this.array.push("Employee.offstate='"+searchstate+"'");
  }
  if (searchcity != null && searchcity != "" && searchcity != "undefined"&& searchcity != "Select") {
    this.array.push("Employee.offcity='"+searchcity+"'");
  }
  if (searchorg != null && searchorg != "" && searchorg != "undefined"&& searchorg != "Select") {
    this.array.push("Program.ogid='"+searchorg+"'");
  }
  if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {
    this.array.push("Program.pgid='"+searchprogram+"'");
  }
  if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {
    this.array.push("SalaryMaster.department='"+searchdepartment+"'");
  }
  if (searchdesignation != null && searchdesignation != "" && searchdesignation != "undefined"&& searchdesignation != "Select") {
    this.array.push("EmployeeProgram.desid='"+searchdesignation+"'");
  }
  if (searchmonth != null && searchmonth != "" && searchmonth != "undefined"&& searchmonth != "Select") {
    this.array.push("SalaryMaster.salmonth='"+searchmonth+"'") ;
  }
 
  if (searchyear != null && searchyear != "" && searchyear != "undefined"&& searchyear != "Select") {

    this.array.push("SalaryMaster.salyear='"+searchyear+"'" );
  }
  if (searchstatus != null && searchstatus != "" && searchstatus != "undefined"&& searchstatus != "Select") {

    this.array.push("Employee.status='"+searchstatus+"'" );
  }
  if (searchpartner != null && searchpartner != "" && searchpartner != "undefined"&& searchpartner != "Select") {

    this.array.push("Partner.partnerid='"+searchpartner+"'" );
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
                    
                 console.log(   where );
  this.service.GetRptEmployeeMonthlyAttendance(where).subscribe((data: any) => {
    this.attmonthlyrpt = data;
    console.log(   this.attmonthlyrpt );
  })
 

  this.service.GetRptEmployeeMonthlyAttendance(where).subscribe((data: any) => {  this.attmonthlyrptcount= data.length;})

  

}



ExportReport( 
  searchname,searchstate,searchcity,searchorg,searchprogram,searchdepartment,searchdesignation,searchmonth,searchyear,searchstatus,searchpartner
  ) {
  this.array=[];
  var where="";
  this.StrWhere  ="";
 

if (searchname != null && searchname != "" && searchname != "undefined" && searchname != "") {
  this.array.push("Employee.firstname%2B' '%2BEmployee.lastname like '%"+ searchname+"%'");
}

  if (searchstate != null && searchstate != "" && searchstate != "undefined"&& searchstate != "Select") {
    this.array.push("Employee.offstate='"+searchstate+"'");
  }
  if (searchcity != null && searchcity != "" && searchcity != "undefined"&& searchcity != "Select") {
    this.array.push("Employee.offcity='"+searchcity+"'");
  }
  if (searchorg != null && searchorg != "" && searchorg != "undefined"&& searchorg != "Select") {
    this.array.push("Program.ogid='"+searchorg+"'");
  }
  if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {
    this.array.push("Program.pgid='"+searchprogram+"'");
  }
  if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {
    this.array.push("SalaryMaster.department='"+searchdepartment+"'");
  }
  if (searchdesignation != null && searchdesignation != "" && searchdesignation != "undefined"&& searchdesignation != "Select") {
    this.array.push("EmployeeProgram.desid='"+searchdesignation+"'");
  }
  if (searchmonth != null && searchmonth != "" && searchmonth != "undefined"&& searchmonth != "Select") {
    this.array.push("SalaryMaster.salmonth='"+searchmonth+"'") ;
  }
 
  if (searchyear != null && searchyear != "" && searchyear != "undefined"&& searchyear != "Select") {

    this.array.push("SalaryMaster.salyear='"+searchyear+"'" );
  }
  if (searchstatus != null && searchstatus != "" && searchstatus != "undefined"&& searchstatus != "Select") {

    this.array.push("Employee.status='"+searchstatus+"'" );
  }
  if (searchpartner != null && searchpartner != "" && searchpartner != "undefined"&& searchpartner != "Select") {

    this.array.push("Partner.partnerid='"+searchpartner+"'" );
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
                    
                 console.log(   where );

 


  
  this.service.GetRptEmployeeMonthlyAttendance(where).subscribe((data: any) => {

    let new_list = data.map(function (obj) {  
      return {
        state: obj.state,
        city: obj.city,
        empid: obj.empid,
        status: obj.status,
        employeename: obj.employeename,
        pgname: obj.pgname,
        depname: obj.depname,
        desname: obj.desname,
        partnername: obj.partnername==null?'':obj.partnername,
        gender: obj.gender,
        mobile: obj.mobile,
        reportsto: obj.reportsto,
        salmonth: obj.salmonth,
        salyear: obj.salyear,
        TotalDays: obj.TotalDays,
        NoOfSundays: obj.NoOfSundays,
        Absentdays: obj.Absentdays,
        Presentdays: obj.Presentdays,
        
       
      }
    });


    new AngularCsv(new_list, "Employee Monthly Attendance  Report", this.csvOptions);

  })



}
csvOptions = {

  quoteStrings: '"',
  decimalseparator: '.',

  useBom: true,
  noDownload: false,

  headers: [ "State", "City", "Employee ID	", "Employee Status	", "Employee Name	", "Program	", "Department", "Designation", "Partner Name	", "Gender", "Contact No.	", "Reports To	", "Working Month	", "Working Year	", "Working Days	", "Total Sundays	","Total Absent Days	", "Total Present Days"]
};


adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserId ;
  activity.activity = "Visiting EmployeeMonthlyAttendanceReport";
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
