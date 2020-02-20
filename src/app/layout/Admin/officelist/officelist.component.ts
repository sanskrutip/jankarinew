import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Office } from 'src/app/ClassFiles/office';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';
import { City } from 'src/app/ClassFiles/city';

@Component({
  selector: 'app-officelist',
  templateUrl: './officelist.component.html',
  styleUrls: ['./officelist.component.scss']
})
export class OfficelistComponent implements OnInit {
  officelist: Office[];
  url: string;
  OrgnizationList: OrgnizationList[];
  Distirct:Distirct[];
  state:State[];
  city:City[];
  count:number;
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder) {
    this.service = service;
    service.GetStateList().subscribe((data:any)=>{this.state=data;})
    service.GetDistrictList().subscribe((data:any)=>{this.Distirct=data;})
    service.GetCityList().subscribe((data:any)=>{this.city=data;})
    service.OrganizationList().subscribe((data: any) => { this.OrgnizationList= data;})
    service.GetOfficeList("").subscribe((data: any) => { this.officelist= data;
    })
    this.service.GetOfficeList("").subscribe((data: any) => {
      this.count= data.length;
      console.log( this.count );
    })
  }

  ngOnInit() {
  }

}
