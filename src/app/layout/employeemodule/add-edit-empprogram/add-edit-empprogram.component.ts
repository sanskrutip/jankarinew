import { Component, OnInit,EventEmitter } from '@angular/core';

import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Financialyear } from 'src/app/ClassFiles/financialyear';
import { Employee } from 'src/app/ClassFiles/employee';
import { EmployeeProgram } from 'src/app/ClassFiles/employee-program';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-empprogram',
  templateUrl: './add-edit-empprogram.component.html',
  styleUrls: ['./add-edit-empprogram.component.scss']
})
export class AddEditEmpprogramComponent implements OnInit {
  EmpProgramForm: FormGroup;
  EmpQualificationForm:FormGroup;
  EmpReferenceForm:FormGroup;
  closeResult: string;
  submited = new EventEmitter<string>();
  model = new EmployeeProgram('','','','','','',);
  
  employeeId : string;
  ProgramList:ProgramList[];
  Departmentlist:Departmentlist[];
  Designationlist:Designationlist[];
  employee:Employee[];
  Financialyear:Financialyear[];
  EmployeeProgram:EmployeeProgram[];
  year;
  url:string;
  pgname;
  finyear;
  constructor(private service: MasterServiceService,private toastr: ToastrService, private modalService: NgbModal,
    private router: Router,private fb: FormBuilder, private route: ActivatedRoute ) {
  this.service = service;
  this.employeeId = route.snapshot.params["id"];
  this.pgname = localStorage.getItem("pgname");

  service.FillDropDown("FinanacialYear","FinanacialYear.yearname","FinanacialYear.yearname","where status=0").subscribe((data: any) => {
    this.year = data;

    
  });
  this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
    this.finyear= data;
   
  })

  service.GetProgramlist("").subscribe((data: any) => { 
  this.ProgramList= data;
  console.log(data);
  })
  // service.GetDepartmentlist("").subscribe((data: any) => { 
  // this.Departmentlist= data;
  // console.log( this.Departmentlist);
  // })
  // service.FillDropDown("Department","distinct Department.depname","Department.depid","").subscribe((data: any) => {
  //   this.Departmentlist = data;

    
  // });
  // service.GetDesignationtList("").subscribe((data: any) => { 
  // this.Designationlist= data;
  // console.log( this.Designationlist);
  // })

   
  // service.FillDropDown("Designation","distinct Designation.desname","Designation.desid","").subscribe((data: any) => {
  //   this.Designationlist = data;

    
  // });
  // service.EmployeeNameList().subscribe((data:any)=>{this.employee=data;
  // console.log(data);
  // })
  service.GetEmployeeProgram(this.employeeId).subscribe((data:any)=>{this.EmployeeProgram=data;
  console.log(data);
  })
  
  }
  
  ngOnInit() {
    
  this.EmpProgramForm = this.fb.group({
  
    finyear: ['', Validators.required],
    pgid: ['', Validators.required],
    depid: ['', Validators.required],
    desid: ['', Validators.required],
    
    reportto: ['', Validators.required],
    
    
    });
  }
  onSelectProgram(pgid) {
    console.log(pgid);
    if (pgid == "")
    this.Departmentlist = null;
    else
    // this.service.ProgramwiseDepartmentList(pgid).subscribe(
    // data => {
    
    // this.Departmentlist = data;
    
    // }
    
    // );

    this.service.FillDropDown("Department","distinct Department.depname","Department.depid","where pgid='"+pgid+"'").subscribe((data: any) => {
      this.Departmentlist = data;
  
      
    });

    } 
    
    onSelectDepartment(depid) {
    if (depid == "")
    this.Designationlist = null;
    else
    this.service.FillDropDown("Designation","distinct Designation.desname","Designation.desid"," where depid='"+depid+"'").subscribe((data: any) => {
      this.Designationlist = data;
  
      
    });
    }
    

    onSelectDesignation(desid) {
      if (desid == "")
      this.employee = null;
      else
      this.service.FillDropDown("Employee","distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid","inner join EmployeeProgram on  EmployeeProgram.empid=Employee.empid  where EmployeeProgram.desid='"+desid+"' order by Employee.firstname%2B' '%2BEmployee.lastname ").subscribe((data: any) => {
        this.employee = data;
    
        
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
    AddEmpProgram() { 
  
  
      const Empprogram: EmployeeProgram = new EmployeeProgram();
      Empprogram.empid =this.employeeId;
      Empprogram.finyear = this.EmpProgramForm.value.finyear;
      Empprogram.pgid = this.EmpProgramForm.value.pgid;
      Empprogram.depid = this.EmpProgramForm.value.depid;
      Empprogram.desid = this.EmpProgramForm.value.desid;
      Empprogram.reportto = this.EmpProgramForm.value.reportto;
      // partner.createdby = this.UserId;
      console.log(Empprogram);
      this.service.InsertEmployeeProgram(Empprogram).subscribe((res) => {
      
      this.submited.emit(res.toString());
      console.log(res.toString());
      localStorage.setItem('efid', res.toString());
      this.toastr.success ("Added SuccessFully");

      // this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=> 
      // this.router.navigate(['/EditEmployeeProgram', this.employeeId]));
      // this.service.GetEmployeeProgram(this.employeeId).subscribe((data:any)=>{this.EmployeeProgram=data; })
      if(this.employee !== undefined)
      {
        this.router.navigate(['/EditEmployeeQulification', this.employeeId]);
      }
      else{
        this.router.navigate(['/EmployeeDetails', this.employeeId]);
      }
      },
      error => {
      console.log(error);
      } );
      }
      Delete(efid)
      {
      console.log(efid);
      this.service.RemoveEmployeeProgram(efid).subscribe((res) => {
      this.submited.emit(res.toString());
      this.toastr.error("Removed SuccessFully");
      this.service.GetEmployeeProgram(this.employeeId).subscribe((data:any)=>{this.EmployeeProgram=data; })
      
      error => {
      console.log(error);
      }
      
      });
      }
      Skip(){
        this.router.navigate(['/EditEmployeeQulification', this.employeeId]);
      }

      Back(){
        this.router.navigate(['/EmployeeDetails', this.employeeId]);
      }
      open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
          return  `with: ${reason}`;
        }
      
      }
      

}
