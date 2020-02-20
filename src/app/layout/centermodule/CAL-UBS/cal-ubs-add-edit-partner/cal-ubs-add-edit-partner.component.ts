import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CenterService } from 'src/app/shared/services/center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Partner } from 'src/app/ClassFiles/partner';
import { PartnerDetail } from 'src/app/ClassFiles/partner-detail';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-cal-ubs-add-edit-partner',
  templateUrl: './cal-ubs-add-edit-partner.component.html',
  styleUrls: ['./cal-ubs-add-edit-partner.component.scss']
})
export class CalUbsAddEditPartnerComponent implements OnInit {
  CenterId;
  UserId;
  CenterPartner;
  PartnerForm:FormGroup;
  Partnerlist:Partner[];
  model = new PartnerDetail('',null,null);
  submited = new EventEmitter<string>();
  closeResult: string;
  pgname;
  finyear
  constructor(private fb: FormBuilder,private jankariservice: MasterServiceService, private modalService: NgbModal,private toastr: ToastrService, private centerservice: CenterService, private router: Router, private route: ActivatedRoute) { 

    this.CenterId = route.snapshot.params["id"];
    this.UserId = localStorage.getItem("UserId");
    this.centerservice = centerservice;
    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })


     centerservice.GetCenterPartnerList(this.CenterId).subscribe((data: any) => {
      this.CenterPartner = data;
      console.log("CenterPartner"+this.CenterPartner)
    })
    this.centerservice.FillDropDown("Partner","distinct Partner.partnername","Partner.partnerid","").subscribe((data:any)=>{this.Partnerlist=data;
      console.log(this.Partnerlist)
 
    })
  }

  ngOnInit() {
    this.PartnerForm = this.fb.group({

    
      stdt:['', Validators.required],
    endt: ['', Validators.required],
    partnerid:['', Validators.required],
  
    });
    }
  

    AddPartnerDetail() {
      const partner: PartnerDetail = new PartnerDetail();
          
      partner.stdt = this.PartnerForm.value.stdt;
      partner.endt = this.PartnerForm.value.endt;
      partner.partnerid = this.PartnerForm.value.partnerid;
      
          console.log(partner);
  
          this.centerservice.AddCenterPartner(this.CenterId,this.UserId,partner).subscribe((res) => {
            console.log(res);
            this.submited.emit(res.toString());
            console.log(res.toString());
           
            this.toastr.success ("Added SuccessFully");
            this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
            this.router.navigate(['/CAL-UBS-Add-Update-Agreement', this.CenterId]));
            this.centerservice.GetCenterPartnerList(this.CenterId).subscribe((data: any) => {this.CenterPartner = data;})   },
            error => {
              console.log(error);
            }
          );
          }
  
          Delete1(cpid) {
            console.log(cpid);
            this.centerservice.RemoveCenterPartner(cpid).subscribe((res) => {
              this.submited.emit(res.toString());
              this.toastr.error("Removed SuccessFully");
              this.centerservice.GetCenterPartnerList(this.CenterId).subscribe((data: any) => { this.CenterPartner = data;})
  
              error => {
                console.log(error);
              }
        
            });
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

      back(){
         this.router.navigate(['/CAL-UBS-CenterDetail', this.CenterId]);

          }

          Skip(){
            this.router.navigate(['/CAL-UBS-Add-Update-Agreement', this.CenterId]);
          }

}
