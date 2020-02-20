import { Component, OnInit ,EventEmitter} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CenterAgreement } from 'src/app/ClassFiles/center-agreement';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterService } from 'src/app/shared/services/center.service';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-add-edit-centeragreement',
  templateUrl: './add-edit-centeragreement.component.html',
  styleUrls: ['./add-edit-centeragreement.component.scss']
})
export class AddEditCenteragreementComponent implements OnInit {
  AgreementForm:FormGroup;
  model = new CenterAgreement('',null,null);
  fileToUpload: File = null;
  imageUrl: string;
  UserId;
  CenterId;
  CenterAgreement;
  submited = new EventEmitter<string>();
  closeResult: string;
  pgname;
  finyear;

  constructor(private fb: FormBuilder, private modalService: NgbModal,private toastr: ToastrService, private centerservice: CenterService, private router: Router, private route: ActivatedRoute,private jankariservice: MasterServiceService) {

    this.CenterId = route.snapshot.params["id"];
    this.UserId = localStorage.getItem("UserId");
    this.centerservice = centerservice;
    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    centerservice.GetAgreementList(this.CenterId).subscribe((data: any) => {
      this.CenterAgreement = data;
    })
   }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

 
   

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    
    reader.readAsDataURL(this.fileToUpload);
         
}
  ngOnInit() {
    this.AgreementForm = this.fb.group({

    file:['', Validators.required],
    sndt:['', Validators.required],
    endt: ['', Validators.required],
  
    });
    }


    AddAgreement(){
      const Agreement: CenterAgreement = new CenterAgreement();
     
      Agreement.stdate = this.AgreementForm.value.sndt;
      Agreement.endate = this.AgreementForm.value.endt;
       console.log(Agreement)

       console.log(this.fileToUpload)

       this.centerservice.UploadAgreement(this.CenterId,this.UserId, Agreement.stdate ,Agreement.endate , this.fileToUpload).subscribe(
        data => {
   
          this.toastr.success("Added SuccessFully");
          this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
          this.router.navigate(['/GSTDetails', this.CenterId]));
        });
    }


    Delete1(quliid) {
      console.log(quliid);
      this.centerservice.RemoveAgreement(quliid).subscribe((res) => {
        this.submited.emit(res.toString());
        this.toastr.error("Removed SuccessFully");
        this.centerservice.GetAgreementList(this.CenterId).subscribe((data: any) => {
          this.CenterAgreement = data;
        })
  
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
    Back(){
      this.router.navigate(['/CenterDetail', this.CenterId]);

    }


    Skip(){
      this.router.navigate(['/GSTDetails', this.CenterId]);
    }
}
