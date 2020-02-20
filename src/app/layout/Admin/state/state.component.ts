import { Component, OnInit, EventEmitter } from '@angular/core';
import { State } from 'src/app/ClassFiles/state';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  closeResult: string;

  StateForm: FormGroup;
  stcount: string;
  submited = new EventEmitter<string>();
  model = new State('');
  state: State[];
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.service = service;
    service.GetStateList().subscribe((data: any) => { this.state = data; })

    service.GetStateList().subscribe((data: any) => { this.stcount = data.length; })
  }

  ngOnInit() {
    this.StateForm = this.fb.group({

    stname: ['', Validators.required],
    });
  }

  AddState() {
    const state: State = new State();
    state.stname = this.StateForm.value.stname;
    this.service.InsertState(state).subscribe((res) => { 
      console.log(res);
      this.submited.emit(res.toString());
      console.log(res.toString());

      if (res.toString() === "Exists") {
        this.toastr.error("State Already Exists");
      }
      else {
        this.toastr.success("Added SuccessFully");
      }
      localStorage.setItem('desid', res.toString());


      this.router.navigateByUrl('/Dashboard', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/State']));
      this.service.GetStateList().subscribe((data: any) => { this.state = data; })
      this.service.GetStateList().subscribe((data: any) => { this.stcount = data.length; })
    },
      error => {
        console.log(error);
      }
    );
  }

  Delete(stname) {
    console.log(stname);
    this.service.RemoveState(stname).subscribe((res) => {
      this.submited.emit(res.toString());
      console.log(res.toString());
      if (res.toString() === "Exception") {
        this.toastr.error("ABC");
      }
      else {
        this.toastr.info("Removed SuccessFully");
      }
    
      this.service.GetStateList().subscribe((data: any) => { this.state = data; })
      this.service.GetStateList().subscribe((data: any) => { this.stcount = data.length; })
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