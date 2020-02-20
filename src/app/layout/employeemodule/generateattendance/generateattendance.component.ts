

import { Component, OnInit ,EventEmitter} from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Attlist } from 'src/app/ClassFiles/attlist';
import { Totworking } from 'src/app/ClassFiles/totworking';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';

@Component({
  selector: 'app-generateattendance',
  templateUrl: './generateattendance.component.html',
  styleUrls: ['./generateattendance.component.scss']
})
export class GenerateattendanceComponent implements OnInit {
  review_btn=true;
// spinner
disabled: true
spinnerButtonOptions: MatProgressButtonOptions = {
  active: false,
  text: 'Save',
  spinnerSize: 18,
  raised: true,
  stroked: false,
  buttonColor: 'primary',
  spinnerColor: 'primary',
  fullWidth: false,
  disabled: false,
  mode: 'indeterminate',

}
spinnerButtonOptionss: MatProgressButtonOptions = {
  active: false,
  text: 'Show',
  spinnerSize: 18,
  raised: true,
  stroked: false,
  buttonColor: 'primary',
  spinnerColor: 'primary',
  fullWidth: false,
  disabled: false,
  mode: 'indeterminate',

}

showLoadingIndicator = true;

// spinner end

  UpdateForm:FormGroup
  Attlist:Attlist[];
  displayedColumns: string[] = ['SrNo', 'employeename', 'workingdays','totabsent' ,'remark'];
  dataSource: MatTableDataSource<Attlist>;
  role="";
  fineyear="";
  pgid="";
  depid="";
  userid="";

  month;
  year;
  work:Totworking;
  submited = new EventEmitter<string>();
  model = new Totworking('');
  UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 UserId;
 monthname:string;
 pgname;
 finyear
  constructor(private toastr: ToastrService,private service: MasterServiceService, private router: Router, private route: ActivatedRoute,private fb: FormBuilder) { 
    this.role=route.snapshot.params["id"];
    this.pgid = route.snapshot.params["id1"];
    this.depid = route.snapshot.params["id2"];
    this.userid=route.snapshot.params["id3"];
    this.month = route.snapshot.params["id4"];
    this.year = route.snapshot.params["id5"];
    this.fineyear = route.snapshot.params["id6"];
    this.UserId = localStorage.getItem("UserId");
    this.monthname = localStorage.getItem("monthname");
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    // service.CheckAttendaceList( this.pgid, this.depid, this.role, this.userid).subscribe((data: any) => { 
      
    //   this.dataSource  = new MatTableDataSource(data);
     


    // })
    if(this.month=="1"){

      this.monthname="January";
    }
    else if(this.month=="2"){
      this.monthname="February";
    }
    else if(this.month=="3"){
      this.monthname="March";
    }
    
    else if(this.month=="4"){
      this.monthname="April";
    }
    
    else if(this.month=="5"){
      this.monthname="May";
    }
    
    else if(this.month=="6"){
      this.monthname="June";
    }
    
    else if(this.month=="7"){
      this.monthname="July";
    }
    
    else if(this.month=="8"){
      this.monthname="August";
    }
    else if(this.month=="9"){
      this.monthname="September";
    
    }
    else if(this.month=="10"){
      this.monthname="October";
    }
    else if(this.month=="11"){
      this.monthname="November";
    }
    else if(this.month=="12"){
      this.monthname="December";
    }
    
   

    this.service.CheckAttendaceList( this.role,this.pgid, this.depid, this.userid,this.monthname,this.year).subscribe((data: any) => { 
   
     

      this.Attlist = data; 
      this.dataSource = new MatTableDataSource(data);
      console.log(this.Attlist)
    })

  }
  
  // Show(value) {
 
  //   this.service.CheckAttendaceList( this.role,this.pgid, this.depid, this.userid,value.month,value.year).subscribe((data: any) => { 
   
      

  //     this.Attlist = data; 
  //     this.dataSource = new MatTableDataSource(data);
  //     console.log(this.Attlist)
  //   })
  //   }

  save() {
 
  
    var newData = this.dataSource.data;
    console.log(newData);

    this.service.AddEMPAttendance(this.month, this.year ,
      newData).subscribe(
        res => {

          this.toastr.success ("update SuccessFully");      
       
          this.router.navigate(['/GenerateSalary', this.role, this.pgid,  this.depid , this.userid, this.month,  this.year,  this.fineyear]);

        });


  }
  
  ngOnInit() {
    this.addressip();
this.adduseractivity();
  }
  someFunc(): void {
    this.spinnerButtonOptions.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions.active = false;
    }, 95000)
  }
  adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserId ;
  activity.activity = "Visiting GenerateAttendance";
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