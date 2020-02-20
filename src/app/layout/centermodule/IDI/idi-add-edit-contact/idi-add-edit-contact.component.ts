import { Component, OnInit ,EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Addcentercontact } from 'src/app/ClassFiles/addcentercontact';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterService } from 'src/app/shared/services/center.service';
import { ToastrService } from 'ngx-toastr';
import { Office } from 'src/app/ClassFiles/office';
import { Comman } from 'src/app/ClassFiles/comman';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { Employee } from 'src/app/ClassFiles/employee';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-idi-add-edit-contact',
  templateUrl: './idi-add-edit-contact.component.html',
  styleUrls: ['./idi-add-edit-contact.component.scss']
})
export class IdiAddEditContactComponent implements OnInit {


  centedetail:Addcentercontact;

  CenterForm:FormGroup;
  UserId:string;
  url:string
  centid;
  userid;
  employee:Employee[];
  pgid;
  data:Addcentercontact[];
  submited = new EventEmitter<string>();
  model = new Addcentercontact('','','','','','','','','',null,null,'',0,'','','','','','','','',
  '','','','',0,'','','','','','','','','','','','',0,null,'',null,'',0);
  
  state:State[];
  Distirct:Distirct[];
  city:City[];
  Comman:Comman[];
  Comman1:Comman[];
  Comman2:Comman[];
  Comman3:Comman[];
  Comman4:Comman[];
  Comman5:Comman[];
  Comman6:Comman[];
  Comman7:Comman[];

  dpdcc;
  dpdIDITl;
  dpdPcid;
  dpdoh;
  dpdProgAssociateIDI;
  dpdHardwareTl1;
  dpdHardwareengineer1;
  dpdPlacementCordi;

  office:Office[];
  employeeId:string;
  Userrole;
  pgname;
  finyear;
  constructor( private service: CenterService, private jankariservice: MasterServiceService,private toastr: ToastrService
,    private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {

  this.UserId = localStorage.getItem("UserId");
  this.Userrole = localStorage.getItem("role");
    this.centid = route.snapshot.params["id"];

    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })


    
  

    this.service.GetCenterDetails(this.centid).subscribe(data => {

        this.centedetail = data;

        console.log("xyz"+data);
    }
    );

  
    this.pageload();

  
    service.GetStateList().subscribe((data:any)=>{this.state=data;})
    service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
    service.GetCityList().subscribe((data:any)=>{this.city=data;})
  
    }
    pageload()
    {
       


      if(this.Userrole=="R5" )
      {
        this.service.FillEmpByDepDes("desname='Community Connector' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
          this.dpdcc=data;
        });
  
        this.service.FillEmpByDepDes("desname='Program Fellow' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
          this.dpdIDITl=data;
        });
  
        this.service.FillEmpByDepDes("desname='Program Co-Ordinator' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
          this.dpdPcid=data;
        });
       
      
        this.service.FillEmpByDepDes( "desname='Operation Head' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
          this.dpdoh=data;
        });
  
        this.service.FillEmpByDepDes("desname in ('Program Associate') and  Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
          this.dpdProgAssociateIDI=data;
        });
  
        this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
          this.dpdHardwareTl1=data;
        });
  
        this.service.FillEmpByDepDes("depname='Hardware' and desname in('Hardware Engineer','Team Leader','Manager','Jr. Hardware Engineer','Sr. Hardware Engineer') and employee.status='0'").subscribe((data:any)=>{
          this.dpdHardwareengineer1=data;
        });
  
    
  
        this.service.FillEmpByDepDes("desname='Placement Coordinator' or desname='Placement Executive' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
          this.dpdPlacementCordi=data;
        });
    
    }
    else if(this.Userrole=="R6" ) {
      this.service.FillEmpByDepDes("desname='Community Connector' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdcc=data;
      });

      this.service.FillEmpByDepDes("desname='Program Fellow' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdIDITl=data;
      });

      this.service.FillEmpByDepDes("desname='Program Co-Ordinator' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdPcid=data;
      });
     
    
      this.service.FillEmpByDepDes( "desname='Operation Head' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdoh=data;
      });

      this.service.FillEmpByDepDes("desname in ('Program Associate') and  Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdProgAssociateIDI=data;
      });

      this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
        this.dpdHardwareTl1=data;
      });

      this.service.FillEmpByDepDes("depname='Hardware' and desname in('Hardware Engineer','Team Leader','Manager','Jr. Hardware Engineer','Sr. Hardware Engineer') and employee.status='0'").subscribe((data:any)=>{
        this.dpdHardwareengineer1=data;
      });

  

      this.service.FillEmpByDepDes("desname='Placement Coordinator' or desname='Placement Executive' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdPlacementCordi=data;
      });
    
    }

    else if(this.Userrole=="R19" ) {

      this.service.FillEmpByDepDes("desname='Community Connector' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdcc=data;
      });

      this.service.FillEmpByDepDes("desname='Program Fellow' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdIDITl=data;
      });

      this.service.FillEmpByDepDes("desname='Program Co-Ordinator' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdPcid=data;
      });
     
    
      this.service.FillEmpByDepDes( "desname='Operation Head' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdoh=data;
      });

      this.service.FillEmpByDepDes("desname in ('Program Associate') and  Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdProgAssociateIDI=data;
      });

      this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
        this.dpdHardwareTl1=data;
      });

      this.service.FillEmpByDepDes("depname='Hardware' and desname in('Hardware Engineer','Team Leader','Manager','Jr. Hardware Engineer','Sr. Hardware Engineer') and employee.status='0'").subscribe((data:any)=>{
        this.dpdHardwareengineer1=data;
      });

  

      this.service.FillEmpByDepDes("desname='Placement Coordinator' or desname='Placement Executive' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdPlacementCordi=data;
      });

    }

    else {
      this.service.FillEmpByDepDes("desname='Community Connector' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdcc=data;
      });

      this.service.FillEmpByDepDes("desname='Program Fellow' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdIDITl=data;
      });

      this.service.FillEmpByDepDes("desname='Program Co-Ordinator' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdPcid=data;
      });
     
    
      this.service.FillEmpByDepDes( "desname='Operation Head' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdoh=data;
      });

      this.service.FillEmpByDepDes("desname in ('Program Associate') and  Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdProgAssociateIDI=data;
      });

      this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
        this.dpdHardwareTl1=data;
      });

      this.service.FillEmpByDepDes("depname='Hardware' and desname in('Hardware Engineer','Team Leader','Manager','Jr. Hardware Engineer','Sr. Hardware Engineer') and employee.status='0'").subscribe((data:any)=>{
        this.dpdHardwareengineer1=data;
      });

  

      this.service.FillEmpByDepDes("desname='Placement Coordinator' or desname='Placement Executive' and Employee.status='0' and EmployeeProgram.pgid='P6'").subscribe((data:any)=>{
        this.dpdPlacementCordi=data;
      });
    
    }
   
  }



