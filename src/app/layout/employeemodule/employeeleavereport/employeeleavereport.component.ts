import { Component, OnInit ,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-employeeleavereport',
  templateUrl: './employeeleavereport.component.html',
  styleUrls: ['./employeeleavereport.component.scss']
})
export class EmployeeleavereportComponent implements OnInit {
  leaverptForm: FormGroup;
  Departmentlist:Departmentlist[];

  strwhr:string;
   lstwhere:Array<string>;
    array = [];
  StrWhere = "";
  UserId;
  leaverpt;
  leaverptcount;
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

    this.service = service;
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    this.pageload()
   }

  ngOnInit() {
    this.leaverptForm = this.fb.group({
           
      frommonth: ['', Validators .required],
      fromyear: ['', Validators.required],
      tomonth: ['', Validators.required],
      toyear: ['', Validators.required],
     
     
  
          });
  }



  filterrecord(searchdepartment,searchfrommonth,searchfromyear,searchtomonth,searchtoyear){
    this.array=[];
    var where="";
    this.StrWhere  ="";
    var frommonth="";
  var tomonth ="";
  var fromyear="";
  var toyear ="";
    if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined"&& searchdepartment != "Select") {
      this.array.push("D.depid='"+searchdepartment+"'");
    }
    console.log(   searchdepartment );
    // if (searchfrommonth != null && searchfrommonth != "" && searchfrommonth != "undefined"&& searchfrommonth != "Select") {
    //   this.array.push("Employee.city='"+searchfrommonth+"'") ;
    // }
   
    // if (searchfromyear != null && searchfromyear != "" && searchfromyear != "undefined"&& searchfromyear != "Select") {

    //   this.array.push("EmployeeProgram.pgid='"+searchfromyear+"'" );
    // }
  
    // if (searchtomonth != null && searchtomonth != "" && searchtomonth != "undefined"&& searchtomonth != "Select") {
    //   this.array.push("EmployeeProgram.desid='"+searchtomonth+"'") ;
    // }
    // if (searchtoyear != null && searchtoyear != "" && searchtoyear != "undefined"&& searchtoyear != "Select") {
    //   this.array.push("Employee.emptype='"+searchtoyear+"'") ;
    // }
   
    
    frommonth = searchfrommonth;
  
   tomonth =searchtomonth;
   fromyear=searchfromyear;
 toyear =searchtoyear;

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
    this.service.GetEmployeeAttendanceSummary(frommonth,tomonth,fromyear,toyear,where).subscribe((data: any) => {
      this.leaverpt = data;
      console.log(   this.leaverpt );
    })
   

    this.service.GetEmployeeAttendanceSummary(frommonth,tomonth,fromyear,toyear,where).subscribe((data: any) => {  this.leaverptcount= data.length;})
  
    

  }


  pageload()
  {

    this.addressip();
    this.adduseractivity();
 this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid ").subscribe((data:any)=>{this.Departmentlist=data;})
 }


 adduseractivity()
 {
   this.ipadd = localStorage.getItem("IP");
 
   const activity: UserActivity = new UserActivity();
   activity.userid = this.UserId ;
   activity.activity = "Visiting EmployeeLeaveReport";
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
