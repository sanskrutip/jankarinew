
import { Component, OnInit ,EventEmitter} from '@angular/core';
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
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

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
  this.UserId = localStorage.getItem("UserId");
  this.Userrole = localStorage.getItem("role");
    this.centid = route.snapshot.params["id"];
    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    this.service.GetCenterotherInfoList(this.centid).subscribe(data => {

      this.centedetail = data;

     
  }
  );

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

 this.router.navigate(['/AddEditCenterType',this.centid]);
  
  
  
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
  this.router.navigate(['/CenterDetail', this.centid]);
}

Skip(){
  this.router.navigate(['/AddEditCenterType', this.centid]);
}




}