Addcenter() {

    this.pgid = localStorage.getItem("pgid");
    //this.centerid = localStorage.getItem("centerid");
    
    if (this.data == undefined) {
        console.log("add");
        const data: Addcentercontact = new Addcentercontact();
          data.contactno = this.CenterForm.value.contactno;
          data.centeremail = this.CenterForm.value.centeremail;
          data.state = this.CenterForm.value.state;
          data.district = this.CenterForm.value.district;
          data.city = this.CenterForm.value.city;
          data.address = this.CenterForm.value.address;
          data.pinno = this.CenterForm.value.pinno;
          data.teamleaderid = this.CenterForm.value.teamleaderid;
          data.iditeamleaderid = this.CenterForm.value.iditeamleaderid;
          data.pcid = this.CenterForm.value.pcid;
          data.ohid = this.CenterForm.value.ohid;
          data.progassociate = this.CenterForm.value.progassociate;
          data.eteamleaderid = this.CenterForm.value.eteamleaderid;
          data.engid = this.CenterForm.value.engid;
          data.placcoordinatorid = this.CenterForm.value.placcoordinatorid;
          data.laptoptarget = this.CenterForm.value.laptoptarget;
 
  
  
  console.log(data);
  this.service.AddCenterContactInfo(this.centid,this.UserId,data).subscribe((res) => {
    
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
  
   this.router.navigate(['/IDICenterInfraDetails',this.centid]);
    
    
    
    }

    ,
    error => {
    console.log(error);
    }
    );
    }
    // else {
    //   console.log("update");
    //   const data: Addcentertype = new Addcentertype();
    //   data.centertype1 = this.centerForm.value.centertype1;
    //   data.stdt = this.centerForm.value.stdt;
    //   data.endt = this.centerForm.value.endt;
     
    //   console.log(data);
    //   this.service.UpdateCenterType(this.dataId,data).subscribe((res) => {
    //   console.log(res);
    //   this.submited.emit(res.toString());
    //   localStorage.setItem('empid', res.toString());
    //   alert("Update SuccessFully");
    //   this.router.navigate(['/EmployeeDetails', this.dataId]);
      
      
      
    //   },
    //   error => {
    //   console.log(error);
    //   }
    //   );

    //   }
     
}

    ngOnInit() {
  


      this.pageload();
      this.CenterForm = this.fb.group({
      
    
      contactno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      centeremail:  ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]], 
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      address:['', Validators.required],
      pinno: ['', [ Validators.required,Validators.minLength(6), Validators.maxLength(6),Validators.pattern('[0-9]*')]],
      teamleaderid:['', Validators.required], 
      iditeamleaderid:['', Validators.required], 
      pcid :['', Validators.required],
      ohid :['', Validators.required],
      progassociate:['', Validators.required], 
      eteamleaderid:['', Validators.required], 
      engid:['', Validators.required], 
      placcoordinatorid:['', Validators.required],
      laptoptarget:['', Validators.required],  
     
     
      });
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
 
          Skip(){
            this.router.navigate(['/IDICenterInfraDetails', this.centid]);
          }

          Back(){
          
            this.router.navigate(['/IDICenterDetails', this.centid]);
          }

}
