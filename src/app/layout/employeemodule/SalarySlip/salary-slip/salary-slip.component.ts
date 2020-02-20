import { Component, OnInit,EventEmitter,Input,Output,ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Favorite } from 'src/app/ClassFiles/favorite';
import { Sort } from '@angular/material';
import {MatTableDataSource,} from '@angular/material/table';
import {MatPaginator} from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/ClassFiles/employee';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { GenrateSalarySlip } from 'src/app/ClassFiles/genrate-salary-slip';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-salary-slip',
  templateUrl: './salary-slip.component.html',
  styleUrls: ['./salary-slip.component.scss']
})
export class SalarySlipComponent implements OnInit {



 
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router, private fb: FormBuilder,private route: ActivatedRoute, private toastr: ToastrService) {
   
    




  }



  
 
  ngOnInit() {

   
  }

 





 







}
