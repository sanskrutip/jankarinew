// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-program',
//   templateUrl: './program.component.html',
//   styleUrls: ['./program.component.scss']
// })
// export class ProgramComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, EventEmitter,Input,HostListener  } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { Menu } from 'src/app/ClassFiles/menu';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  closeResult: string;
  ProgramForm: FormGroup;
  OrgnizationList: OrgnizationList[];
  ProgramList:ProgramList[];
  pgcount:string;
  submited = new EventEmitter<string>();
  model = new ProgramList('','',);
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {
   
    this.service = service;
  
    service.OrganizationList().subscribe((data: any) => { 
      
      this.OrgnizationList= data;
   console.log(this.OrgnizationList);
    })

 service.GetProgramlist(" where Organization.ogid='OG1'").subscribe((data: any) => { 
     this.ProgramList= data;})


     service.GetProgramlist("where Organization.ogid='OG1' ").subscribe((data: any) => { 
      this.pgcount= data.length;})
      
   }

  ngOnInit() {
    this.ProgramForm = this.fb.group({
      ogid: ['', Validators.required],
      pgname: ['', Validators.required],
    });
  }
  AddProgram() {
    const program: ProgramList = new ProgramList();
    console.log(program);
    program.ogid = this.ProgramForm.value.ogid;
    program.pgname = this.ProgramForm.value.pgname;
    this.service.InsertProgram(program).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      if (res.toString() === "Exists")
      {
      this.toastr.error ("Program Already Exists");
      }
     else 
      {
        this.toastr.success ("Added SuccessFully");
      }
      localStorage.setItem('pgid', res.toString());
                
      this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/ProgramList'])); 
           this.service.GetProgramlist("where Organization.ogid='OG1'").subscribe((data: any) => { 
            this.ProgramList= data;})
            this.service.GetProgramlist("where Organization.ogid='OG1'").subscribe((data: any) => { 
              this.pgcount= data.length;})
            // this.ProgramList.resetForm();
    },
      error => {
        console.log(error);
      }
   );
    }

    Delete(pgid)
    {
console.log(pgid);
this.service.RemoveProgram(pgid).subscribe((res) => {
  this.submited.emit(res.toString());
  this.toastr.error("Removed SuccessFully");   
      this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/ProgramList']));

       this.service.GetProgramlist("").subscribe((data: any) => { 
        this.ProgramList= data;})
        this.service.GetProgramlist("").subscribe((data: any) => { 
          this.pgcount= data.length;})
      },
  error => {
    console.log(error);
  }
);
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
