import { Component, OnInit ,EventEmitter} from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterServiceService } from '../shared/services/master-service.service';
import { Organisation } from '../ClassFiles/organisation';
import { City } from '../ClassFiles/city';
import { State } from '../ClassFiles/state';
import { Distirct } from '../ClassFiles/distirct';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    orgForm: FormGroup;
    Organisation:Organisation[];
    city:City[];
    state:State[];
    distirct:Distirct[];
    url: string;
    submited = new EventEmitter<string>();
     model = new Organisation('','','','','','',null,'','','','',0,'','','',);
    constructor(private toastr: ToastrService,private service: MasterServiceService,private fb: FormBuilder, private router: Router) {
        this.service = service;
        service.GetStateList().subscribe((data:any)=>{this.state=data;})
        service.GetCityList().subscribe((data:any)=>{this.city=data;})
        service.GetDistrictList().subscribe((data:any)=>{this.distirct=data;})

    }

    ngOnInit() {
        this.orgForm = this.fb.group({
            ogname: ['', Validators.required],
            ogcontactperson:['', Validators.required],
            ogcontact:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
            ogemail:['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            ogusername:['', Validators.required],
            ogpassword:['', Validators.required],
            registerdate:[''],
            address:[''],
            state:['', Validators.required],
            district:['', Validators.required],
            city:['', Validators.required],
            pincode:['', [Validators.required, Validators.minLength(6), Validators.maxLength(6),Validators.pattern('[0-9]*')]],
            logo:[''],
            theme:[''],
            status :[''],
            
            });
    }
     onSelectState(stname) {
      if (stname == "")
        this.distirct = null;
      else
        this.service.GetStatewiseDistrictList(stname).subscribe(
          data => {
            this.distirct = data;
          
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

    AddOrganisation() {
        const Org: Organisation = new Organisation();
        Org.ogname = this.orgForm.value.ogname;
        Org.ogcontactperson = this.orgForm.value.ogcontactperson;
        Org.ogcontact = this.orgForm.value.ogcontact;
        Org.ogemail = this.orgForm.value.ogemail;
        Org.ogusername = this.orgForm.value.ogusername;
        Org.ogpassword = this.orgForm.value.ogpassword;
        Org.registerdate = this.orgForm.value.registerdate;
        Org.address = this.orgForm.value.address;
       
        Org.state = this.orgForm.value.state;
        Org.district = this.orgForm.value.district;
        Org.city = this.orgForm.value.city;
        Org.pincode = this.orgForm.value.pincode;
        Org.logo = this.orgForm.value.logo;
        Org.theme = this.orgForm.value.theme;
        Org.status = this.orgForm.value.status;
    
        
        console.log(Org);
        this.service.InsertOrgnization(Org).subscribe((res) => {
          console.log(res);
          this.submited.emit(res.toString());
                localStorage.setItem('OGID', res.toString());
                console.log(res.toString());
                this.toastr.success("Added SuccessFully");
            this.router.navigate(['/login']);
        },
          error => {
            console.log(error);
          }
        );
        }
}
