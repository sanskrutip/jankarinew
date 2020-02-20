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
import { Gst } from 'src/app/ClassFiles/gst';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-gst-details',
  templateUrl: './gst-details.component.html',
  styleUrls: ['./gst-details.component.scss']
})
export class GstDetailsComponent implements OnInit {


  selectedValue: string = '';
  pgid;
  Userrole: string;
  centerForm:FormGroup;
  UserId:string;
  url:string
// data:data[];
  data:Addcenter[]
  ProgramList:ProgramList[];
  submited = new EventEmitter<string>();
  // model = new data('','','','','','','',null,null,'','','','','','','','','',0,'','','','','','','',0,'','','','','','','','','','','','','','',0,);
  model = new Gst(0,'','','','','','',0);
  fileToUpload: File = null;
  imageUrl: string;
  
  state:State[];
  Distirct:Distirct[];
  city:City[];
  office:Office[];
  dataId:string;
  UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 Gst:Gst[];
 centid;
 pgname;
 finyear
  constructor(private service: CenterService,private jankariservice: MasterServiceService,private toastr: ToastrService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
  this.service = service;

  this.UserId = localStorage.getItem("UserId");
  this.Userrole = localStorage.getItem("role");
    this.centid = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

  this.pageload();

  }

  pageload()
  {

  
    console.log(this.Userrole);
    if(this.Userrole=="R5" )
    {
      this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG'").subscribe((data:any)=>{ this.ProgramList=data;})

 
  
  
  }
  else if(this.Userrole=="R6" ) {
    console.log("enyet"+this.Userrole);
    this.service.FillDropDown("Program","distinct pgname","pgid","where ogid='OG1' and pgname !='Support Team' and pgname!='BOD' and pgname!='SHG'").subscribe((data:any)=>{ this.ProgramList=data;})

  
  
  }
}
 
  ngOnInit() {
  this.centerForm = this.fb.group({
    gstapplicable: ['', Validators.required],
    academicyear: ['', Validators.required],
    panno: ['', Validators.required],
    gstno: ['', Validators.required],
    gstfile: ['', Validators.required],

    
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
  
  
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    
    reader.readAsDataURL(this.fileToUpload);
         
}




// Addcenter(){
//   const data: Gst = new Gst();
 
//   data.gstapplicable = this.centerForm.value.gstapplicable;
//       data.academicyear = this.centerForm.value.centname;
//    console.log(data)

//    console.log(this.fileToUpload)

//    this.service.UploadCenterGST(this.centid,this.UserId, data.gstapplicable , data.academicyear,this.fileToUpload).subscribe(
//     data => {

//       this.toastr.success("Added SuccessFully");
     
//     });
// }
  
Addcenter() {

  this.pgid = localStorage.getItem("pgid");
  if (this.data == undefined) {
   
      const data: Gst = new Gst();
data.gstapplicable = this.centerForm.value.gstapplicable;
data.academicyear = this.centerForm.value.academicyear;
data.gstno = this.centerForm.value.gstno;
data.panno = this.centerForm.value.panno  ;
data.gstfile = this.centerForm.value.gstfile;


if(this.centerForm.value.gstapplicable == "Yes"){

  this.service.AddCenterGST(this.centid,this.UserId, data).subscribe((res) => {
    console.log(res);
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
  
   this.router.navigate(['/AddEditComputerHardware',res]);
    
    
    
    }
  
    ,
    error => {
    console.log(error);
    }
    );

}

else(this.centerForm.value.gstapplicable == "No")
{
  
this.service.UploadCenterGST(this.centid,this.UserId, data.gstapplicable , data.academicyear,this.fileToUpload).subscribe((res) => {
  console.log(res);
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

 this.router.navigate(['/AddEditComputerHardware',res]);
  
  
  
  }

  ,
  error => {
  console.log(error);
  }
  );
  }

}}

Back(){
  this.router.navigate(['/CenterDetail', this.centid]);
}

Skip(){
  this.router.navigate(['/AddEditComputerHardware', this.centid]);
}



}