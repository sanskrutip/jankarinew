import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/ClassFiles/employee';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { EmployeeProgram } from 'src/app/ClassFiles/employee-program';
import { EmployeeQualification } from 'src/app/ClassFiles/employee-qualification';
import { EmployeeReference } from 'src/app/ClassFiles/employee-reference';
import { formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { ToastrService } from 'ngx-toastr';
import { EmployeeProfile } from 'src/app/ClassFiles/employee-profile';
import { Empdocument } from 'src/app/ClassFiles/empdocument';
@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {

  employee: Employee[];
  employeeId: string;
  EmployeeProgram: EmployeeProgram[];
  EmployeeQualification: EmployeeQualification[];
  EmployeeReference: EmployeeReference[];
  salcreator: Employee[];
  salapproval: Employee[];
  UserActivity: UserActivity[];
  model = new UserActivity('', '', '', '', '', '');
  ipAddress: string;
  ipadd;
  UserId;
  url: '';
  imageUrl: string = "https://www.w3schools.com/howto/img_avatar.png";
  fileToUpload: File = null
  profile;
gender;
Empdocument:Empdocument[];
pgname;
finyear
  constructor(private toastr: ToastrService, private service: MasterServiceService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {

    this.employeeId = route.snapshot.params["id"];
    this.UserId = localStorage.getItem("UserId");
    this.pgname = localStorage.getItem("pgname");

   

    this.service = service;
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    service.GetEmployeeDetails(this.employeeId).subscribe((data: any) => {
      this.employee = data;
      console.log(data.gender)
      this.gender=  data.gender;
    });
    service.GetEmployeeDocument(this.employeeId).subscribe((data: any) => {
      this.Empdocument = data;
      console.log(this.Empdocument)
      
    });
    service.GetProfileImage(this.employeeId).subscribe((data1: any) => {

      console.log("fdhgjdf"+data1);
      if ( data1 !=undefined &&  data1 !=null &&  data1 !="/Image/")
      {
        console.log("image presrnt");
        this.profile = "http://localhost:24214" + data1;
      }
      else{
        console.log("image not presrnt");
        if( this.gender=="Male")
        {
        this.profile = "https://www.w3schools.com/howto/img_avatar.png";
      }
      else
      { this.profile = "https://www.w3schools.com/howto/img_avatar2.png";}
      }
    //  if (data1[0].empphoto != null || data1[0].empphoto !="undefined" || data1[0].empphoto !="/Image/") {
    //     this.profile = "http://localhost:24214" + data1;
    //   }
    //   else 
    //   {
    //     this.profile = "https://www.w3schools.com/howto/img_avatar.png";
    //   }
    });

    service.GetEmployeeProgram(this.employeeId).subscribe((data: any) => {
      this.EmployeeProgram = data;

    })
    service.GetEmployeeQualification(this.employeeId).subscribe((data: any) => {
      this.EmployeeQualification = data;

    })
    service.GetEmployeeReference(this.employeeId).subscribe((data: any) => {
      this.EmployeeReference = data;

    })
  }
  editEmployeePersonal() {

    this.router.navigate(['/EditEmployeePersonal', this.employeeId]);
  }
  editEmployeeContact() {

    this.router.navigate(['/EditEmployeeContact', this.employeeId]);
  }
  editEmployeeOffice() {

    this.router.navigate(['/EditEmployeeOffice', this.employeeId]);
  }
  editEmployeeSalary() {

    this.router.navigate(['/EditEmployeeSalary', this.employeeId]);
  }

  editEmployeeProg() {
    this.router.navigate(['/EditEmployeeProgram', this.employeeId]);
  }
  editEmployeeQual() {
    this.router.navigate(['/EditEmployeeQulification', this.employeeId]);
  }
  editEmployeeRef() {
    this.router.navigate(['/EditEmployeeReference', this.employeeId]);
  }
  editEmployeedoc() {
    this.router.navigate(['/EditEmployeeDocument', this.employeeId]);
  }

  ngOnInit() {
    this.addressip();
    this.adduseractivity();

  }

  adduseractivity() {
    this.ipadd = localStorage.getItem("IP");

    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserId;
    activity.activity = "Visiting EmployeeDetail";
    activity.pageurl = this.router.url;
    activity.prgid = "";
    activity.userip = this.ipadd;
    let date = new Date();
    activity.aLogDate = formatDate(date, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');

    this.service.InsertUserActivity(activity).subscribe((data: any) => {

    })
  }


  addressip() {
    this.service.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
      localStorage.setItem('IP', res.ip);
    });


  }


  // onSelectFile(event) {

  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.imageUrl = event.target.result;
  //     }
  //   }
  // }
  handleFileInput(file) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }

    reader.readAsDataURL(this.fileToUpload);
    this.service.postFile(this.employeeId, this.fileToUpload).subscribe(
      data => {
        file.value = null;
        // console.log(file.value)
        this.toastr.success("Added SuccessFully");
        this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/EmployeeDetails',this.employeeId]));

      });
  }



}