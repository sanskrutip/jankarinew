import { Component, OnInit ,EventEmitter} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.scss']
})
export class SendemailComponent implements OnInit {
  UserID: string;
  UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 submited = new EventEmitter<string>();
 finyear;
 pgname;
  constructor(private service: MasterServiceService,private modalService: NgbModal, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.UserID = localStorage.getItem('UserId');
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
   }
  
  ngOnInit() {
    this.addressip();
    this.adduseractivity();
  }
  filterrecord(searchmonth, searchyear,){
    console.log(searchmonth, searchyear)
    this.service.GetSalaryEmail(this.UserID, searchmonth, searchyear).subscribe((data: any) => {
      console.log(data);
    })

  }

  adduseractivity()
  {
    this.ipadd = localStorage.getItem("IP");
  
    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserID ;
    activity.activity = "Visiting SendEmail";
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
