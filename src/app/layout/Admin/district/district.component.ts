
import { Component, OnInit,EventEmitter } from '@angular/core';
import { State } from 'src/app/ClassFiles/state';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  closeResult: string;

  DistirctForm: FormGroup;
  submited = new EventEmitter<string>();
  model = new Distirct('','');
  Distirct:Distirct[];
   state:State[];
   districtcount:string;
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {
    this.service = service;
    service.GetStateList().subscribe((data:any)=>{this.state=data;})
    service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
    service.GetDistrictList().subscribe((data: any) => { this.districtcount= data.length;})
    
  }
  
  ngOnInit() {
    this.DistirctForm = this.fb.group({
           
            stname: ['', Validators.required],
            dtname: ['', Validators.required],
          });
  }
  
  AddDistirct() {
    const distirct: Distirct = new Distirct();
        
        console.log(distirct);
       
        distirct.stname = this.DistirctForm.value.stname;
        distirct.dtname = this.DistirctForm.value.dtname;
        this.service.InsertDistrict(distirct).subscribe((res) => {
          console.log(res);
          this.submited.emit(res.toString());
          console.log(res.toString());
          
        if (res.toString() === "Exists")
        {
        this.toastr.error ("Distirct Already Exists");
        }
       else 
        {
          this.toastr.success ("Added SuccessFully");
        }
          localStorage.setItem('dtid', res.toString());
          this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/District']));
               this.service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
               this.service.GetDistrictList().subscribe((data: any) => { this.districtcount= data.length;})
              },
          error => {
            console.log(error);
          }
        );
        }
  
        Delete(dtname)
            {
        console.log(dtname);
        this.service.RemoveDistrict(dtname).subscribe((res) => {
          this.submited.emit(res.toString());
          if (res.toString() === "Exception") {
            this.toastr.error("ABC");
          }
          else {
            this.toastr.info("Removed SuccessFully");
          }   
                     this.service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
                     this.service.GetDistrictList().subscribe((data: any) => { this.districtcount= data.length;})

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
