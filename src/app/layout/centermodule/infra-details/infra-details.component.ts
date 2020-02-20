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
import { CenterInfra } from 'src/app/ClassFiles/center-infra';
import { Infra } from 'src/app/ClassFiles/infra';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';


@Component({
  selector: 'app-infra-details',
  templateUrl: './infra-details.component.html',
  styleUrls: ['./infra-details.component.scss']
})
export class InfraDetailsComponent implements OnInit {
  closeResult: string;
  pgid;
  infralist;
  Userrole: string;
  centerForm:FormGroup;
  UserId:string;
  url:string
// data:data[];
  data:CenterInfra[]
  ProgramList:ProgramList[];
  submited = new EventEmitter<string>();
  // model = new data('','','','','','','',null,null,'','','','','','','','','',0,'','','','','','','',0,'','','','','','','','','','','','','','',0,);
  model = new CenterInfra(0,'','',0,0,0,null,'',null,'');
  Infracount;
  
  state:State[];
  Distirct:Distirct[];
  city:City[];
  Infra:Infra[];
  office:Office[];
  dataId:string;
  UserActivity:UserActivity[];
model1 = new UserActivity('','','','','','',);
ipAddress:string;
 ipadd;
 centid;
 pgname;
 finyear
  constructor(private service: CenterService, private jankariservice: MasterServiceService,private modalService: NgbModal,private toastr: ToastrService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
  this.service = service;

  this.UserId = localStorage.getItem("UserId");
  this.Userrole = localStorage.getItem("role");
    this.centid = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
  this.pageload();
  service.CenterInfraList(this.centid).subscribe((data:any)=>{this.Infra=data;
    this.Infracount=data.length;
  })

  }

  pageload()
  {

  
    console.log(this.Userrole);
    if(this.Userrole=="R5" )
    {

      this.service.FillDropDown("Inframaster","distinct infra","infra","").subscribe((data:any)=>{ this.infralist=data;})

 
  
  
  }
  else if(this.Userrole=="R6" ) {
    console.log("enyet"+this.Userrole);
    this.service.FillDropDown("Inframaster","distinct infra","infra","").subscribe((data:any)=>{ this.infralist=data;})
  }

  else if(this.Userrole=="R2" ) {
    console.log("enyet"+this.Userrole);
    this.service.FillDropDown("Inframaster","distinct infra","infra","").subscribe((data:any)=>{ this.infralist=data;})
  }


  else if(this.Userrole=="R7" ) {
    console.log("enyet"+this.Userrole);
  
    this.service.FillDropDown("Inframaster","distinct infra","infra","").subscribe((data:any)=>{ this.infralist=data;})

  
  }
  
  else if(this.Userrole=="R71" ) {
    console.log("enyet"+this.Userrole);
  
    this.service.FillDropDown("Inframaster","distinct infra","infra","").subscribe((data:any)=>{ this.infralist=data;})

  
  }
}
 
  ngOnInit() {
  this.centerForm = this.fb.group({
  
    infra: ['', Validators.required],
    notworking: ['', Validators.required],
    working: ['', Validators.required],
    total: ['', Validators.required],
    
 
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
        const data: CenterInfra = new CenterInfra();
  data.infra = this.centerForm.value.infra;
  data.notworking = this.centerForm.value.notworking;
  data.working = this.centerForm.value.working;
  data.total = this.centerForm.value.total;

  
  
  this.service.AddCenterInfra(this.centid,this.UserId,data).subscribe((res) => {
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
  
  this.router.navigate(['/CAL-UBS-Add-Update-Partner',this.centid]);
    
    
    
    }
    ,
    error => {
    console.log(error);
    }
    );
    }
    else {
      console.log("update");
      const data: CenterInfra = new CenterInfra();
      data.infra = this.centerForm.value.infra;
      data.notworking = this.centerForm.value.notworking;
      data.working = this.centerForm.value.working;
      data.total = this.centerForm.value.total;
      console.log(data);
      
      error => {
      console.log(error);
      }
    
      }

}


Delete(infraid) {
  console.log(infraid);
  this.service.RemoveCenterInfra(infraid).subscribe((res) => {
    this.submited.emit(res.toString());
    console.log(res.toString());
    if (res.toString() === "Exception") {
      this.toastr.error("ABC");
    }
    else {
      this.toastr.info("Removed SuccessFully");
    }
  
   
  },
    error => {
      console.log(error);
    }
  );
}

open(content) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
    return `with: ${reason}`;
  }

}

Back(){
  this.router.navigate(['/CenterDetail', this.centid]);
}
Skip(){
  this.router.navigate(['/AddEditPartnerDetail', this.centid]);
}

}
