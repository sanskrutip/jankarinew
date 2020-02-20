import { Component, OnInit ,EventEmitter} from '@angular/core';

import { State } from 'src/app/ClassFiles/state';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { City } from 'src/app/ClassFiles/city';
import { Office } from 'src/app/ClassFiles/office';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-office',
  templateUrl: './add-edit-office.component.html',
  styleUrls: ['./add-edit-office.component.scss']
})
export class AddEditOfficeComponent implements OnInit {

  OfficeForm: FormGroup;
  submited = new EventEmitter<string>();
  model = new Office('','','','','','','','','','','',);
  Distirct:Distirct[];
   state:State[];
   city:City[];
   office: Office[];
   officelist:Office[];
   url: string;
   OrgnizationList: OrgnizationList[];
   officeId:string;
   message: string; 

  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute,private toastr: ToastrService
    ) {
    this.service = service;
    service.GetStateList().subscribe((data:any)=>{this.state=data;})
    service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
    service.GetCityList().subscribe((data:any)=>{this.city=data;})
    service.OrganizationList().subscribe((data: any) => { this.OrgnizationList= data;})
    service.GetOfficeList("").subscribe((data: any) => { this.officelist= data;
    
    console.log(data);
    })

    this.officeId = route.snapshot.params["id"];


  if (this.officeId != undefined) {

    this.service.GetOfficeDetails(this.officeId).subscribe(data => {
        this.office =data;
        console.log(data);
    }
    );
}
  }
  
  ngOnInit() {
    this.OfficeForm = this.fb.group({
           
      offname: ['', Validators.required],
      ogid: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      offarea: [''],
      pin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6),Validators.pattern('[0-9]*')]],
      contact1: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      contact2: ['', [ Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
  
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
  
  AddOffice() {
    if (this.office == undefined){
    const office: Office = new Office();
        office.offname = this.OfficeForm.value.offname;
        office.ogid = this.OfficeForm.value.ogid;
        office.address = this.OfficeForm.value.address;
        office.state = this.OfficeForm.value.state;
        office.district = this.OfficeForm.value.district;
        office.city = this.OfficeForm.value.city;
        office.offarea = this.OfficeForm.value.offarea;
        office.pin = this.OfficeForm.value.pin;
        office.contact1 = this.OfficeForm.value.contact1;
        office.contact2 = this.OfficeForm.value.contact2;
        console.log(office);
        this.service.InsertOffice(office).subscribe((res) => {
        
          this.submited.emit(res.toString());
          console.log(res.toString());
          if (res.toString() === "Exists")
          {
          this.toastr.error ("Office Already Exists");
          }
         else 
          {
            this.toastr.success ("Added SuccessFully");
          }
          localStorage.setItem('offid', res.toString());
          

this.router.navigate(['/OfficeList'])
              //  this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
              // this.router.navigate(['/Office'])); 
              //  this.service.OfficeList().subscribe((data: any) => { this.office= data;})
              },
          error => {
            console.log(error);
          }
        );
        }
        else{
          const office: Office = new Office();
        office.offname = this.OfficeForm.value.offname;
        office.ogid = this.OfficeForm.value.ogid;
        office.address = this.OfficeForm.value.address;
        office.state = this.OfficeForm.value.state;
        office.district = this.OfficeForm.value.district;
        office.city = this.OfficeForm.value.city;
        office.offarea = this.OfficeForm.value.offarea;
        office.pin = this.OfficeForm.value.pin;
        office.contact1 = this.OfficeForm.value.contact1;
        office.contact2 = this.OfficeForm.value.contact2;
        console.log(office);
        this.service.UpdateOffice(this.officeId,office).subscribe((res) => {
        
          this.submited.emit(res.toString());
          console.log(res.toString());
          localStorage.setItem('offid', res.toString());
          this.toastr.info ("Update SuccessFully");

              
               this.router.navigate(['/OfficeDetail', this.officeId]);
              //  this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
              // this.router.navigate(['/Office'])); 
              //  this.service.OfficeList().subscribe((data: any) => { this.office= data;})
              
              },
          error => {
            console.log(error);
          }
        );
        }
      }
    

        
}
