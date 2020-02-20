import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Partner } from 'src/app/ClassFiles/partner';

@Component({
  selector: 'app-partnerdetail',
  templateUrl: './partnerdetail.component.html',
  styleUrls: ['./partnerdetail.component.scss']
})
export class PartnerdetailComponent implements OnInit {
  partnerId:string;
  Partner:Partner[];

  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {

    this.service = service;
    this.partnerId = route.snapshot.params["id"];
    this.service.GetPartnerDetails(this.partnerId).subscribe(data => {
      this.Partner =data[0];
      console.log(data);
  }
  );
   }

  ngOnInit() {
  }
  editPartner(){
    this.router.navigate(['/EditPartner', this.partnerId]);
  }
}
