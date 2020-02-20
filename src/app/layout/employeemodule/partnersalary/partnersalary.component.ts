import { Component, OnInit ,EventEmitter} from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Partner } from 'src/app/ClassFiles/partner';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/ClassFiles/city';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { State } from 'src/app/ClassFiles/state';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-partnersalary',
  templateUrl: './partnersalary.component.html',
  styleUrls: ['./partnersalary.component.scss']
})
export class PartnersalaryComponent implements OnInit {

// user activity
UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
submited = new EventEmitter<string>();
// end of user activity

  state:State[];
  city:City[];
  array = [];
  StrWhere = "";
  Userrole: string;
  ProgramList:ProgramList[];
  Departmentlist: Departmentlist[];
  GetRptPartnerMonthlySalary: string;
  rowData: any;
  UserId:string;
  Partner:Partner[];
  Designationlist:Designationlist[];
  pgname;
  finyear
  constructor(private service: MasterServiceService,private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {
      this.UserId = localStorage.getItem("UserId");
      this.Userrole = localStorage.getItem("role");

    this.service = service;
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    this.pageload();
   
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
    onSelectProgram(pgid) {
      console.log(pgid);
      if (pgid == "")
        this.Departmentlist = null;
      else
  
        if (this.Userrole == "R5") {
          this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='" + this.UserId + "' and  Department.pgid='" + pgid + "'").subscribe((data: any) => { this.Departmentlist = data; })
        }
        else if (this.Userrole == "R6") {
          this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  Department.pgid='" + pgid + "'").subscribe((data: any) => { this.Departmentlist = data; 
          console.log(this.Departmentlist);
          })
  
        }
  
    }

    onSelectDept(depid) {
      console.log(depid);
      if (depid == "")
        this.Departmentlist = null;
      else
  
        if (this.Userrole == "R5") {
          this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where  EmployeeProgram.depid='" + depid + "' and employeepartner.status=0 and employee.status=0").subscribe((data: any) => { this.Partner = data; })
        }
        else if (this.Userrole == "R6") {
          this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where   EmployeeProgram.depid='" + depid + "' and employeepartner.status=0 and employee.status=0").subscribe((data: any) => { this.Partner = data; })
  
        }
  
    }



  ngOnInit() {

  }


  pageload()
  {

    this.addressip();
    this.adduseractivity();

    console.log(this.Userrole);
    if(this.Userrole=="R5" )
    {
      this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.state=data;
    
      })
 
      this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.city=data;})
   this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid where  EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.ProgramList=data;;})
    
    this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.Departmentlist=data;})
    
    this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid   ").subscribe((data:any)=>{this.Designationlist=data;
    })


    this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where  employeepartner.status=0 and employee.status=0").subscribe((data: any) => { 
      
      console.log(data);
      this.Partner = data; })
  
  
  
  }
  else if(this.Userrole=="R6" ) {
    console.log("enyet"+this.Userrole);

    this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.state=data;})
 
    this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.city=data;})
    this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid ").subscribe((data:any)=>{ this.ProgramList=data; })
    
    this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid ").subscribe((data:any)=>{this.Departmentlist=data})
   

    this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid   ").subscribe((data:any)=>{this.Designationlist=data;
      })

    this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where  employeepartner.status=0 and employee.status=0").subscribe((data: any) => { 
      console.log(data);
     })
  
  
  }
}


