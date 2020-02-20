import { Component, OnInit, EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Salaryapprove } from 'src/app/ClassFiles/Salaryapprove';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { State } from 'src/app/ClassFiles/state';

@Component({
  selector: 'app-approve-salary',
  templateUrl: './approve-salary.component.html',
  styleUrls: ['./approve-salary.component.scss']
})
export class ApproveSalaryComponent implements OnInit {

  approve = false;
  checked = false;
  closeResult: string;
  StateForm: FormGroup;
  stcount: string;
  submited = new EventEmitter<string>();
  model = new State('');
  Salaryapprove;
  userid;
  month;
  year;
  pgname;
  finyear;
  salcount: number;
  constructor(private route: ActivatedRoute, private service: MasterServiceService, private modalService: NgbModal, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.service = service;
    this.userid = route.snapshot.params["id"];
    this.month = route.snapshot.params["id1"];
    this.year = route.snapshot.params["id2"];
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear", "yearname", "status=0").subscribe((data: any) => {
      this.finyear = data;

    })

    service.GetApprovedSalaryDetailsData(this.userid,this.month,this.year).subscribe((data: any) => {


      console.log(data);
      this.Salaryapprove = data;
    })


    service.GetApprovedSalaryDetailsData(this.userid,this.month,this.year).subscribe((data: any) => {

      this.Salaryapprove = data;
      console.log("fav" + this.Salaryapprove.length)

      this.salcount = this.Salaryapprove.length

      if (this.salcount == 1) {
        console.log("fav")
      }
      else {
        console.log("Notfav")
      }
    })


  }

  ngOnInit() {
    this.StateForm = this.fb.group({

      stname: ['', Validators.required],
    });
  }

  // AddState() {
  //   const state: State = new State();
  //   state.stname = this.StateForm.value.stname;
  //   this.service.InsertState(state).subscribe((res) => { 
  //     console.log(res);
  //     this.submited.emit(res.toString());
  //     console.log(res.toString());

  //     if (res.toString() === "Exists") {
  //       this.toastr.error("State Already Exists");
  //     }
  //     else {
  //       this.toastr.success("Added SuccessFully");
  //     }
  //     localStorage.setItem('desid', res.toString());


  //     this.router.navigateByUrl('/Dashboard', { skipLocationChange: true }).then(() =>
  //       this.router.navigate(['/State']));
  //     this.service.GetStateList().subscribe((data: any) => { this.state = data; })
  //     this.service.GetStateList().subscribe((data: any) => { this.stcount = data.length; })
  //   },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  // Delete(stname) {
  //   console.log(stname);
  //   this.service.RemoveState(stname).subscribe((res) => {
  //     this.submited.emit(res.toString());
  //     console.log(res.toString());
  //     if (res.toString() === "Exception") {
  //       this.toastr.error("ABC");
  //     }
  //     else {
  //       this.toastr.info("Removed SuccessFully");
  //     }

  //     this.service.GetStateList().subscribe((data: any) => { this.state = data; })
  //     this.service.GetStateList().subscribe((data: any) => { this.stcount = data.length; })
  //   },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }


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
