import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Office } from 'src/app/ClassFiles/office';

@Component({
  selector: 'app-officedetail',
  templateUrl: './officedetail.component.html',
  styleUrls: ['./officedetail.component.scss']
})
export class OfficedetailComponent implements OnInit {
  officeId:string;
  office: Office[];
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {

    this.service = service;
    this.officeId = route.snapshot.params["id"];
    this.service.GetOfficeDetails(this.officeId).subscribe(data => {
      this.office =data;
      console.log(data);
  }
  );
   }

  ngOnInit() {
  }
  editOffice(){
    this.router.navigate(['/EditOffice', this.officeId]);

  }
}
