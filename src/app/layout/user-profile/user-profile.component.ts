import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MustMatch } from  'src/app/shared/must-match.validator';
import { User } from 'src/app/user';
import { Password } from 'src/app/ClassFiles/password';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 PasswordForm: FormGroup;
 submitted = false;
 User:User[];
 FullName;
 Password:Password
 userId:string;
 model = new Password('','',);
 UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 submited = new EventEmitter<string>();
  constructor(private service: MasterServiceService,
 private router: Router,private fb: FormBuilder,private toastr: ToastrService,private route:ActivatedRoute) {
  this.userId =localStorage.getItem('UserId');
  this.FullName =localStorage.getItem('FullName');
  this.service = service;
  service.GetProfile(this.userId).subscribe((data: any) => { 
    this.User= data;
  })
   
   }

  ngOnInit() {
    this.PasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
  },
   {
      validator: MustMatch('password', 'confirmPassword')
  }
  );
  this.addressip();
  this.adduseractivity();
  }
  get f() { return this.PasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.PasswordForm.invalid) {
        return;
        
    }
    const pass: Password = new Password();
        console.log(pass);
        pass.userid= this.userId ;
        pass.password = this.PasswordForm.value.password;
        pass.confirmPassword = this.PasswordForm.value.confirmPassword;
        console.log(
          "pass"+pass
        )
        
        this.service.UpdatePassword(pass).subscribe((res) => {
          console.log(res);
          this.submited.emit(res.toString());
          console.log(res.toString());
          if(res.toString()=="Success"){
 this.toastr.success ("Change SuccessFully");
               this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
               this.router.navigate(['/UserProfile'])); 
          }
          else{
            
 this.toastr.error ("Cannot Update password");
          }
           
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
  activity.userid = this.userId ;
  activity.activity = "Visiting EmployeelistComponent";
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
