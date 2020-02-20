import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CenterService } from 'src/app/shared/services/center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-centerdetail',
  templateUrl: './centerdetail.component.html',
  styleUrls: ['./centerdetail.component.scss']
})
export class CenterdetailComponent implements OnInit {
  CenterId: string;
  CenterType;
  Centerinfo;
  Otherinfo;
  CenterInfa;
  CenterPartner;
  CenterSancharak;
  CenterAgreement;
  CenterGST;
  ComputerList;
  CenterRate;
  pgname;
  finyear
  constructor(private toastr: ToastrService,private jankariservice: MasterServiceService, private centerservice: CenterService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.CenterId = route.snapshot.params["id"];
    this.centerservice = centerservice;
    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    centerservice.GetCenterDetails(this.CenterId).subscribe((data: any) => {
      this.Centerinfo = data;
      console.log(this.Centerinfo)
    });

    centerservice.GetCenterotherInfoList(this.CenterId).subscribe((data: any) => {
      this.Otherinfo = data;
      console.log("Otherinfo"+this.Otherinfo)
    });

    centerservice.CenterTypeList(this.CenterId).subscribe((data: any) => {
      this.CenterType = data;
      
    })

    centerservice.CenterInfraList(this.CenterId).subscribe((data: any) => {
      this.CenterInfa = data;
      console.log("CenterInfa"+this.CenterInfa)
    })

    centerservice.GetCenterPartnerList(this.CenterId).subscribe((data: any) => {
      this.CenterPartner = data;
      console.log("CenterPartner"+this.CenterPartner)
    })

    centerservice.GetSancharakList(this.CenterId).subscribe((data: any) => {
      this.CenterSancharak = data;
      console.log("CenterSancharak"+this.CenterSancharak)
    })


    centerservice.GetAgreementList(this.CenterId).subscribe((data: any) => {
      this.CenterAgreement = data;
      console.log("CenterAgreement"+this.CenterAgreement)
    })

    centerservice.GetGSTList(this.CenterId).subscribe((data: any) => {
      this.CenterGST = data;
      console.log("CenterGST"+this.CenterGST)
    })

    centerservice.GetCenterComputerList(this.CenterId).subscribe((data: any) => {
      this.ComputerList = data;
      console.log("ComputerList"+this.ComputerList)
    })

    centerservice.GetCenterRateList(this.CenterId).subscribe((data: any) => {
      this.CenterRate = data;
      console.log("GetCenterRate"+this.CenterRate)
    })

   }


   editCenterPersonal() {

    this.router.navigate(['/EditCenter', this.CenterId]);
  }
  editCenterContact(){
    this.router.navigate(['/EditCenterContact', this.CenterId]);
  }

  editotherinfo(){
    this.router.navigate(['/EditOtherInformation', this.CenterId]);
  }

  editcentertype(){
    this.router.navigate(['/EditCenterType', this.CenterId]);
  }

  editinfra(){
    this.router.navigate(['/InfraDetails', this.CenterId]);
  }
  editpartner(){
    this.router.navigate(['/AddEditPartnerDetail', this.CenterId]);
  }
  editAgreement(){
    this.router.navigate(['/AddEditCenteragreement', this.CenterId]);

  }


  editGST(){
    this.router.navigate(['/GSTDetails', this.CenterId]);
  }

  editComputerHardware(){
    this.router.navigate(['/AddEditComputerHardware', this.CenterId]);
  }

  ngOnInit() {
  }

}
