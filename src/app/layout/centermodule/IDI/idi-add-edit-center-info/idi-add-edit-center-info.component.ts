import { Component, OnInit ,EventEmitter } from '@angular/core';
import { Addcenter } from 'src/app/ClassFiles/addcenter';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CenterService } from 'src/app/shared/services/center.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Office } from 'src/app/ClassFiles/office';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-idi-add-edit-center-info',
  templateUrl: './idi-add-edit-center-info.component.html',
  styleUrls: ['./idi-add-edit-center-info.component.scss']
})
export class IdiAddEditCenterInfoComponent implements OnInit {

  pgid;
  centerid;
  Userrole: string;
  centerForm:FormGroup;
  UserId:string;
  url:string;
  CenterType;
// data:data[];
  data:Addcenter[];
  ProgramList:ProgramList[];
  submited = new EventEmitter<string>();
  model = new Addcenter('' ,'','','','','','','','',null,null,null,'',0,'','','','','','','','','','','','',0,'','','','','','','','','','','','',0,null,'',null,'',0,'','',0,0,0);
  
  centedetail:Addcenter;
  state:State[];
  Distirct:Distirct[];
  city:City[];
  office:Office[];
  dataId:string;
  //UserActivity:UserActivity[];
  centerId:string;
//model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 userid;
 centid;
 pgname;
 finyear;
  constructor(private service: CenterService, private jankariservice: MasterServiceService,private toastr: ToastrService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
  this.service = service;

  this.Userrole = localStorage.getItem("role");
  this.UserId = localStorage.getItem("UserId");
  this.centid = route.snapshot.params["id"];

  this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

  if (this.centid != undefined) {

    this.service.GetCenterDetails(this.centid).subscribe(data => {

        this.centedetail = data;

        console.log("xyz"+data);
    }
    );
}
  this.pageload();

  }

  pageload()
  {
    if(this.Userrole=="R5" )
    {
      this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG'  and pgid='P6'").subscribe((data:any)=>{ this.ProgramList=data;})

  }
  else if(this.Userrole=="R6" ) {
    this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG'  and pgid='P6'").subscribe((data:any)=>{ this.ProgramList=data;})

  }
  else if(this.Userrole=="R7" ) {
    this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG'  and pgid='P6'").subscribe((data:any)=>{ this.ProgramList=data;})

  }
  else if(this.Userrole=="R19" ) {
    this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG'  and pgid='P6'").subscribe((data:any)=>{ this.ProgramList=data;})
    this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='IDI'").subscribe((data:any)=>{ this.CenterType=data;
    
      console.log("abc"+this.CenterType);
      })
  }
}
 
  ngOnInit() { 
     this.pageload();
  this.centerForm = this.fb.group({
  
    pgid:  ['', Validators.required],
    centname: ['', Validators.required],
    premisesowner: ['', Validators.required],
    centertype: ['', Validators.required],
    centerrent:['', Validators.required],
    centstdt:['', Validators.required],
    centenddt: ['', Validators.required],
    status: ['', Validators.required],
    region: ['', Validators.required],
    infrastatus: ['', Validators.required],
 
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
    this.centerid = localStorage.getItem("centerid");
    if (this.centedetail == undefined) {
        console.log("add");
        const data: Addcenter = new Addcenter();
  data.pgid = this.centerForm.value.pgid;
  data.centname = this.centerForm.value.centname;
  data.premisesowner = this.centerForm.value.premisesowner;
  data.centertype = this.centerForm.value.centertype;
  data.centerrent = this.centerForm.value.centerrent;
  data.centstdt = this.centerForm.value.centstdt;
  data.centenddt = this.centerForm.value.centenddt;
  data.status = this.centerForm.value.status;
  data.region = this.centerForm.value.region;
  data.infrastatus = this.centerForm.value.infrastatus;
  data.createby =  this.UserId;
  
  
  console.log(data);
  this.service.InsertCenter(this.centerForm.value.pgid,data).subscribe((res) => {
    
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
  
   this.router.navigate(['/IDICenterContact',res]);
    
    
    
    }
    
    
    
    ,
    error => {
    console.log(error);
    }
    );
    }
    else {
      console.log("update");
      const data: Addcenter = new Addcenter();
      data.pgid = this.centerForm.value.pgid;
      data.centname = this.centerForm.value.centname;
      data.premisesowner = this.centerForm.value.premisesowner;
      data.centertype = this.centerForm.value.centertype;
      data.centerrent = this.centerForm.value.centerrent;
      data.centstdt = this.centerForm.value.centstdt;
      data.centenddt = this.centerForm.value.centenddt;
      data.status = this.centerForm.value.status;
      data.region = this.centerForm.value.region;
      data.infrastatus = this.centerForm.value.infrastatus;
      data.createby =  this.UserId;
      console.log(data);
      this.service.UpdateCenter(this.UserId,this.Userrole,this.centerForm.value.pgid,this.centid,data).subscribe((res) => {
        console.log(res);
        this.submited.emit(res.toString());
        localStorage.setItem('centid', res.toString());
        this.toastr.success ("Update SuccessFully");
        this.router.navigate(['/IDICenterDetails', this.centid]);
              
        },
        error => {
        console.log(error);
        }
        );
        }

}

}
