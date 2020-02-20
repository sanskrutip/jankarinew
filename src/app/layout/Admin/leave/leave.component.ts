import { Component, OnInit ,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Leavecount } from 'src/app/ClassFiles/leavecount';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  closeResult: string;

  LeaveForm: FormGroup;
  leaveCount:Leavecount[];
  submited = new EventEmitter<string>();
  model = new Leavecount('','','',);
  leavecount:string;
  constructor(private service: MasterServiceService,private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {

    this.service = service;
    

    
      service.LeaveCountList().subscribe((data: any) => { 
      this.leaveCount= data;
    console.log( this.leaveCount);
    })
    service.LeaveCountList().subscribe((data: any) => { 
      this.leavecount= data.length;}) 


   }

  ngOnInit() {
    this.LeaveForm = this.fb.group({
      leavetype: ['', Validators.required],
      leavecount1: ['', Validators.required],
    });
  }
  AddLeaveCount() {
    const leave: Leavecount = new Leavecount();
    leave.leavetype = this.LeaveForm.value.leavetype;
    leave.leavecount1 = this.LeaveForm.value.leavecount1;
    this.service.InsertLeaveCount(leave).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      if (res.toString() === "Exists")
      {
      this.toastr.error ("Leave Already Exists");
      }
     else 
      {
        this.toastr.success ("Added SuccessFully");
      }
      localStorage.setItem('lcid', res.toString());

           this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/LeaveCount']));
           this.service.LeaveCountList().subscribe((data: any) => { this.leaveCount= data;})
           this.service.LeaveCountList().subscribe((data: any) => { this.leavecount= data.length;}) 

             },
      error => {
        console.log(error);
      }
    );
    }



Delete(lcid)
{
console.log(lcid);
this.service.RemoveLeaveCount(lcid).subscribe((res) => {
  console.log(res);
this.submited.emit(res.toString());
if (res.toString() === "Exception") {
  this.toastr.error("ABC");
}
else {
  this.toastr.info("Removed SuccessFully");
}   
   this.service.LeaveCountList().subscribe((data: any) => { this.leaveCount= data;})
this.service.LeaveCountList().subscribe((data: any) => { this.leavecount= data.length;}) 
  },
error => {
console.log(error);
}
);
}

open(content) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
    return `with: ${reason}`;
  }

}

}
