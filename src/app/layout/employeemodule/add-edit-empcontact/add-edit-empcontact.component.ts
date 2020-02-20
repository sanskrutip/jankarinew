import { Component, OnInit,EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

import { Employee } from 'src/app/ClassFiles/employee';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { City } from 'src/app/ClassFiles/city';
import { Office } from 'src/app/ClassFiles/office';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-empcontact',
  templateUrl: './add-edit-empcontact.component.html',
  styleUrls: ['./add-edit-empcontact.component.scss']
})
export class AddEditEmpcontactComponent implements OnInit {
  employeeForm:FormGroup;
  UserId:string;
  url:string
  employee:Employee[];
 
  submited = new EventEmitter<string>();
  model = new Employee('','','','','','','',null,null,'','','','','','','','','',0,'','','','','','','',0,'','','','','','','','','','','','','','',0,);
  state:State[];
  Distirct:Distirct[];
  city:City[];
  office:Office[];
  employeeId:string;
  finyear;
  pgname;
  constructor( private service: MasterServiceService,private toastr: ToastrService
,    private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
    this.service = service;
    this.employeeId = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

  
    if (this.employeeId != undefined) {
  
      this.service.GetEmployeeDetails(this.employeeId).subscribe(data => {
          this.employee =data;
      }
      );
  }
  
    service.GetStateList().subscribe((data:any)=>{this.state=data;})
    service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
    service.GetCityList().subscribe((data:any)=>{this.city=data;})
  

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    }
    

    ngOnInit() {
      this.employeeForm = this.fb.group({
      
     
      address: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [ Validators.required,Validators.minLength(6), Validators.maxLength(6),Validators.pattern('[0-9]*')]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      altmobile:['', [ Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    
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
        UpdateEmployee() {
 
          console.log( this.employeeId);
          const employee: Employee = new Employee();
          
          employee.state = this.employeeForm.value.state;
          employee.district = this.employeeForm.value.district;
          employee.city = this.employeeForm.value.city;
          employee.address = this.employeeForm.value.address;
          employee.pincode = this.employeeForm.value.pincode;
          employee.mobile = this.employeeForm.value.mobile;
          employee.altmobile = this.employeeForm.value.altmobile;
          employee.email = this.employeeForm.value.email;
          
          
          
          employee.updatedby = this.UserId;
          
          this.service.UpdateEmployee(this.employeeId,employee).subscribe((res) => {
          console.log(res);
          this.submited.emit(res.toString());
          localStorage.setItem('empid', res.toString());
          this.toastr.success ("Added SuccessFully");

          // this.router.navigate(['/EditEmployeeOffice', this.employeeId]);
          
          if(this.employee !== undefined)
          {
            this.router.navigate(['/EditEmployeeOffice', this.employeeId]);
           
          }
          else
          {
            this.router.navigate(['/EmployeeDetails'  , this.employeeId]);
          }
          
          },
          error => {
          console.log(error);
          }
          );
          }

          Skip(){
            this.router.navigate(['/EditEmployeeOffice', this.employeeId]);
          }
          Back(){
            this.router.navigate(['/EmployeeDetails', this.employeeId]);
          }
}
