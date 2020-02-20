import { Component, OnInit,EventEmitter } from '@angular/core';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Office } from 'src/app/ClassFiles/office';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Addcenter } from 'src/app/ClassFiles/addcenter';
import { CenterService } from 'src/app/shared/services/center.service';
import { Addcenterotherinfo } from 'src/app/ClassFiles/addcenterotherinfo';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-cal-ubs-add-edit-otherinfo',
  templateUrl: './cal-ubs-add-edit-otherinfo.component.html',
  styleUrls: ['./cal-ubs-add-edit-otherinfo.component.scss']
})
export class CalUbsAddEditOtherinfoComponent implements OnInit {


  pgid;
  centerid;

  Userrole: string;
  centerForm:FormGroup;
  UserId:string;
  url:string
// data:data[];
centedetail;
  data:Addcenterotherinfo[];
  ProgramList:ProgramList[];
  submited = new EventEmitter<string>();
  // model = new data('','','','','','','',null,null,'','','','','','','','','',0,'','','','','','','',0,'','','','','','','','','','','','','','',0,);
  model = new Addcenterotherinfo(0,'','','','','','');
  
  
  state:State[];
  Distirct:Distirct[];
  city:City[];
  office:Office[];
  dataId:string;
  UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 userid;
 centid;
 stringifiedData;
 pgname;
 finyear
  constructor(private service: CenterService,private jankariservice: MasterServiceService,private toastr: ToastrService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
  this.service = service;


  this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
  this.UserId = localStorage.getItem("UserId");
  this.Userrole = localStorage.getItem("role");
    this.centid = route.snapshot.params["id"];


    if (this.centid != undefined) {

      this.service.GetCenterotherInfoList(this.centid).subscribe(data => {
  
          this.centedetail = data;
           this.stringifiedData = JSON.stringify(this.centedetail);  
           console.log("With Stringify :" , this.stringifiedData);  
      }
      );
  }
  

  }

 
 
  ngOnInit() {
  this.centerForm = this.fb.group({
  
    leaderposteravail: ['', Validators.required],
    animatedposteravail: ['', Validators.required],
    librarybooksavail: ['', Validators.required],
    partnerboardavail: ['', Validators.required],
    labmaterialprovied: ['', Validators.required],
    
  });

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
  
// Addcenter() {

//     this.pgid = localStorage.getItem("pgid");
//     this.centerid = localStorage.getItem("centerid");
//     if (this.data == undefined) {
//         console.log("add");
//         const data: Addcenterotherinfo = new Addcenterotherinfo();
//   data.leaderposteravail = this.centerForm.value.leaderposteravail;
//   data.animatedposteravail = this.centerForm.value.animatedposteravail;
//   data.librarybooksavail = this.centerForm.value.librarybooksavail;
//   data.partnerboardavail = this.centerForm.value.partnerboardavail;
//   data.labmaterialprovied = this.centerForm.value.labmaterialprovied;
 
  
  
//   console.log(data);
//   this.service.AddCenterotherInfo(this.centid,this.UserId,data).subscribe((res) => {
    
//     this.submited.emit(res.toString());
//     if (res.toString() === "Exists")
//     {
//     this.toastr.error ("Center Already Exists");
//     }
//    else 
//     {
//       this.toastr.success ("Added SuccessFully");
//     }
//     localStorage.setItem('pgid', res.toString());
  
//    this.router.navigate(['/AddEditCenterType',this.centid]);
    
  
//     }

//     ,
//     error => {
//     console.log(error);
//     }
//     );
//     }
//     else {
//       console.log("update");
//       const data: Addcenterotherinfo = new Addcenterotherinfo();
//       data.leaderposteravail = this.centerForm.value.leaderposteravail;
//       data.animatedposteravail = this.centerForm.value.animatedposteravail;
//       data.librarybooksavail = this.centerForm.value.librarybooksavail;
//       data.partnerboardavail = this.centerForm.value.partnerboardavail;
//       data.labmaterialprovied = this.centerForm.value.labmaterialprovied;
//       console.log(data);
//       this.service.UpdateCenterOtherInfo(this.centid,this.userid,data).subscribe((res) => {
//       console.log(res);
//       this.submited.emit(res.toString());
//       localStorage.setItem('empid', res.toString());
//       alert("Update SuccessFully");
//       this.router.navigate(['/EmployeeDetails', this.dataId]);
        
//       },
//       );
//       error => {
//       console.log(error);
//       }
    
//       }

// }


Addcenter() {

  this.pgid = localStorage.getItem("pgid");

  if (this.data == undefined) {
      console.log("add");
      const data: Addcenterotherinfo = new Addcenterotherinfo();
  data.leaderposteravail = this.centerForm.value.leaderposteravail;
  data.animatedposteravail = this.centerForm.value.animatedposteravail;
  data.librarybooksavail = this.centerForm.value.librarybooksavail;
  data.partnerboardavail = this.centerForm.value.partnerboardavail;
  data.labmaterialprovied = this.centerForm.value.labmaterialprovied;


console.log(data);
this.service.AddCenterotherInfo(this.centid,this.UserId,data).subscribe((res) => {
  
  this.submited.emit(res.toString());
  if (res.toString() === "Exists")
  {
  this.toastr.error ("Center Already Exists");
  }
 else 
  {
    this.toastr.success ("Added SuccessFully");
  }
  localStorage.setItem('pgid', res.toString());

 this.router.navigate(['/CAL-UBS-Add-Update-Infra',this.centid]);
  
  
  
  }
  
  
  
  ,
  error => {
  console.log(error);
  }
  );
  }
  else {
    console.log("update");
    const data: Addcenterotherinfo = new Addcenterotherinfo();
    data.leaderposteravail = this.centerForm.value.leaderposteravail;
    data.animatedposteravail = this.centerForm.value.animatedposteravail;
    data.librarybooksavail = this.centerForm.value.librarybooksavail;
    data.partnerboardavail = this.centerForm.value.partnerboardavail;
    data.labmaterialprovied = this.centerForm.value.labmaterialprovied;
  
    this.service.UpdateCenterOtherInfo(this.centid,this.UserId,data).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      localStorage.setItem('centid', res.toString());
      alert("Update SuccessFully");
      this.router.navigate(['/CenterDetail', this.centid]);
      
      
      },
      error => {
      console.log(error);
      }
      );
      }

}



Back(){
  this.router.navigate(['/CAL-UBS-CenterDetail', this.centid]);
}

Skip(){
  this.router.navigate(['/CAL-UBS-Add-Update-Infra', this.centid]);
}

}
