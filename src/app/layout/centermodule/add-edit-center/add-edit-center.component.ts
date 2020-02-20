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

@Component({
  selector: 'app-add-edit-center',
  templateUrl: './add-edit-center.component.html',
  styleUrls: ['./add-edit-center.component.scss']
})
export class AddEditCenterComponent implements OnInit {
  pgid;
  centerid;
  Userrole: string;
  centerForm:FormGroup;
  UserId:string;
  url:string
// data:data[];
  data:Addcenter[];
  ProgramList:ProgramList[];
  submited = new EventEmitter<string>();
  model = new Addcenter('','','','','','','','','',null,null,null,'',0,'','','','','','','','','','','','',0,'','','','','','','','','','','','',0,null,'',null,'',0,'','',0,0,0);
  
  centedetail:Addcenter;
  state:State[];
  Distirct:Distirct[];
  city:City[];
  office:Office[];
  dataId:string;
  UserActivity:UserActivity[];
  centerId:string;
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 userid;
 centid;
  constructor(private service: CenterService,private toastr: ToastrService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
  this.service = service;

  this.Userrole = localStorage.getItem("role");
  this.UserId = localStorage.getItem("UserId");
  this.centid = route.snapshot.params["id"];

  this.pgid = localStorage.getItem("pgid");
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
      this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG' and pgid='"+  this.pgid +"'").subscribe((data:any)=>{ this.ProgramList=data;})

  }

  else if(this.Userrole=="R2" ) {
    this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG' and pgid='"+  this.pgid +"'").subscribe((data:any)=>{ this.ProgramList=data;})

  }
  else if(this.Userrole=="R6" ) {
    this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG' and pgid='"+  this.pgid +"'").subscribe((data:any)=>{ this.ProgramList=data;})

  }
  else if(this.Userrole=="R7" ) {
    this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG'  and pgid='"+  this.pgid +"'").subscribe((data:any)=>{ this.ProgramList=data;})

  }
  else if(this.Userrole=="R19" ) {
    this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG'  and pgid='"+  this.pgid +"'").subscribe((data:any)=>{ this.ProgramList=data;})

  }
}
 
  ngOnInit() { 
     this.pageload();
  this.centerForm = this.fb.group({
  
    pgid: ['', Validators.required],
    centname: ['', Validators.required],
    premisesowner: ['', Validators.required],
    principalname: ['', Validators.required],
    principalcontact:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
    principalemail: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    centstdt:['', Validators.required],
    centenddt: ['', Validators.required],
    status: ['', Validators.required],
 
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
  data.principalname = this.centerForm.value.principalname;
  data.principalcontact = this.centerForm.value.principalcontact;
  data.principalemail = this.centerForm.value.principalemail;
  data.centstdt = this.centerForm.value.centstdt;
  data.centenddt = this.centerForm.value.centenddt;
  data.status = this.centerForm.value.status;
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
  
   this.router.navigate(['/AddEditCenterContact',res]);
    
    
    
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
      data.principalname = this.centerForm.value.principalname;
      data.principalcontact = this.centerForm.value.principalcontact;
      data.principalemail = this.centerForm.value.principalemail;
      data.centstdt = this.centerForm.value.centstdt;
      data.centenddt = this.centerForm.value.centenddt;
      data.status = this.centerForm.value.status;
      console.log(data);
      this.service.UpdateCenter(this.UserId,this.Userrole,this.centerForm.value.pgid,this.centid,data).subscribe((res) => {
        console.log(res);
        this.submited.emit(res.toString());
        localStorage.setItem('centid', res.toString());
        this.toastr.success ("Update SuccessFully");
        this.router.navigate(['/CenterDetail', this.centid]);
        
        
        
        },
        error => {
        console.log(error);
        }
        );
        }

}

}
