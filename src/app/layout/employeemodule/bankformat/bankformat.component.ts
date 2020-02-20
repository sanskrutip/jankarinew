import { Component, OnInit,EventEmitter } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Partner } from 'src/app/ClassFiles/partner';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bankformat',
  templateUrl: './bankformat.component.html',
  styleUrls: ['./bankformat.component.scss']
})
export class BankformatComponent implements OnInit {

// user activity
UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
submited = new EventEmitter<string>();
// end of user activity
  array = [];
  StrWhere = "";
  Userrole: string;
  ProgramList:ProgramList[];
  Departmentlist: Departmentlist[];
  GetRptSalaryICICIBank;
  rowData: any;
  UserId:string;
  Partner:Partner[];
  pgname;
  finyear
  constructor(private service: MasterServiceService,private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {
      
      this.UserId = localStorage.getItem("UserId");
      this.Userrole = localStorage.getItem("role");
      this.pgname = localStorage.getItem("pgname");

  
    this.service = service;

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    this.pageload();
  
  }


  Show() {

    // this.service.GetRptSalaryICICIBank().subscribe((data: any) => { this.GetRptSalaryICICIBank = data; 
    //   this.dataSource = new MatTableDataSource(data);
    // })
    
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
   this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid where  EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.ProgramList=data;})
    
    this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.Departmentlist=data;})
    
    this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where  employeepartner.status=0 and employee.status=0").subscribe((data: any) => { 
      
      console.log(data);
      this.Partner = data; })
  
  
  
  }
  else if(this.Userrole=="R6" ) {
    console.log("enyet"+this.Userrole);
    this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid ").subscribe((data:any)=>{ this.ProgramList=data;})
    
    this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid ").subscribe((data:any)=>{this.Departmentlist=data;})
  
    this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where  employeepartner.status=0 and employee.status=0").subscribe((data: any) => { 
      console.log(data);
      this.Partner = data; })
  
  
  }
}


filterrecord(searchprogram,searchdepartment,searchpartner,searchpay,searchmonth,searchyear){


  this.array=[];
  var where="";
  this.StrWhere  ="";
  if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

    this.array.push("EmployeeProgram.pgid='"+searchprogram+"'" );
  }
  if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {

    this.array.push("EmployeeProgram.depid='"+searchdepartment+"'" );
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
  if (searchpay != null && searchpay != "" && searchpay != "undefined"&& searchpay != "Select") {
    this.array.push("Employee.paytype='"+searchpay+"'") ;
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
                    

               this.service.GetRptSalaryICICIBank(where).subscribe((data: any) => {
    this.GetRptSalaryICICIBank = data;
    //console.log( "abc"+this.GetRptSalaryICICIBank )  

  })
 
}

  ExportReport(searchprogram,searchdepartment,searchpartner,searchpay,searchmonth,searchyear) {
 
   
    this.array=[];
  var where="";
  this.StrWhere  ="";



  if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

    this.array.push("EmployeeProgram.pgid='"+searchprogram+"'" );
  }
  if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {

    this.array.push("EmployeeProgram.depid='"+searchdepartment+"'" );
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
  if (searchpay != null && searchpay != "" && searchpay != "undefined"&& searchpay != "Select") {
    this.array.push("Employee.paytype='"+searchpay+"'") ;
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
                    

               this.service.GetRptSalaryICICIBank(where).subscribe((data: any) => {
    this.GetRptSalaryICICIBank = data;

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
    this.service.GetRptSalaryICICIBank(where).subscribe((data: any) => {

      let new_list = data.map(function (obj) {  
        return {
         
          accno: obj.accno,
          empname: obj.empname,
          netamt: obj.netamt,
          paytype: obj.paytype,
          preparedate: obj.preparedate,
          neftcode: obj.neftcode,
          branch: obj.branch,
          mobile: obj.mobile,
          remark:obj.remark
        
        }
      });


      new AngularCsv(new_list, "Mode of payment", this.csvOptions);

    })



  }
csvOptions = {
  quoteStrings: '"',
  decimalseparator: '.',
  useBom: true,
  noDownload: false,
  headers: [ "Debit Ac No", "Beneficiary Ac No", "Beneficiary Name", "Amount", "Pay Mode", "Date", "IFSC","Payable Location",
"Print Location","Bene Mobile No","Bene EmailID","	Bene Add1","	Bene Add2","	Bene Add3","	Bene Add4","Add Details1",
"Add Details2","Add Details3","Add Details4","Add Details5","Remarks"]
};



// user activity
adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserId ;
  activity.activity = "Visiting ICICBankFormat";
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
