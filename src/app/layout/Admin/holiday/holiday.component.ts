import { Component, OnInit ,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { Holiday } from 'src/app/ClassFiles/holiday';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  closeResult: string;

  HolidayForm: FormGroup;
  Holiday:Holiday[];
  holicount:string;
  submited = new EventEmitter<string>();
  model = new Holiday('','',);
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {
    this.service = service;
     service.GetHolidayList().subscribe((data: any) => { 
      this.Holiday= data;
    console.log( this.Holiday);
    })
    service.GetHolidayList().subscribe((data: any) => {  this.holicount= data.length;})
   }
  ngOnInit() {
    this.HolidayForm = this.fb.group({
      holiday: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }
  AddHoliday() {
    const holi: Holiday = new Holiday();
    holi.holiday = this.HolidayForm.value.holiday;
    holi.reason = this.HolidayForm.value.reason;
    this.service.InsertHoliday(holi).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      if (res.toString() === "Exists")
      {
      this.toastr.error ("Holiday Already Exists");
      }
     else 
      {
        this.toastr.success ("Added SuccessFully");
      }
      localStorage.setItem('holid', res.toString());

      

           this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/Holiday']));
           this.service.GetHolidayList().subscribe((data: any) => { this.Holiday= data;})
           this.service.GetHolidayList().subscribe((data: any) => {  this.holicount= data.length;})

             },
      error => {
        console.log(error);
      }
    );
    }



Delete(holid)
{
console.log(holid);
this.service.Removeholiday(holid).subscribe((res) => {
  console.log(res);
this.submited.emit(res.toString());
if (res.toString() === "Exception") {
  this.toastr.error("ABC");
}
else {
  this.toastr.info("Removed SuccessFully");
}   
   this.service.GetHolidayList().subscribe((data: any) => { this.Holiday= data;})
this.service.GetHolidayList().subscribe((data: any) => {  this.holicount= data.length;})

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
