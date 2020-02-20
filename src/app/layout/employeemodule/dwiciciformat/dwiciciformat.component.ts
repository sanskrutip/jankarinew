import { Component, OnInit ,EventEmitter} from '@angular/core';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Partner } from 'src/app/ClassFiles/partner';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-dwiciciformat',
  templateUrl: './dwiciciformat.component.html',
  styleUrls: ['./dwiciciformat.component.scss']
})
export class DwiciciformatComponent implements OnInit {
  ProgramList:ProgramList[];
  UserId:string;
  Departmentlist:Departmentlist[];
  url: string;

  Designationlist:Designationlist[];
  strwhr:string;
  Partnerlist:Partner[];
   lstwhere:Array<string>;
    array = [];
  StrWhere = "";
  UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 finyear;
 pgname
 submited = new EventEmitter<string>();
  constructor( private service: MasterServiceService, private router: Router,private fb: FormBuilder) {
    this.UserId = localStorage.getItem("UserId");
    this.pgname = localStorage.getItem("pgname");

    

    this.service = service;
    this.pageload()
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    
  }

   onSelectProgram(pgname) {
    console.log(pgname);
    if (pgname == "")
    this.Departmentlist = null;
    
  else {


    this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid where Department.pgid='"+pgname+"' ").subscribe((data:any)=>{this.Departmentlist=data;})
  
    this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid inner join Program on Program.pgid=Employeeprogram.pgid where Employeeprogram.pgid='"+pgname+"'     ").subscribe((data:any)=>{this.Designationlist=data;})
  
 
 
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
  ngOnInit()
   {}

   pageload()
   {
    this.addressip();
    this.adduseractivity();
 this.service.FillDropDown("Partner","distinct Partner.partnername","Partner.partnerid","").subscribe((data:any)=>{this.Partnerlist=data;})
  
  this.service.FillDropDown("Program","distinct Program.pgname","Program.pgid","where Program.ogid='OG1' ").subscribe((data:any)=>{this.ProgramList=data;})
  this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid ").subscribe((data:any)=>{this.Departmentlist=data;})

  this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid   ").subscribe((data:any)=>{this.Designationlist=data;})


   }
    ExportReport(searchprogram,searchdepartment,searchdesignation,searchpartner,searchmonth,searchyear,searchdate) {

      this.array=[];
    var where="";
    this.StrWhere  ="";
    if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

      this.array.push("EmployeeProgram.pgid='"+searchprogram+"'" );
    }
    if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {

      this.array.push("EmployeeProgram.depid='"+searchdepartment+"'" );
    }
    if (searchdesignation != null && searchdesignation != "" && searchdesignation != "undefined"&& searchdesignation != "Select") {
      this.array.push("EmployeeProgram.desid='"+searchdesignation+"'") ;
    }
    if (searchpartner != null && searchpartner != "" && searchpartner != "undefined"&& searchpartner != "Select") {
      this.array.push("Employee.partnerid='"+searchpartner+"'");
    }
    
    if (searchmonth != null && searchmonth != "" && searchmonth != "undefined"&& searchmonth != "Select") {
      this.array.push("salmonth='"+searchmonth+"'") ;
    }
    if (searchyear != null && searchyear != "" && searchyear != "undefined"&& searchyear != "Select") {
      this.array.push("salyear='"+searchyear+"'") ;
    }
    if (searchdate != null && searchdate != "" && searchdate != "undefined"&& searchdate != "dd/mm/yyyy") {
      this.array.push("convert(date,aLogDate) = convert(date,'"+searchdate +"', 103)");
    }
   
   
  

   if(this.array.length==0)
   {
    where= this.StrWhere;
   }
   else if (this.array.length == 1)
           {
            this.StrWhere  =   " and " + this.array[0].toString();
          }
          else
                   {
                    this.StrWhere  = " and " + this.array[0].toString();
                    for (let i = 1; i <  this.array.length; i++)
                       {
                        this.StrWhere  =   this.StrWhere  + " and " + this.array[i].toString();
                       }

                      
                   }
                   where=  this.StrWhere;   
                      

    
      this.service.GetDownloadICICISalaryList(where).subscribe((data: any) => {
  
        let new_list = data.map(function (obj) {
          return {
            tansactiontype: obj.tansactiontype,
            debitacno: obj.debitacno,
            beneficiaryid: obj.beneficiaryid,
            SalaryAmount: obj.SalaryAmount,
            Employeemname: obj.Employeemname,
            salmonth: obj.salmonth,
            salyear: obj.salyear,
            salpreparename: obj.salpreparename,
            preparedate: obj.preparedate,
            salapprovalname: obj.salapprovalname,
            salapprovaldate: obj.salapprovaldate,
            pgname: obj.pgname,
            depname: obj.depname,
            desname: obj.desname,
            partnerid: obj.partnerid,
            salstatus: obj.salstatus,
           
          }
        });
  
  
        new AngularCsv(new_list, "DownLoad Salary ICICI Format", this.csvOptions);
  
      })
  
  
  
    }
    csvOptions = {

      quoteStrings: '"',
      decimalseparator: '.',
      // // showLabels: true,
     //showTitle: "Employee Report",

      useBom: true,
      noDownload: false,
   
      headers: [ "Transaction type", "Debit Account number", "Beneficiary ID", "Salary Amount", "Employee Name", "Salary Month", "Salary Year", "Salary Prepared By", "Salary Prepared Date & Time", "Salary Approved By", "Salary Approved Date & Time", "Program", "Department", "Designation", "Partner", "Salary Status"]
    };


    adduseractivity()
    {
      this.ipadd = localStorage.getItem("IP");
    
      const activity: UserActivity = new UserActivity();
      activity.userid = this.UserId ;
      activity.activity = "Visiting DownlodICICIFormat";
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


