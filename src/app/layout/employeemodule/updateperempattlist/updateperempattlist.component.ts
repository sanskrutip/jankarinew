import { Component, OnInit } from '@angular/core';
import { EmployeeAttDetailsData } from 'src/app/ClassFiles/employee-att-details-data';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UploadEMPAtt } from 'src/app/ClassFiles/upload-empatt';
import { MatTableDataSource } from '@angular/material';
import { DeptEmpAtt } from 'src/app/ClassFiles/dept-emp-att';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';

@Component({
  selector: 'app-updateperempattlist',
  templateUrl: './updateperempattlist.component.html',
  styleUrls: ['./updateperempattlist.component.scss']
})
export class UpdateperempattlistComponent implements OnInit {
  empcode: string;
  month: string;
  EmployeeAttDetailsData:EmployeeAttDetailsData [];
 // UploadEMPAtt:UploadEMPAtt [];
  monthname: string;
  year: string;
  depname: string;
  month1: string;
  Year: string;
  depid: string;
  empname:string;
  DeptEmpAtt: DeptEmpAtt[];
  displayedColumns: string[] = ['SrNo', 'date', 'startlog', 'endlog','reason' , 'remark'];
  dataSource: MatTableDataSource<EmployeeAttDetailsData>;
  UserActivity:UserActivity[];
model = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 UserId;
 pgname;
 finyear;
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder, private route: ActivatedRoute,private toastr: ToastrService){
    this.empcode=route.snapshot.params["id"];
    this.month = route.snapshot.params["id1"];
    this.year = route.snapshot.params["id2"];
     this.depid=route.snapshot.params["id3"];
     this.UserId = localStorage.getItem("UserId");
    this.service = service;
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    //where (ED.startlog ='' or ED.endlog='' or ED.startlog > cast('10:15:30' as time) or ED.endlog < cast('18:00:00' as time)) and (ED.status='A' or ED.status='P')  and ES.year='"+ this.year+"' and ED.entrystatus='SYS'
    service.EmployeeAttDetailsData(  this.month, this.year,"where (ED.startlog ='' or ED.endlog='') and (ED.status='A' or ED.status='P') and E.emp_code='" +  this.empcode + "' and ES.year='" + this.year + "' and EP.depid='" +   this.depid + "' ").subscribe(
      (data:any)=>{

            console.log(data);
      
            this.dataSource  = new MatTableDataSource(data);
      })

      service.EmployeeAttDetailsList(this.month, this.year, "where E.emp_code=" + this.empcode + " and D.depid='" + this.depid + "' and  ES.month='" + this.month + "' and ES.year='" + this.year + "'").subscribe((data: any) => {
        this.DeptEmpAtt = data;
      })

 

    this.service.EmployeeAttDetailsData( this.month , this.year,"where E.emp_code="+this.empcode+" and D.depid='"+this.depid+"'")
    .subscribe((data: any) => {
      var a = data[0];
      this.month1 = a.month1;
      this.year = a.year;
      this.depname = a.depname;
      this.empname = a.empname;
    });
  }
   

  save() {
    var newData = this.dataSource.data;
    console.log(newData);
    this.service.UpdateEMPAttendance(
      newData).subscribe(
        res => {});

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
    activity.activity = "Visiting Updateperempattlist";
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