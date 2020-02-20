import { Component, OnInit,EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/ClassFiles/employee';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { City } from 'src/app/ClassFiles/city';
import { Office } from 'src/app/ClassFiles/office';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-empoffice',
  templateUrl: './add-edit-empoffice.component.html',
  styleUrls: ['./add-edit-empoffice.component.scss']
})
export class AddEditEmpofficeComponent implements OnInit {
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
  pgname;
  finyear;
  constructor( private service: MasterServiceService, private toastr: ToastrService,private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
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
    service.GetOfficeList("").subscribe((data: any) => { this.office= data;})
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    }
    

    ngOnInit() {
      this.employeeForm = this.fb.group({
  
      doj:['', Validators.required],
      offemail: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      offid: [''],
      jobsince:['', Validators.required],
      emptype: ['', Validators.required],
      emp_code: ['', Validators.required],
      pifassociate: ['', Validators.required],
      status: ['', Validators.required],
      beneficiaryid:['', [Validators.required, Validators.pattern('[0-9]*')]],
      
      });
      }

      UpdateEmployee() {
 
        console.log( this.employeeId);
        const employee: Employee = new Employee();
        
        employee.offid = this.employeeForm.value.offid;
        employee.emp_code = this.employeeForm.value.emp_code;
        employee.beneficiaryid = this.employeeForm.value.beneficiaryid;
        employee.offemail = this.employeeForm.value.offemail;
        employee.doj = this.employeeForm.value.doj;
        employee.jobsince = this.employeeForm.value.jobsince;
        employee.emptype = this.employeeForm.value.emptype;
        employee.pifassociate = this.employeeForm.value.pifassociate;
        employee.status = this.employeeForm.value.status; 
        

        this.service.UpdateEmployee(this.employeeId,employee).subscribe((res) => {
        console.log(res);
        this.submited.emit(res.toString());
        localStorage.setItem('empid', res.toString());
        this.toastr.info ("Update SuccessFully");
        // this.router.navigate(['/EditEmployeeOffice', this.employeeId]);
        if(this.employee !== undefined)
      {
        this.router.navigate(['/EditEmployeeSalary', this.employeeId]);
      }
      else{
        this.router.navigate(['/EmployeeDetails', this.employeeId]);
      }
        
        
        },
        error => {
        console.log(error);
        }
        );
        }
        Skip(){
          this.router.navigate(['/EditEmployeeSalary', this.employeeId]);
        }
        Back(){
          this.router.navigate(['/EmployeeDetails', this.employeeId]);
        }
}
