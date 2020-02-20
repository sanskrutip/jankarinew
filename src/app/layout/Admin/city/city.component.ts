
import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  closeResult: string;
  CityForm: FormGroup;
  submited = new EventEmitter<string>();
  model = new City('','');
  Distirct:Distirct[];
  state:State[];
  city:City[];
  citycount:string;
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router,private fb: FormBuilder,private toastr: ToastrService
    ) {
    this.service = service;
    service.GetStateList().subscribe((data:any)=>{this.state=data;})
    service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
    service.GetCityList().subscribe((data:any)=>{this.city=data;})
    service.GetCityList().subscribe((data: any) => {  this.citycount= data.length;})
  }
  
  ngOnInit() {
    this.CityForm = this.fb.group({
           
      dtname: ['', Validators.required],
      ctname: ['', Validators.required],
          });
  }
  
  AddCity() {
    const city: City = new City();
        
        console.log(city);
       
        city.dtname = this.CityForm.value.dtname;
        city.ctname = this.CityForm.value.ctname;
        this.service.InsertCity(city).subscribe((res) => {
          console.log(res);
          this.submited.emit(res.toString());
          console.log(res.toString());
          if (res.toString() === "Exists")
        {
        this.toastr.error ("city Already Exists");
        }
       else 
        {
          this.toastr.success ("Added SuccessFully");
        }
          localStorage.setItem('ctid', res.toString());

              this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
              this.router.navigate(['/City']));
              this.service.GetCityList().subscribe((data:any)=>{this.city=data;})
              this.service.GetCityList().subscribe((data: any) => {  this.citycount= data.length;})

              },
          error => {
            console.log(error);
          }
        );
        }
  
        Delete(ctname)
            {
        console.log(ctname);
        this.service.RemoveCity(ctname).subscribe((res) => {
          this.submited.emit(res.toString());
          if (res.toString() === "Exception") {
            this.toastr.error("ABC");
          }
          else {
              this.toastr.info("Removed SuccessFully");
          }   
              this.service.GetCityList().subscribe((data:any)=>{this.city=data;})
              this.service.GetCityList().subscribe((data: any) => {  this.citycount= data.length;})
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


