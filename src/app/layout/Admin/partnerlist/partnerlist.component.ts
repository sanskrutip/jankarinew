import { Component, OnInit ,EventEmitter} from '@angular/core';
import { Partner } from 'src/app/ClassFiles/partner';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { City } from 'src/app/ClassFiles/city';
import { Office } from 'src/app/ClassFiles/office';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';

@Component({
  selector: 'app-partnerlist',
  templateUrl: './partnerlist.component.html',
  styleUrls: ['./partnerlist.component.scss']
})
export class PartnerlistComponent implements OnInit {

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
   count:Partner[];
   aid : string;
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder, private route: ActivatedRoute ) {
    this.service = service;
    this.UserId = localStorage.getItem("UserId");
    console.log( this.UserId);
  
    service.GetStateList().subscribe((data:any)=>{this.state=data;})
    service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
    service.GetCityList().subscribe((data:any)=>{this.city=data;})
    service.OrganizationList().subscribe((data: any) => { this.OrgnizationList= data;})
    service.GetPartnerlist("").subscribe((data: any) => { this.Partner= data;
    
    console.log(data);
    })
    this.service.GetPartnerlist("").subscribe((data: any) => {
      this.count = data.length;
      console.log(   this.count );
      
    })
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
          localStorage.setItem('partnerid', res.toString());
               alert("Added SuccessFully");
               this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
              this.router.navigate(['/DesignationList'])); 
              this.service.GetPartnerlist("").subscribe((data: any) => { this.Partner= data;})
              
              },
          error => {
            console.log(error);
          }      );
        }

}
