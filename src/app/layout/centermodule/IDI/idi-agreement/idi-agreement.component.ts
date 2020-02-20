import { Component, OnInit,EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CenterService } from 'src/app/shared/services/center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CenterAgreement } from 'src/app/ClassFiles/center-agreement';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-idi-agreement',
  templateUrl: './idi-agreement.component.html',
  styleUrls: ['./idi-agreement.component.scss']
})
export class IdiAgreementComponent implements OnInit {

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
  constructor(private fb: FormBuilder, private jankariservice: MasterServiceService, private modalService: NgbModal,private toastr: ToastrService, private centerservice: CenterService, private router: Router, private route: ActivatedRoute) {

    this.CenterId = route.snapshot.params["id"];
    this.UserId = localStorage.getItem("UserId");

    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })

    this.centerservice = centerservice;
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
          this.router.navigate(['/IDIComputerHardware', this.CenterId]));
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
    back(){
      this.router.navigate(['/IDICenterDetails', this.CenterId]);

       }

    Skip(){
      this.router.navigate(['/IDIComputerHardware', this.CenterId]);
    }

}
