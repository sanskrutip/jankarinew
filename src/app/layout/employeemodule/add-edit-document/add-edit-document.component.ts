import { Component,EventEmitter ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { ToastrService } from 'ngx-toastr';
import { Empdocument } from 'src/app/ClassFiles/empdocument';

@Component({
  selector: 'app-add-edit-document',
  templateUrl: './add-edit-document.component.html',
  styleUrls: ['./add-edit-document.component.scss']
})
export class AddEditDocumentComponent implements OnInit  {
  employeeId : string;
  docform: FormGroup;
  ordersData = [];
abc:boolean;
submited = new EventEmitter<string>();
selectedOption: string;
printedOption: string;
model = new Empdocument('','',false,false,false,false,false,false,);
selected: boolean;
Empdocument:Empdocument[];
al = false;
jd = false;
icc = false;
sd = false;
ss = false;
cp = false;
year;
checked = false;
indeterminate = false;
doccount:string;
pgname;
finyear
  constructor(private formBuilder: FormBuilder, private router: Router,private fb: FormBuilder,private toastr: ToastrService,private route: ActivatedRoute,private service: MasterServiceService) {
    this.service = service;
    this.employeeId = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");

    service.GetEmployeeDocument(this.employeeId).subscribe((data: any) => {
      this.Empdocument = data;
      console.log(this.Empdocument)
      
    });
    service.GetEmployeeDocument(this.employeeId).subscribe((data: any) => {  this.doccount= data.length;})
    service.FillDropDown("FinanacialYear","FinanacialYear.yearname","FinanacialYear.yearname","where status=0").subscribe((data: any) => {
      this.year = data;
      console.log(this.Empdocument)
      
    });
    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

  }


  ngOnInit() {
    this.docform = this.fb.group({
      year: ['', Validators.required],
      al: [''],
      jd: [''],
      icc: [''],
      sd: [''],
      ss: [''],
      cp: [''],
    });
  }
  

  Back(){
    this.router.navigate(['/EmployeeDetails', this.employeeId]);
  }


  
  submit() { 
    const empdoc: Empdocument = new Empdocument();
    // empdoc.al = this.al
    // empdoc.jd = this.jd
    // empdoc.icc = this.icc
    // empdoc.sd = this.sd
    // empdoc.ss = this.ss
    // empdoc.cp = this.cp
    empdoc.al = this.docform.value.al;
    empdoc.jd = this.docform.value.jd;
    empdoc.icc = this.docform.value.icc;
    empdoc.sd = this.docform.value.sd;
    empdoc.ss = this.docform.value.ss;
    empdoc.cp = this.docform.value.cp;

    
      
      
    console.log(empdoc);
    this.service.InsertEmployeeDocument(this.employeeId,this.selectedOption,empdoc).subscribe((res) => {
      
      this.submited.emit(res.toString());
      console.log(res.toString());
    
      this.toastr.success ("Added SuccessFully");
      this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
      this.router.navigate(['/EditEmployeeDocument',this.employeeId]));
      },
      error => {
      console.log(error);
      } );
  }
  Delete(fineyear)
            {
        
        this.service.RemoveEmployeeDocument(this.employeeId,fineyear).subscribe((res) => {
          this.submited.emit(res.toString());
          
              this.toastr.error("Removed SuccessFully");
          
         this.service.GetEmployeeDocument(this.employeeId).subscribe((data: any) => { this.Empdocument = data });
          this.service.GetEmployeeDocument(this.employeeId).subscribe((data: any) => {  this.doccount= data.length;})
              },
          error => {
            console.log(error);
          }
        );
            }
 
 

  doSomething(){
    console.log(this.selectedOption)
  }

 
}
