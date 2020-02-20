import { Component, OnInit, EventEmitter } from '@angular/core';
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
  selector: 'app-add-edit-empsalary',
  templateUrl: './add-edit-empsalary.component.html',
  styleUrls: ['./add-edit-empsalary.component.scss']
})
export class AddEditEmpsalaryComponent implements OnInit {
  employeeForm: FormGroup;
  UserId: string;
  url: string
  employee: Employee[];
  employeename: Employee[];
  submited = new EventEmitter<string>();
  model = new Employee('', '', '', '', '', '', '', null, null, '', '', '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0);
  state: State[];
  Distirct: Distirct[];
  city: City[];
  office: Office[];
  employeeId: string;
  finyear;
  pgname
  constructor(private service: MasterServiceService,private toastr: ToastrService,private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.service = service;
    this.employeeId = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    // if (this.employeeId != undefined) {

      this.service.GetEmployeeDetails(this.employeeId).subscribe(data => {
        this.employee = data;
        console.log(this.employee);
      }

      );
    // }
    service.EmployeeNameList().subscribe((data: any) => {
    this.employeename = data;

    })

  }


  ngOnInit() {
    this.employeeForm = this.fb.group({
      grosssalary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      salcreator: ['', Validators.required],
      salapproval: ['', Validators.required],
      paytype: ['', Validators.required],
      bankname: ['', Validators.required],
      branch: ['', Validators.required],
      accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      neftcode: ['', Validators.required],
      branchadd: ['', Validators.required],
      empphoto: [''],
      createdby: [''],
      createdon: [''],


    });
  }

  UpdateEmployee() {

    console.log(this.employeeId);
    const employee: Employee = new Employee();

    employee.grosssalary = this.employeeForm.value.grosssalary;
    employee.salcreator = this.employeeForm.value.salcreator;
    employee.salapproval = this.employeeForm.value.salapproval;
    employee.paytype = this.employeeForm.value.paytype;
    employee.bankname = this.employeeForm.value.bankname;
    employee.branch = this.employeeForm.value.branch;
    employee.accno = this.employeeForm.value.accno;
    employee.neftcode = this.employeeForm.value.neftcode;
    employee.branchadd = this.employeeForm.value.branchadd;


    this.service.UpdateEmployee(this.employeeId, employee).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      localStorage.setItem('empid', res.toString());
      this.toastr.info ("Update SuccessFully");
      if(this.employee !== undefined)
      {
        this.router.navigate(['/EditEmployeeProgram', this.employeeId]);
      }
      else{
        this.router.navigate(['/EmployeeDetails', this.employeeId]);
      }
      
      // this.router.navigate(['/EditEmployeeOffice', this.employeeId]);



    },
      error => {
        console.log(error);
      }
    );
  }

  Skip(){
    this.router.navigate(['/EditEmployeeProgram', this.employeeId]);
  }
  Back(){
    this.router.navigate(['/EmployeeDetails', this.employeeId]);
  }
}
