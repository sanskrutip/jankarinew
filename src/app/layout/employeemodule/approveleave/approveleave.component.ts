import { Component, OnInit, EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LeaveType } from 'src/app/ClassFiles/leave-type';
import { Employeeleave } from 'src/app/ClassFiles/employeeleave';
import { Empleave } from 'src/app/ClassFiles/leavestatus';
import { formatDate, Time } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-approveleave',
  templateUrl: './approveleave.component.html',
  styleUrls: ['./approveleave.component.scss']
})
export class ApproveleaveComponent implements OnInit {
  abc: string;
  Leavecountdata: LeaveType
  Employeeleave: Employeeleave
  empleaveid: string
  model = new Empleave('', '', '', false)
  leave: Empleave[];
  ApproveForm: FormGroup;
  UserId;
  UserActivity: UserActivity[];
  model1 = new UserActivity('', '', '', '', '', '');
  ipAddress: string;
  ipadd;
  submited = new EventEmitter<string>();
  pgname;
  finyear
  resultText = [];
  values: string;
  count: number = 0;
  leavetype;
  
  constructor(private service: MasterServiceService,
    private router: Router, private fb: FormBuilder, private toastr: ToastrService, private route: ActivatedRoute) {
    this.UserId = localStorage.getItem("UserId");
    this.empleaveid = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear", "yearname", "status=0").subscribe((data: any) => {
      this.finyear = data;

    })
    console.log(this.UserId);
    this.service = service;
    service.GetEmployeeLeaveData(this.UserId).subscribe((data: any) => {
      this.Leavecountdata = data;
      console.log(data);
    })

    service.GetEmployeeLeaveDetails(this.empleaveid).subscribe((data: any) => {
      this.Employeeleave = data;
      console.log(data);
      this.leavetype = data.leavetype;
    })
  }

  ngOnInit() {
    this.ApproveForm = this.fb.group({

      status: ['', Validators.required],
      remark: ['', Validators.required],
      escalate: [''],
    });

    this.ApproveForm.get('status')
      .valueChanges.subscribe((data: string) => {

        this.onStatusChange(data);

      });
    this.addressip();
    this.adduseractivity();
  }

  ApproveLeave() {
    const leave: Empleave = new Empleave();
 
    if (this.ApproveForm.value.status == "Approve")
     {
      if (this.ApproveForm.value.escalate == true) {
        leave.status = "Escalate";
      }
      else { leave.status = this.ApproveForm.value.status; }
    }
    else {
    leave.status = this.ApproveForm.value.status;
    }
    leave.remark = this.ApproveForm.value.remark;
    leave.approveby = this.UserId;
    console.log(leave);
    this.service.ApproveEmployeeLeave( this.empleaveid,this.Employeeleave.empid,this.UserId,leave).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      console.log(res.toString());

      this.toastr.success ("Approve SuccessFully");
           this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
       this.router.navigate(['/ApproveLeaveList']));

          },
      error => {
        console.log(error);
      }
    );
  }
  

  onStatusChange(selectedValue: string) {

    const statusControl = this.ApproveForm.get('remark');

    if (selectedValue === "Rejected") {

      statusControl.setValidators(Validators.required);
    }
    else {
      statusControl.clearValidators();

    }
    statusControl.updateValueAndValidity();

  }

  adduseractivity() {
    this.ipadd = localStorage.getItem("IP");

    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserId;
    activity.activity = "Visiting ApproveLeave";
    activity.pageurl = this.router.url;
    activity.prgid = "";
    activity.userip = this.ipadd;
    let date = new Date();
    activity.aLogDate = formatDate(date, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');

    this.service.InsertUserActivity(activity).subscribe((data: any) => {
      console.log(data);
    })
  }


  addressip() {
    this.service.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
      localStorage.setItem('IP', res.ip);
    });


  }

  

}
