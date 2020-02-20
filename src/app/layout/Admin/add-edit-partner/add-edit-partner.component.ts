import { Component, OnInit,EventEmitter } from '@angular/core';
import { Partner } from 'src/app/ClassFiles/partner';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { City } from 'src/app/ClassFiles/city';
import { Office } from 'src/app/ClassFiles/office';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-partner',
  templateUrl: './add-edit-partner.component.html',
  styleUrls: ['./add-edit-partner.component.scss']
})
export class AddEditPartnerComponent implements OnInit {

  
  PartnerForm: FormGroup;
  submited = new EventEmitter<string>();
  model = new Partner('','','','','','','','','',);
  Distirct:Distirct[];
   state:State[];
   city:City[];
   office: Office[];
   url: string;
   UserId :string;
   OrgnizationList: OrgnizationList[];
   Partner:Partner[];
   Partnerlist:Partner[];
   aid : string;
   partnerId:string;
  constructor(private service: MasterServiceService,private toastr: ToastrService
,    private router: Router,private fb: FormBuilder, private route: ActivatedRoute ) {
    this.service = service;
   
    console.log( this.UserId);
  
    service.GetStateList().subscribe((data:any)=>{this.state=data;})
    service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
    service.GetCityList().subscribe((data:any)=>{this.city=data;})
    service.OrganizationList().subscribe((data: any) => { this.OrgnizationList= data;})
    service.GetPartnerlist("").subscribe((data: any) => { this.Partnerlist= data;
    
    console.log(data);
    })
    this.partnerId = route.snapshot.params["id"];


  if (this.partnerId != undefined) {

    this.service.GetPartnerDetails(this.partnerId).subscribe(data => {
        this.Partner =data[0];
        console.log(data);
    }
    );
}
  }
  
  ngOnInit() {
    this.PartnerForm = this.fb.group({
           
      partnername: ['', Validators.required],
      company: ['', Validators.required],
      contactpersonname: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      address: [''],
      phoneno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
  
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
    if (dtname  == "")
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
  
  AddPartner() {  
    if (this.Partner == undefined){
    
    const partner: Partner = new Partner();
    partner.partnername = this.PartnerForm.value.partnername;
    partner.company = this.PartnerForm.value.company;
    partner.contactpersonname = this.PartnerForm.value.contactpersonname;
    partner.state = this.PartnerForm.value.state;
    partner.district = this.PartnerForm.value.district;
    partner.city = this.PartnerForm.value.city;
    partner.address = this.PartnerForm.value.address;
    partner.phoneno = this.PartnerForm.value.phoneno;
    partner.createdby = this.UserId;
     
        this.service.InsertPartner(partner).subscribe((res) => {
        
          this.submited.emit(res.toString());
          console.log(res.toString());
          if (res.toString() === "Exists")
          {
          this.toastr.error ("Partner Already Exists");
          }
         else 
          {
            this.toastr.success ("Added SuccessFully");
          }
          localStorage.setItem('partnerid', res.toString());
         

               this.router.navigate(['/PartnerList']);
            
              },
          error => {
            console.log(error);
          }      );
        }
        else{
          const partner: Partner = new Partner();
    partner.partnername = this.PartnerForm.value.partnername;
    partner.company = this.PartnerForm.value.company;
    partner.contactpersonname = this.PartnerForm.value.contactpersonname;
    partner.state = this.PartnerForm.value.state;
    partner.district = this.PartnerForm.value.district;
    partner.city = this.PartnerForm.value.city;
    partner.address = this.PartnerForm.value.address;
    partner.phoneno = this.PartnerForm.value.phoneno;
    partner.createdby = this.UserId;
     
        this.service.UpdatePartner(this.partnerId,partner).subscribe((res) => {
        
          this.submited.emit(res.toString());
          console.log(res.toString());
          localStorage.setItem('partnerid', res.toString());
          this.toastr.info ("Update SuccessFully");               this.router.navigate(['/PartnerDetail', this.partnerId]);
              //  this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
              // this.router.navigate(['/DesignationList'])); 
              // this.service.GetPartnerlist("").subscribe((data: any) => { this.Partner= data;})
              
              },
          error => {
            console.log(error);
          }      );
        }
        }
}
