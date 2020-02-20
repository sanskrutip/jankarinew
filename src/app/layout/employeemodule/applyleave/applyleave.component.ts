import { Component, OnInit,EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employeeleave } from 'src/app/ClassFiles/employeeleave';
import { LeaveType } from 'src/app/ClassFiles/leave-type';
import { Employee } from 'src/app/ClassFiles/employee';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.scss']
})
export class ApplyleaveComponent implements OnInit {
  
  selectedValue: string = '';
  isShow = false;
LeaveForm: FormGroup;
submited = new EventEmitter<string>();
model = new Employeeleave('',null,null,'','',);
LeaveType:LeaveType
Leavecountdata:LeaveType
EmployeeList:Employee
UserId;
UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 pgname;
 finyear;
 username:any;
 FullName;
 marked = false;
  theCheckbox = false;
  constructor(private service: MasterServiceService,
  private router: Router,private fb: FormBuilder,private toastr: ToastrService ) { 
    this.UserId = localStorage.getItem("UserId");
    this.pgname = localStorage.getItem("pgname");
    this.FullName = localStorage.getItem("FullName");

    
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
   

    
    // console.log("getMultiSelectionWhere"+this.getMultiSelectionWhere(this.username.toString()));
    console.log(this.username);
    this.service = service;
    service.LeaveCountList().subscribe((data: any) => { 
    this.LeaveType= data; 
   console.log(data);
   })



  // service.FillDropDown("Employee","distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid","where Employee.status=0 and Employee.empid='"+this.UserId+"'")
  // .subscribe((data: any) => { this.EmployeeList = data; })

  service.FillDropDown("Employee","distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid","where Employee.empid='"+this.UserId+"' and  Employee.status=0 union select Employee.firstname%2B' '%2BEmployee.lastname,Employee.empid from employee inner join EmployeeProgram  on Employee.empid=EmployeeProgram.empid where EmployeeProgram.reportto='"+this.UserId+"' and  Employee.status=0  ")
 .subscribe((data: any) => { 
   
  this.EmployeeList = data;
console.log("ApplyLeave"+this.UserId);
})
// this.EmployeeList = this.username;

  service.GetEmployeeLeaveData(this.UserId).subscribe((data: any) => { 
    this.Leavecountdata= data;
   console.log(data);
   })
  }
  

getTrainingName(n:number){
     // button click handler
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }

  ngOnInit() {
  
    this.LeaveForm = this.fb.group({
      empid: ['', Validators.required],
      // empid: ['', Validators.required],
      leavetid: ['', Validators.required],
      leavefrom: ['', Validators.required],
      leaveto: ['', Validators.required],
      leavedescription: ['', Validators.required],
    });
    this.addressip();
this.adduseractivity();
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  AddLeave() {
    const leave: Employeeleave = new Employeeleave();
    leave.empid = this.LeaveForm.value.empid;
    leave.leavetid = this.LeaveForm.value.leavetid;
    leave.leavefrom = this.LeaveForm.value.leavefrom;
    leave.leaveto = this.LeaveForm.value.leaveto;
    leave.leavedescription = this.LeaveForm.value.leavedescription;
    leave.createdby = this.UserId;

    console.log(leave);
    this.service.AddEmployeeLeave(leave).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
       this.toastr.success ("Leave Apply SuccessFully");
       this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/Employeeleavelist']));
          
            },
      error => {
        console.log(error);
      }
    );
    }
    adduseractivity()
    {
      this.ipadd = localStorage.getItem("IP");
    
      const activity: UserActivity = new UserActivity();
      activity.userid = this.UserId ;
      activity.activity = "Visiting ApplyLeave";
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
