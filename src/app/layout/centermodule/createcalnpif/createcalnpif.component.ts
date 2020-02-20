import { Component, OnInit, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { Employee } from 'src/app/ClassFiles/employee';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Office } from 'src/app/ClassFiles/office';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';


@Component({
  selector: 'app-createcalnpif',
  templateUrl: './createcalnpif.component.html',
  styleUrls: ['./createcalnpif.component.scss']
})
export class CreatecalnpifComponent implements OnInit {

  
  
  employeeForm:FormGroup;
  UserId:string;
  url:string
  employee:Employee[];
 
  submited = new EventEmitter<string>();
  model = new Employee('','','','','','','',null,null,'','','','','','','','','',0,'','','','','','','',0,'','','','','','','','','','','','','','',0,);
  state:State[];
  Distirct:Distirct[];
  city:City[];
  office:Office[];
  employeeId:string;
  UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;

  constructor( private service: MasterServiceService,private toastr: ToastrService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
  this.service = service;
  this.employeeId = route.snapshot.params["id"];
  this.UserId = localStorage.getItem("UserId");

  if (this.employeeId != undefined) {

    this.service.GetEmployeeDetails(this.employeeId).subscribe(data => {
        this.employee =data;
    }
    );
}

  service.GetStateList().subscribe((data:any)=>{this.state=data;})
  service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
  service.GetCityList().subscribe((data:any)=>{this.city=data;})

  }
  
 
  ngOnInit() {
  this.employeeForm = this.fb.group({
  
  prefix: ['', Validators.required],
  firstname: ['', Validators.required],
  middlename: ['', Validators.required],
  lastname: ['', Validators.required],
  gender: ['', Validators.required],
  maritalstatus: [''],
  dob:['', Validators.required],
  // doj:['', Validators.required],
  pancard: ['', [Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
  aadharnumber: ['',[Validators.required, Validators.minLength(12), Validators.maxLength(12),Validators.pattern('[0-9]*')]],
  passportno: [''],
  bloodgroup: ['', Validators.required],
  hobby: [''],

  });
  this.addressip();
this.adduseractivity();
  }
  onSelectState(stname) {
  console.log(stname);
  if (stname == "")
  this.Distirct = null;
  else
  this.service.GetStatewiseDistrictList(stname).subscribe(
  data => {
  
  this.Distirct = data;
  
  }
  
  );
  } 
  
  onSelectDistrict(dtname) {
  if (dtname == "")
  this.city = null;
  else
  this.service.GetDistrictwiseCityList(dtname ).subscribe(
  data => {
  this.city = data;
  }
  );
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
  
  AddEmployee() {
    if (this.employee == undefined) {
        console.log("add");
        const employee: Employee = new Employee();
  employee.prefix = this.employeeForm.value.prefix;
  employee.firstname = this.employeeForm.value.firstname;
  employee.middlename = this.employeeForm.value.middlename;
  employee.lastname = this.employeeForm.value.lastname;
  employee.dob = this.employeeForm.value.dob;
  employee.bloodgroup = this.employeeForm.value.bloodgroup;
  employee.maritalstatus = this.employeeForm.value.maritalstatus;
  employee.gender = this.employeeForm.value.gender;
  employee.aadharnumber = this.employeeForm.value.aadharnumber;
  employee.pancard = this.employeeForm.value.pancard;
  employee.passportno = this.employeeForm.value.passportno;
  employee.hobby = this.employeeForm.value.hobby; 
  
  this.service.InsertEmployee(employee).subscribe((res) => {
    console.log(res);
    this.submited.emit(res.toString());
    if (res.toString() === "Exists")
    {
    this.toastr.error ("Employee Already Exists");
    }
   else 
    {
      this.toastr.success ("Added SuccessFully");
    }
    localStorage.setItem('empid', res.toString());
  
   this.router.navigate(['/EditEmployeeContact',res]);
    
    
    
    },
    error => {
    console.log(error);
    }
    );
    }
    else {
      console.log("update");
      const employee: Employee = new Employee();
      employee.prefix = this.employeeForm.value.prefix;
      employee.firstname = this.employeeForm.value.firstname;
      employee.middlename = this.employeeForm.value.middlename;
      employee.lastname = this.employeeForm.value.lastname;
      employee.dob = this.employeeForm.value.dob;
      employee.bloodgroup = this.employeeForm.value.bloodgroup;
      employee.maritalstatus = this.employeeForm.value.maritalstatus;
      employee.gender = this.employeeForm.value.gender;
      employee.aadharnumber = this.employeeForm.value.aadharnumber;
      employee.pancard = this.employeeForm.value.pancard;
      employee.passportno = this.employeeForm.value.passportno;
      employee.hobby = this.employeeForm.value.hobby;
      employee.updatedby = this.UserId;
      console.log(employee);
      this.service.UpdateEmployee(this.employeeId,employee).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      localStorage.setItem('empid', res.toString());
      alert("Update SuccessFully");
      this.router.navigate(['/EmployeeDetails', this.employeeId]);
      
      
      
      },
      error => {
      console.log(error);
      }
      );
      }

}
Back(){
  this.router.navigate(['/EmployeeDetails', this.employeeId]);
}
adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserId ;
  activity.activity = "Visiting AddEmployee";
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
