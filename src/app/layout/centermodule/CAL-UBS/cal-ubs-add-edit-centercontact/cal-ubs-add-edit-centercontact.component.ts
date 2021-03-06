import { Component, OnInit,EventEmitter } from '@angular/core';
import { Employee } from 'src/app/ClassFiles/employee';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { ToastrService } from 'ngx-toastr';
import { Office } from 'src/app/ClassFiles/office';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { Comman } from 'src/app/ClassFiles/comman';
import { Addcenter } from 'src/app/ClassFiles/addcenter';
import { CenterService } from 'src/app/shared/services/center.service';
import { Addcentercontact } from 'src/app/ClassFiles/addcentercontact';
import { UbsInfo } from 'src/app/ClassFiles/ubs-info';
@Component({
  selector: 'app-cal-ubs-add-edit-centercontact',
  templateUrl: './cal-ubs-add-edit-centercontact.component.html',
  styleUrls: ['./cal-ubs-add-edit-centercontact.component.scss']
})
export class CalUbsAddEditCentercontactComponent implements OnInit {


  centedetail:Addcentercontact;
  ubsForm:FormGroup;
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
  office:Office[];
  employeeId:string;
  Userrole;
  pgname;
  finyear;
  total: number
  input1: number = 0
  input2: number = 0
  dies: any;
  UBSInfo
  sum () {

    console.log(this.input1 );
    console.log(this.input2 );
    this.total = this.input1 + this.input2 ;
    console.log(this.total);
  }
  constructor( private service: CenterService,private toastr: ToastrService,private jankariservice: MasterServiceService
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
    service.GetCenterUBSInfoList(this.centid).subscribe((data:any)=>{this.UBSInfo=data;
    
    console.log(this.UBSInfo)
  })
    }
  


    pageload()
    {
       


      if(this.Userrole=="R5" )
      {
        this.service.FillEmpByDepDes("Employee.status='0' and (EmployeeProgram.desid='D25' or EmployeeProgram.desid='D4') and EmployeeProgram.pgid in('P1','P2')").subscribe((data:any)=>{
          this.Comman=data;
        
          console.log(this.Comman);
        });
  
         this.service.FillEmpByDepDes("desname='Program Co-Ordinator' and Employee.status='0' and Department.pgid in('P1','P2')").subscribe((data:any)=>{
            this.Comman1=data;
          });
        
            this.service.FillEmpByDepDes("desname='Operation Head' and Employee.status='0' and Department.pgid in('P1','P2')").subscribe((data:any)=>{
              this.Comman2=data;
             });
             this.service.FillEmpByDepDes("desname in ('Program Associate','Research Associate')and  Employee.status='0'").subscribe((data:any)=>{
              this.Comman3=data;
             });
             this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
              this.Comman4=data;
             });
  
