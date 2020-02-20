import { Component, OnInit ,EventEmitter} from '@angular/core';
import { UserActivity } from 'src/app/ClassFiles/user-activity';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Office } from 'src/app/ClassFiles/office';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';

import { CenterService } from 'src/app/shared/services/center.service';
import { Addcentertype } from 'src/app/ClassFiles/addcentertype';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-add-edit-center-type',
  templateUrl: './add-edit-center-type.component.html',
  styleUrls: ['./add-edit-center-type.component.scss']
})
export class AddEditCenterTypeComponent implements OnInit {
  closeResult: string;
  pgid;
  centerid;
  centid;
  userid;
  Userrole: string;
  centerForm:FormGroup;
  UserId:string;
  url:string
// data:data[];
centedetail:Addcentertype;
  data:Addcentertype[];
  ProList;
  submited = new EventEmitter<string>();
  // model = new data('','','','','','','',null,null,'','','','','','','','','',0,'','','','','','','',0,'','','','','','','','','','','','','','',0,);
  model = new Addcentertype(0,'','',null,null,null,'',0);
  
  
  state:State[];
  Distirct:Distirct[];
  city:City[];
  office:Office[];
  dataId:string;
  UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 CenterType;
 CenterTypeList;
 pgname;
 finyear;
  constructor(private modalService: NgbModal,private service: CenterService,private toastr: ToastrService, 
    private router: Router,private fb: FormBuilder,private route: ActivatedRoute,private jankariservice: MasterServiceService) {
  this.service = service;

  this.UserId = localStorage.getItem("UserId");
  this.Userrole = localStorage.getItem("role");
    this.centid = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    service.CenterTypeList(this.centid).subscribe((data: any) => {

      
      this.CenterTypeList = data;

      console.log(this.CenterType);
      
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
    console.log(this.Userrole);
    if(this.Userrole=="R5" )
    {
      console.log("enyet"+this.Userrole);
      this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data:any)=>{ this.CenterType=data;
      
        console.log("abc"+this.CenterType);
        })
  }
  else if(this.Userrole=="R6" ) {
    console.log("enyet"+this.Userrole);
    this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data:any)=>{ this.CenterType=data;
    
      console.log("abc"+this.CenterType);
      })
  }
  else if(this.Userrole=="R7" ) {
    console.log("enyet"+this.Userrole);
    this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data:any)=>{ this.CenterType=data;
    
      console.log("abc"+this.CenterType);
      })

  
  
  }

  else if(this.Userrole=="R2" ) {
    console.log("enyet"+this.Userrole);
    this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data:any)=>{ this.CenterType=data;
    
      console.log("abc"+this.CenterType);
      })

  
  
  }
}
 
  ngOnInit() {
  this.centerForm = this.fb.group({
  
    centertype1: ['', Validators.required],
    stdt: ['', Validators.required],  
    endt: ['', Validators.required],
   
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
    if (this.data == undefined) {
        console.log("add");
        const data: Addcentertype = new Addcentertype();
  data.centertype1 = this.centerForm.value.centertype1;
  data.stdt = this.centerForm.value.stdt;
  data.endt = this.centerForm.value.endt;
 
  
  
  console.log(data);
  this.service.AddCenterType(this.centid,this.UserId,data).subscribe((res) => {
    
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
  
   this.router.navigate(['/InfraDetails',this.centid]);
    
    
    
    }

    ,
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
  this.router.navigate(['/InfraDetails', this.centid]);
}

Delete(ctid) {
  console.log(ctid);
  this.service.RemoveCenterType(ctid).subscribe((res) => {
    this.submited.emit(res.toString());
    this.toastr.error("Removed SuccessFully");
    this.service.CenterTypeList(this.centid).subscribe((data: any) => { this.CenterType = data; })
    this.service.CenterTypeList(this.centid).subscribe((data: any) => { this.CenterType = data.length; })
  },
    error => {
      console.log(error);
    }
  );
}


open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }

}

}