filterrecord(searchname,searchstate,searchcity,searchorg,searchprogram,searchdepartment,searchdesignation,searchemptype,searchpartner,searchfyear,searchpay,searchstatus){


  this.array=[];
  var where="";
  this.StrWhere  ="";
  var stdt="";
  var endt ="";

  if (searchname != null && searchname != "" && searchname != "undefined" && searchname != "") {
    this.array.push("Employee.firstname%2B' '%2BEmployee.lastname like '%"+ searchname+"%'");
  }
  if (searchstate != null && searchstate != "" && searchstate != "undefined"&& searchstate != "Select") {

    this.array.push("E.state='"+searchstate+"'" );
  }
  if (searchcity != null && searchcity != "" && searchcity != "undefined"&& searchcity != "Select") {

    this.array.push("E.city='"+searchcity+"'" );
  }
  if (searchorg != null && searchorg != "" && searchorg != "undefined"&& searchorg != "Select") {

    this.array.push("O.ogid='"+searchorg+"'" );
  }

  if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

    this.array.push("EP.pgid='"+searchprogram+"'" );
  }
  if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {

    this.array.push("EP.depid='"+searchdepartment+"'" );
  }
  if (searchdesignation != null && searchdesignation != "" && searchdesignation != "undefined"&& searchdesignation != "Select") {

    this.array.push("EP.desid='"+searchdesignation+"'" );
  }

    if (searchemptype != null && searchemptype != "" && searchemptype != "undefined"&& searchemptype != "Select") {

    this.array.push("E.emptype='"+searchemptype+"'" );
  }


  if (searchpartner != null && searchpartner != "" && searchpartner != "undefined"&& searchpartner != "Select") {
    this.array.push("E.partnerid='"+searchpartner+"'");
  }

  
  
  if (searchpay != null && searchpay != "" && searchpay != "undefined"&& searchpay != "Select") {
    this.array.push("E.paytype='"+searchpay+"'") ;
  }
  
  if (searchstatus != null && searchstatus != "" && searchstatus != "undefined"&& searchstatus != "Select") {
    this.array.push("E.status='"+searchstatus+"'") ;
  }


  console.log(searchfyear);
  stdt = "April 1,"+ searchfyear.substring(0, 4);
 
  endt = "March 1,"+ searchfyear.substring(5,9);



  console.log(stdt);
  

  console.log(endt);
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
                 console.log(where);

               this.service.GetRptPartnerMonthlySalary(stdt,endt,where).subscribe((data: any) => {
    this.GetRptPartnerMonthlySalary = data;
    console.log( "abc"+this.GetRptPartnerMonthlySalary )  

  })
 
}

  ExportReport(searchname,searchstate,searchcity,searchorg,searchprogram,searchdepartment,searchdesignation,searchemptype,searchpartner,searchfyear,searchpay,searchstatus){
 
    this.array=[];
  var where="";
  this.StrWhere  ="";
  var stdt="";
  var endt ="";

  if (searchname != null && searchname != "" && searchname != "undefined" && searchname != "") {
    this.array.push("Employee.firstname%2B' '%2BEmployee.lastname like '%"+ searchname+"%'");
  }
  if (searchstate != null && searchstate != "" && searchstate != "undefined"&& searchstate != "Select") {

    this.array.push("E.state='"+searchstate+"'" );
  }
  if (searchcity != null && searchcity != "" && searchcity != "undefined"&& searchcity != "Select") {

    this.array.push("E.city='"+searchcity+"'" );
  }
  if (searchorg != null && searchorg != "" && searchorg != "undefined"&& searchorg != "Select") {

    this.array.push("O.ogid='"+searchorg+"'" );
  }

  if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

    this.array.push("EP.pgid='"+searchprogram+"'" );
  }
  if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {

    this.array.push("EP.depid='"+searchdepartment+"'" );
  }
  if (searchdesignation != null && searchdesignation != "" && searchdesignation != "undefined"&& searchdesignation != "Select") {

    this.array.push("EP.desid='"+searchdesignation+"'" );
  }

    if (searchemptype != null && searchemptype != "" && searchemptype != "undefined"&& searchemptype != "Select") {

    this.array.push("E.emptype='"+searchemptype+"'" );
  }


  if (searchpartner != null && searchpartner != "" && searchpartner != "undefined"&& searchpartner != "Select") {
    this.array.push("E.partnerid='"+searchpartner+"'");
  }

  
  
  if (searchpay != null && searchpay != "" && searchpay != "undefined"&& searchpay != "Select") {
    this.array.push("E.paytype='"+searchpay+"'") ;
  }
  
  if (searchstatus != null && searchstatus != "" && searchstatus != "undefined"&& searchstatus != "Select") {
    this.array.push("E.status='"+searchstatus+"'") ;
  }


  console.log(searchfyear);
  stdt = "April 1,"+ searchfyear.substring(0, 4);
 
  endt = "March 1,"+ searchfyear.substring(5,9);



  console.log(stdt);
  

  console.log(endt);
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
                 console.log(where);

               this.service.GetRptPartnerMonthlySalary(stdt,endt,where).subscribe((data: any) => {
    this.GetRptPartnerMonthlySalary = data;
    console.log( "abc"+this.GetRptPartnerMonthlySalary )  

  });


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
                    

                 console.log(where)
    this.service.GetRptPartnerMonthlySalary(stdt,endt,where).subscribe((data: any) => {

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
 
          status: obj.status,

          pgname: obj.pgname,
          depname: obj.pgname,
          desname: obj.desname,
          partnername: obj.partnername,
          paytype: obj.paytype,
          beneficiaryid: obj.beneficiaryid,

         
          basicapril: obj.basicapril,
          grossapril: obj.grossapril,
          deductapril: obj.deductapril,
          netapril: obj.netapril,
          statusapril: obj.statusapril,
          reasonapril: obj.reasonapril,
          basicmay: obj.basicmay,
          grossmay: obj.grossmay,
          deductmay: obj.deductmay,
          netmay: obj.netmay,
          statusmay: obj.statusmay,
          reasonmay: obj.reasonmay,
          basicjune: obj.basicjune,
          grossjune: obj.grossjune,
          deductjune: obj.deductjune,
          netjune: obj.netjune,
          statusjune: obj.statusjune,
          reasonjune: obj.reasonjune,
          basicjuly: obj.basicjuly,
          grossjuly: obj.grossjuly,
          deductjuly: obj.deductjuly,
          netjuly: obj.netjuly,
          statusjuly: obj.statusjuly,
          reasonjuly: obj.reasonjuly,
          basicaugust: obj.basicaugust,
          grossaugust: obj.grossaugust,
          deductaugust: obj.deductaugust,
          netaugust: obj.netaugust,
          statusaugust: obj.statusaugust,
          reasonaugust: obj.reasonaugust,
          basicsept: obj.basicsept,
          grosssept: obj.grosssept,
          deductsept: obj.deductsept,
          netsept: obj.netsept,
          statusept: obj.statusept,
          reasonsept: obj.reasonsept,
          basicoct: obj.basicoct,
          grossoct: obj.grossoct,
          deductoct: obj.deductoct,
          netoct: obj.netoct,
          statusoct: obj.statusoct,
          reasonoct: obj.reasonoct,
          basicnov: obj.basicnov,
          grossnov: obj.grossnov,
          deductnov: obj.deductnov,
          netnov: obj.netnov,
          statusnov: obj.statusnov,
          reasonnov: obj.reasonnov,

          basicdec: obj.basicdec,
          grossdec: obj.grossdec,
          deductdec: obj.deductdec,
          netdec: obj.netdec,
          statusdec: obj.statusdec,
          reasondec: obj.reasondec,

          basicjan: obj.basicjan,
          grossjan: obj.grossjan,
          dedductjan: obj.dedductjan,
          netjan: obj.netjan,
          statusjan: obj.statusjan,
          reasonjan: obj.reasonjan,

          basicfeb: obj.basicfeb,
          grossfeb: obj.grossfeb,
          deductfeb: obj.deductfeb,
          netfeb: obj.netfeb,
          statusfeb: obj.statusfeb,
          reasonfeb: obj.reasonfeb,

          basicmarch: obj.basicmarch,
          grossmarch: obj.grossmarch,
          deductmarch: obj.deductmarch,
          netmarch: obj.netmarch,
          statusmarch: obj.statusmarch,
          reasonmarch: obj.reasonmarch,
         
          
          basictotal: obj.basictotal,
          deducttotal: obj.deducttotal,
          nettotal: obj.nettotal,
        
        }
      });


      new AngularCsv(new_list, "Partner wise Salary", this.csvOptions);

    })



  }
csvOptions = {

  quoteStrings: '"',
  decimalseparator: '.',

  useBom: true,
  noDownload: false,

  headers: ["State", "City", "Employee ID", "Employee Name", "Gender", "Date Of Birth", "Date Of Join","Pan Number","Aadhar Number","Employee Status"
,"Program","Department","Designation","Partner Name","PayType","Beneficiary Id","Financial Year","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","CTC Amount","Gross Amount","Total Deduction",
"Net Salary","Salary Status","Remark","Total Basic Salary","Total Deduction","Total Net Salary"

]
};




  onSelectPro(pgname) {
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

      // user activity
adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserId ;
  activity.activity = "Visiting PartnerWiseSalary";
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
{  
  this.service.getIPAddress().subscribe((res:any)=>{
  this.ipAddress=res.ip;
localStorage.setItem('IP', res.ip);
});


}

// end of user activity



}