             this.service.FillEmpByDepDes("depname='Hardware' and desname in('Hardware Engineer','Team Leader','Manager','Jr. Hardware Engineer','Sr. Hardware Engineer') and employee.status='0'").subscribe((data:any)=>{
              this.Comman5=data;
             });
    
    }
    else if(this.Userrole=="R6" ) {
      this.service.FillEmpByDepDes("Employee.status='0' and (EmployeeProgram.desid='D25' or EmployeeProgram.desid='D4') and EmployeeProgram.pgid in('P1','P2')").subscribe((data:any)=>{
        this.Comman=data;
      
        console.log(this.Comman);
      });

       this.service.FillEmpByDepDes("desname='Program Co-Ordinator' and Employee.status='0' and Department.pgid in('P1','P2')").subscribe((data:any)=>{
          this.Comman1=data;
        });
      
          this.service.FillEmpByDepDes("desname='Operation Head' and Employee.status='0' and Department.pgid in('P1','P2')").subscribe((data:any)=>{
            this.Comman2=data;
           });
           this.service.FillEmpByDepDes("desname in ('Program Associate','Research Associate')and  Employee.status='0'").subscribe((data:any)=>{
            this.Comman3=data;
           });
           this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
            this.Comman4=data;
           });

           this.service.FillEmpByDepDes("depname='Hardware' and desname in('Hardware Engineer','Team Leader','Manager','Jr. Hardware Engineer','Sr. Hardware Engineer') and employee.status='0'").subscribe((data:any)=>{
            this.Comman5=data;
           });
      // this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.state=data;})
     
      // this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.city=data;})
      // this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid ").subscribe((data:any)=>{this.ProgramList=data;})
      
      // this.service.FillDropDown("EmployeeProgram","distinct Designation.desname","EmployeeProgram.desid","inner join Designation on Employeeprogram.desid=Designation.desid   ").subscribe((data:any)=>{this.Designationlist=data;})
    
    
    }
    else {
      this.service.FillEmpByDepDes("Employee.status='0' and (EmployeeProgram.desid='D25' or EmployeeProgram.desid='D4') and EmployeeProgram.pgid in('P1','P2')").subscribe((data:any)=>{
        this.Comman=data;
      
        console.log(this.Comman);
      });

       this.service.FillEmpByDepDes("desname='Program Co-Ordinator' and Employee.status='0' and Department.pgid in('P1','P2')").subscribe((data:any)=>{
          this.Comman1=data;
        });
      
          this.service.FillEmpByDepDes("desname='Operation Head' and Employee.status='0' and Department.pgid in('P1','P2')").subscribe((data:any)=>{
            this.Comman2=data;
           });
           this.service.FillEmpByDepDes("desname in ('Program Associate','Research Associate')and  Employee.status='0'").subscribe((data:any)=>{
            this.Comman3=data;
           });
           this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
            this.Comman4=data;
           });

           this.service.FillEmpByDepDes("depname='Hardware' and desname in('Hardware Engineer','Team Leader','Manager','Jr. Hardware Engineer','Sr. Hardware Engineer') and employee.status='0'").subscribe((data:any)=>{
            this.Comman5=data;
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
          data.pcid = this.CenterForm.value.pcid;
          data.ohid = this.CenterForm.value.ohid;
          data.progassociate = this.CenterForm.value.progassociate;
          data.eteamleaderid = this.CenterForm.value.eteamleaderid;
          data.engid = this.CenterForm.value.engid;
          data.centbillapplicable = this.CenterForm.value.centbillapplicable;

        
         
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
  
    
    }
    ,
    error => {
    console.log(error);
    }
    );

    const data1: UbsInfo = new UbsInfo();

   data1.disecode =this.CenterForm.value.disecode;
    data1.noofclient = this.input1;
    data1.noofservers =  this.input2;
    data1.total = this.total;
   
    console.log(data1);
    this.service.AddCenterUBSInfo(this.centid,this.UserId,data1).subscribe((res) => {
      console.log(res);
      
      localStorage.setItem('Cnid', res.toString());
    
    
      this.router.navigate(['/CAL-UBS-Add-Update-CenterType',this.centid]);

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
        centeremail:  ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]], 
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      address:['', Validators.required],
      pinno: ['', [ Validators.required,Validators.minLength(6), Validators.maxLength(6),Validators.pattern('[0-9]*')]],
      teamleaderid:['', Validators.required],
      pcid:['', Validators.required],
      ohid :['', Validators.required],
      progassociate:['', Validators.required], 
      eteamleaderid:['', Validators.required], 
      engid:['', Validators.required],  
      centbillapplicable:['', Validators.required],  
      disecode: [''],
     
      });



      this.ubsForm = this.fb.group({
      
    
        disecode: ['', Validators.required],
        noofclient: ['', Validators.required],
        noofservers: ['', Validators.required],
     
     
     
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
            this.router.navigate(['/CAL-UBS-Add-Update-CenterType', this.centid]);
          }

          Back(){
            this.router.navigate(['/CAL-UBS-CenterDetail', this.centid]);
          }

         

}
