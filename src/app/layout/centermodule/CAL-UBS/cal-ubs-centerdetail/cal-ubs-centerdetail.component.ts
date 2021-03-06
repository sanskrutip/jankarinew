import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { CenterService } from 'src/app/shared/services/center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cal-ubs-centerdetail',
  templateUrl: './cal-ubs-centerdetail.component.html',
  styleUrls: ['./cal-ubs-centerdetail.component.scss']
})
export class CalUbsCenterdetailComponent implements OnInit {

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
  finyear;
  UBSInfo
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
    centerservice.GetCenterUBSInfoList(this.CenterId).subscribe((data:any)=>{this.UBSInfo=data;
    
      console.log(this.UBSInfo)
    })
   }


   editCenterinfo() {

    this.router.navigate(['/CAL-UBS-Update-CenterInfo', this.CenterId]);
  }

  editCenterContact(){
    this.router.navigate(['/CAL-UBS-Add-Update-CenterContact', this.CenterId]);
  }

  editotherinfo(){
    this.router.navigate(['/CAL-UBS-Add-Update-OtherInfo', this.CenterId]);
  }

  editcentertype(){
    this.router.navigate(['/CAL-UBS-Add-Update-CenterType', this.CenterId]);
  }

  editinfra(){
    this.router.navigate(['/CAL-UBS-Add-Update-Infra', this.CenterId]);
  }
  editpartner(){
    this.router.navigate(['/CAL-UBS-Add-Update-Partner', this.CenterId]);
  }
  editAgreement(){
    this.router.navigate(['/CAL-UBS-Add-Update-Agreement', this.CenterId]);

  }



  editComputerHardware(){
    this.router.navigate(['/CAL-UBS-Add-Update-ComputerHardware', this.CenterId]);
  }

  ngOnInit() {
  }

}
