import { Component, OnInit ,EventEmitter} from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Saveexcel } from 'src/app/ClassFiles/saveexcel';
import { Office } from 'src/app/ClassFiles/office';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { DeptEmpAtt } from 'src/app/ClassFiles/dept-emp-att';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { Favorite } from 'src/app/ClassFiles/favorite';
@Component({
  selector: 'app-employeeattendance',
  templateUrl: './employeeattendance.component.html',
  styleUrls: ['./employeeattendance.component.scss']
})
export class EmployeeattendanceComponent implements OnInit {
  UserId;
  Userrole;
  saveexcel: Saveexcel[];
  recordlist: Saveexcel[];
  office: Office[];
  searchmonth: string;
  searchyear: string;
  dwealist:number;
  empcount:number;
  Departmentlist: Departmentlist[];
  AttForm: FormGroup;
  strwhr: string;
  sortedData: Departmentlist[];
  lstwhere: Array<string>;
  array = [];
  StrWhere = "";
  depcount: number;
  isValid: boolean;
  EmpList: DeptEmpAtt;
  UserActivity:UserActivity[];
model = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 pgid;
 pgname;
 fevoritelist:Favorite[];
 fevcount;
 submited = new EventEmitter<string>();
 finyear;
  constructor(private service: MasterServiceService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");
    this.pgid = localStorage.getItem("pgid");
    this.pgname = localStorage.getItem("pgname");
    this.service = service;
    console.log(this.Userrole);
    this.pageload()
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    
    if (this.Userrole == "R5") {
      this.strwhr = "where EP.reportto='" + this.UserId + "'";

    }
    else if (this.Userrole == "R6") {
      this.strwhr = "";
    }
    else {
      this.strwhr = "";
    }
    this.service.DepartmentwiseEmpAttendanceList(this.strwhr).subscribe((data: any) => {
      this.saveexcel = data;
    
    })
    service.DepartmentwiseEmpAttendanceList(this.strwhr).subscribe((data: any) => {
      //this.dwealist = data.length;
      console.log(data);
      if (data == "") {

        this.empcount = 0;
      }
      else if (data == null && data[0] == null) {

        this.empcount = 0;
      }
      else {
        this.empcount = data[0].tRecordCount;
      }

      console.log(this.empcount);
    })

  //   service.EmployeeFavouriteList(this.UserId,this.pgid,this.Userrole,this.router.url).subscribe((data:any)=>{
        
  //     this.fevoritelist=data;
   

  //   this.fevcount= this.fevoritelist.length
    
  //   if(this.fevcount==1){
  //     console.log("count 0")
      
  //   }
  //   else
  //   {
  //     console.log("count 1")
  //   }
  // }) 
  }
  p: number = 1;
  filterrecord(searchdep, searchmonth, searchyear) {
    this.array = [];
    var where = "";
    this.StrWhere = "";
    if (searchdep != null && searchdep != "" && searchdep != "undefined" && searchdep != "Select") {
      this.array.push("EP.depid='" + searchdep + "'");
    }

    if (searchmonth != null && searchmonth != "" && searchmonth != "undefined" && searchmonth != "Select") {
      this.array.push("ES.month='" + searchmonth + "'");
    }

    if (searchyear != null && searchyear != "" && searchyear != "undefined" && searchyear != "Select") {

      this.array.push("ES.year='" + searchyear + "'");
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

    this.service.DepartmentwiseEmpAttendanceList(where).subscribe((data: any) => {
      this.saveexcel = data;
    })
    this.service.DepartmentwiseEmpAttendanceList(where).subscribe((data: any) => {
      
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


  pageload() {
    if (this.Userrole == "R5") {

      this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid inner join EmployeeAttSummary on EmployeeAttSummary.empid=EmployeeProgram.empid where  EmployeeProgram.empid='" + this.UserId + "'").subscribe((data: any) => { this.Departmentlist = data; })
    }
    else if (this.Userrole == "R6") {

      this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid  inner join EmployeeAttSummary on EmployeeAttSummary.empid=EmployeeProgram.empid").subscribe((data: any) => { this.Departmentlist = data; })
    }
    else{
      this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid  inner join EmployeeAttSummary on EmployeeAttSummary.empid=EmployeeProgram.empid").subscribe((data: any) => { this.Departmentlist = data; })
  
    }
  }
  ngOnInit() {
    this.AttForm = this.fb.group({
      depid: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
    });
    this.addressip();
this.adduseractivity();
  }
  redirect(depid,month,year)
  {

    this.service.EmployeeAttDetailsList( month, year, "where D.depid='" +depid+ "'  and  ES.month='" + month + "' and ES.year='" + year + "'")
    .subscribe((data: any) => {


      this.EmpList = data;
      console.log(this.EmpList[0].empcode);
      if(this.EmpList[0].empcode == undefined || this.EmpList[0].empcode == null)
      {
        this.router.navigate(['/GenattDetails',depid,month,year]);
      }
      else{
        this.router.navigate(['/DepartmentWiseEmpAttList',depid,month,year]);
 
      }
    });
  
}
adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserId ;
  activity.activity = "Visiting EmployeeAttendanceList";
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



addfevorite(){

//  this.fevorite= this.router.url;
 const fev: Favorite = new Favorite();
 
 
 fev.userid = this.UserId;
 fev.pgid = this.pgid;
 fev.url =this.router.url;
 fev.roleid = this.Userrole;
 console.log(fev)
 this.service.AddEmployeeFavourite(fev).subscribe((res) => {
  

  this.submited.emit(res.toString());
  console.log(res.toString()); 
//   this.service.EmployeeFavouriteList(this.UserId,this.pgid,this.Userrole,this.router.url).subscribe((data:any)=>{
        
//     this.fevoritelist=data;
 

//   this.fevcount= this.fevoritelist.length
// }) ;
  

  this.toastr.success ("Add to Favorites");
      },
  error => {
    console.log(error);
  }
 )
}



removefevorite(){
  const fev: Favorite = new Favorite();
 
  fev.userid = this.UserId;
  fev.pgid = this.pgid;
  fev.url =this.router.url;
  fev.roleid = this.Userrole;
  console.log(fev)
  this.service.AddEmployeeFavourite(fev).subscribe((res) => {
 
   this.submited.emit(res.toString());
   console.log(res.toString());  
//    this.service.EmployeeFavouriteList(this.UserId,this.pgid,this.Userrole,this.router.url).subscribe((data:any)=>{
        
//     this.fevoritelist=data;
 

//   this.fevcount= this.fevoritelist.length
// }) ;
  
   this.toastr.error ("Remove From Favorites");
       },
   error => {
     console.log(error);
   }
  )
}
}