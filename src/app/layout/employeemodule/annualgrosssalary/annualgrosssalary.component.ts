import { Component, OnInit ,EventEmitter} from '@angular/core';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Partner } from 'src/app/ClassFiles/partner';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-annualgrosssalary',
  templateUrl: './annualgrosssalary.component.html',
  styleUrls: ['./annualgrosssalary.component.scss']
})
export class AnnualgrosssalaryComponent implements OnInit {
  ProgramList:ProgramList[];
  UserId:string;
  Departmentlist:Departmentlist[];
  url: string;
  strwhr:string
  lstwhere:Array<string>;
  array = [];
StrWhere = "";
Partnerlist:Partner[];
OrgnizationList:OrgnizationList[];
salaryrptForm: FormGroup;
monthname:string;
annualgrosssalary;
annualgrosssalarycount;
endmonthname:string;
emonthname:string;
eendmonthname:string;
showMyContainer: boolean = false;
UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 submited = new EventEmitter<string>();
 pgname;
 finyear
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder) {

    this.UserId = localStorage.getItem("UserId");
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    this.service = service;
    this.pageload()
   }


   ngOnInit() {

    this.salaryrptForm = this.fb.group({
           
      startmonth: ['', Validators.required],
      endmonth: ['', Validators.required],
      finyear: ['', Validators.required],
     
     
  
          });
  } 
   onSelectProgram(pgname) {
    console.log(pgname);
    if (pgname == "")
    this.Departmentlist = null;
    
  else {


    this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid where Department.pgid='"+pgname+"' ").subscribe((data:any)=>{this.Departmentlist=data;})
  
 
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
  this.service.FillDropDown("Partner","distinct Partner.partnername","Partner.partnerid","").subscribe((data:any)=>{this.Partnerlist=data;
 
 })
   
   this.service.FillDropDown("Program","distinct Program.pgname","Program.pgid","where Program.ogid='OG1' ").subscribe((data:any)=>{this.ProgramList=data;})
   this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid ").subscribe((data:any)=>{this.Departmentlist=data;})
   this.service.FillDropDown("Organization","distinct ogname","ogid","").subscribe((data:any)=>{this.OrgnizationList=data;
    console.log(this.OrgnizationList)
  })
 
 
    }

  

  filterrecord(searchorg,searchprogram,searchdepartment,searchpartner,searchstartmonth,searchendmonth,searchfinyear,searchstatus){
   console.log(searchstatus)
   
    var sfinyear =searchfinyear; 
    var styear="";
  var endyear ="";
    this.array=[];
  var where="";
  this.StrWhere  ="";
  if(searchstartmonth=="01"){

    this.emonthname="January";
  }
  else if(searchstartmonth=="02"){
    this.emonthname="February";
  }
  else if(searchstartmonth=="03"){
    this.emonthname="March";
  }
  
  else if(searchstartmonth=="04"){
    this.emonthname="April";
  }
  
  else if(searchstartmonth=="05"){
    this.emonthname="May";
  }
  
  else if(searchstartmonth=="06"){
    this.emonthname="June";
  }
  
  else if(searchstartmonth=="07"){
    this.emonthname="July";
  }
  
  else if(searchstartmonth=="08"){
    this.emonthname="August";
  }
  else if(searchstartmonth=="09"){
    this.emonthname="September";
  
  }
  else if(searchstartmonth=="10"){
    this.emonthname="October";
  }
  else if(searchstartmonth=="11"){
    this.emonthname="November";
  }
  else if(searchstartmonth=="12"){
    this.emonthname="December";
  }
  
 
  if(searchendmonth=="01"){

    this.eendmonthname="January";
  }
  else if(searchendmonth=="02"){
    this.eendmonthname="February";
  }
  else if(searchendmonth=="03"){
    this.eendmonthname="March";
  }
  
  else if(searchendmonth=="04"){
    this.eendmonthname="April";
  }
  
  else if(searchendmonth=="05"){
    this.eendmonthname="May";
  }
  
  else if(searchendmonth=="06"){
    this.eendmonthname="June";
  }
  
  else if(searchendmonth=="07"){
    this.eendmonthname="July";
  }
  
  else if(searchendmonth=="08"){
    this.eendmonthname="August";
  }
  else if(searchendmonth=="09"){
    this.eendmonthname="September";
  
  }
  else if(searchendmonth=="10"){
    this.eendmonthname="October";
  }
  else if(searchendmonth=="11"){
    this.eendmonthname="November";
  }
  else if(searchendmonth=="12"){
    this.eendmonthname="December";
  }
  
  if (searchorg != null && searchorg != "" && searchorg != "undefined"&& searchorg != "Select") {

    this.array.push("Program.ogid='"+searchorg+"'" );
  }
  if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

    this.array.push("Program.pgid='"+searchprogram+"'" );
  }
  if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {

    this.array.push(" Department.depid='"+searchdepartment+"'" );
  }
  
  if (searchpartner != null && searchpartner != "" && searchpartner != "undefined"&& searchpartner != "Select") {
    this.array.push("Employee.partnerid='"+searchpartner+"'");
  }
  
  
  if (searchstatus != null && searchstatus != "" && searchstatus != "undefined"&& searchstatus != "Select") {
    this.array.push("Employee.status='"+searchstatus+"'") ;
  }
  
  if (searchstartmonth != null && searchstartmonth != "" && searchstartmonth != "undefined"&& searchstartmonth != "Select" && searchendmonth != null && searchendmonth != "" && searchendmonth != "undefined"&& searchendmonth != "Select" && sfinyear != null && sfinyear != "" && sfinyear != "undefined"&& sfinyear != "Select") 
  {
    console.log(sfinyear);
    if (searchstartmonth > 3)
    {
      
      console.log(searchstartmonth+sfinyear.substring(0, 4));
        styear = sfinyear.substring(0, 4);
    }
    else
    {console.log(searchstartmonth+ sfinyear.substring(5, 4));
        styear = sfinyear.substring(5, 4);
    }
    if (searchendmonth > 3)
    {console.log(searchendmonth+ sfinyear.substring(0, 4));
        endyear = sfinyear.substring(0, 4);
    }
    else
    {console.log(searchendmonth+ sfinyear.substring(5, 4));
        endyear = sfinyear.substring(5, 4);
    }

    console.log(styear);
    console.log(endyear);
    this.array.push("(cast(salmonth%2B' 1,'%2Bsalyear as Date)  Between cast('" + this.emonthname + " 1," + styear + "' as date) and cast('" + this.eendmonthname + " 1," + endyear + "' as date))") ;

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

                 this.service.GetRptGrossSalary(styear,endyear,where).subscribe((data: any) => {
      this.annualgrosssalary = data;
      console.log( this.annualgrosssalary )  
      this.service.GetRptSalayProgramWise(where).subscribe((data: any) => {  this.annualgrosssalarycount= data.length;})
    })
   


   

  }





  ExportReport(searchorg,searchprogram,searchdepartment,searchpartner,searchstartmonth,searchendmonth,searchfinyear,searchstatus) {
    var sfinyear =searchfinyear; 
    var styear="";
  var endyear ="";
    this.array=[];
  var where="";
  this.StrWhere  ="";
  if(searchstartmonth=="01"){

    this.emonthname="January";
  }
  else if(searchstartmonth=="02"){
    this.emonthname="February";
  }
  else if(searchstartmonth=="03"){
    this.emonthname="March";
  }
  
  else if(searchstartmonth=="04"){
    this.emonthname="April";
  }
  
  else if(searchstartmonth=="05"){
    this.emonthname="May";
  }
  
  else if(searchstartmonth=="06"){
    this.emonthname="June";
  }
  
  else if(searchstartmonth=="07"){
    this.emonthname="July";
  }
  
  else if(searchstartmonth=="08"){
    this.emonthname="August";
  }
  else if(searchstartmonth=="09"){
    this.emonthname="September";
  
  }
  else if(searchstartmonth=="10"){
    this.emonthname="October";
  }
  else if(searchstartmonth=="11"){
    this.emonthname="November";
  }
  else if(searchstartmonth=="12"){
    this.emonthname="December";
  }
  
 
  if(searchendmonth=="01"){

    this.eendmonthname="January";
  }
  else if(searchendmonth=="02"){
    this.eendmonthname="February";
  }
  else if(searchendmonth=="03"){
    this.eendmonthname="March";
  }
  
  else if(searchendmonth=="04"){
    this.eendmonthname="April";
  }
  
  else if(searchendmonth=="05"){
    this.eendmonthname="May";
  }
  
  else if(searchendmonth=="06"){
    this.eendmonthname="June";
  }
  
  else if(searchendmonth=="07"){
    this.eendmonthname="July";
  }
  
  else if(searchendmonth=="08"){
    this.eendmonthname="August";
  }
  else if(searchendmonth=="09"){
    this.eendmonthname="September";
  
  }
  else if(searchendmonth=="10"){
    this.eendmonthname="October";
  }
  else if(searchendmonth=="11"){
    this.eendmonthname="November";
  }
  else if(searchendmonth=="12"){
    this.eendmonthname="December";
  }
  
  if (searchorg != null && searchorg != "" && searchorg != "undefined"&& searchorg != "Select") {

    this.array.push("Program.ogid='"+searchorg+"'" );
  }
  if (searchprogram != null && searchprogram != "" && searchprogram != "undefined"&& searchprogram != "Select") {

    this.array.push("Program.pgid='"+searchprogram+"'" );
  }
  if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {

    this.array.push(" Department.depid='"+searchdepartment+"'" );
  }
  
  if (searchpartner != null && searchpartner != "" && searchpartner != "undefined"&& searchpartner != "Select") {
    this.array.push("Employee.partnerid='"+searchpartner+"'");
  }
  
  
  if (searchstatus != null && searchstatus != "" && searchstatus != "undefined"&& searchstatus != "Select") {
    this.array.push("Employee.status='"+searchstatus+"'") ;
  }
  
  if (searchstartmonth != null && searchstartmonth != "" && searchstartmonth != "undefined"&& searchstartmonth != "Select" && searchendmonth != null && searchendmonth != "" && searchendmonth != "undefined"&& searchendmonth != "Select" && sfinyear != null && sfinyear != "" && sfinyear != "undefined"&& sfinyear != "Select") 
  {
    console.log(sfinyear);
    if (searchstartmonth > 3)
    {
      
      console.log(searchstartmonth+sfinyear.substring(0, 4));
        styear = sfinyear.substring(0, 4);
    }
    else
    {console.log(searchstartmonth+ sfinyear.substring(5, 4));
        styear = sfinyear.substring(5, 4);
    }
    if (searchendmonth > 3)
    {console.log(searchendmonth+ sfinyear.substring(0, 4));
        endyear = sfinyear.substring(0, 4);
    }
    else
    {console.log(searchendmonth+ sfinyear.substring(5, 4));
        endyear = sfinyear.substring(5, 4);
    }

    console.log(styear);
    console.log(endyear);
    this.array.push("(cast(salmonth%2B' 1,'%2Bsalyear as Date)  Between cast('" + this.emonthname + " 1," + styear + "' as date) and cast('" + this.eendmonthname + " 1," + endyear + "' as date))") ;

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
                    

  
    this.service.GetRptGrossSalary(styear,endyear,where).subscribe((data: any) => {
console.log(data);
      let new_list = data.map(function (obj) {
        return {
          State: obj.State,
          City: obj.City,
          empid: obj.empid,
          Employee_Name: obj.Employee_Name,
          partnername: obj.partnername,
          gender: obj.gender,
          dob: obj.dob,
          doj: obj.doj,
          pancard: obj.pancard,
          aadharnumber: obj.aadharnumber,
          Program_Name: obj.Program_Name,
          depname: obj.depname,
          desname: obj.desname,
          status: obj.status,
          January: obj.January==null?'':obj.January,
          February: obj.February==null?'':obj.February,
          March: obj.March==null?'':obj.March,
          April: obj.April==null?'':obj.April,
          May: obj.May==null?'':obj.May,
          June: obj.June==null?'':obj.June,
          July: obj.July==null?'':obj.July,
          August: obj.August==null?'':obj.August,
          September: obj.September==null?'':obj.September,
          October: obj.October==null?'':obj.October,
          November: obj.November==null?'':obj.November,
          December: obj.December==null?'':obj.December,
          Total: obj.Total==null?'':obj.Total,
         
        }
      });


      new AngularCsv(new_list, "DownLoad Annual Gross Salary Reportt", this.csvOptions);

    })



  }
  csvOptions = {

    quoteStrings: '"',
    decimalseparator: '.',
    // // showLabels: true,
   //showTitle: "Employee Report",

    useBom: true,
    noDownload: false,
 
    headers: [ "State", "City", "Employee ID", "Employee Name", "Employee Partner", "Gender", "Date Of Birth", "Date Of Join", "Pan Number", "Aadhar Number", "Program Name", "Department", "Designation", "Status", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December", "Total"]
  };


  adduseractivity()
  {
    this.ipadd = localStorage.getItem("IP");
  
    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserId ;
    activity.activity = "Visiting AnnualGrossSalaryReport";
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
