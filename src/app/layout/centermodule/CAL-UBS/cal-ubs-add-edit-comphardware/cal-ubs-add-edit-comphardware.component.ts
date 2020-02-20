import { Component, OnInit,EventEmitter } from '@angular/core';
import { CenterService } from 'src/app/shared/services/center.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Computerhardware } from 'src/app/ClassFiles/computerhardware';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
@Component({
  selector: 'app-cal-ubs-add-edit-comphardware',
  templateUrl: './cal-ubs-add-edit-comphardware.component.html',
  styleUrls: ['./cal-ubs-add-edit-comphardware.component.scss']
})
export class CalUbsAddEditComphardwareComponent implements OnInit {

  CenterId;
  UserId;
  ComputerList;
  ComputerHardwareForm:FormGroup;
  Computerhardware:Computerhardware;
  model = new Computerhardware('','','','','','','','','','','','','',);
  submited = new EventEmitter<string>();
  closeResult: string;
  pgname;
  finyear
  constructor(private fb: FormBuilder, private jankariservice: MasterServiceService,private modalService: NgbModal,private toastr: ToastrService, private centerservice: CenterService, private router: Router, private route: ActivatedRoute) {

    this.CenterId = route.snapshot.params["id"];
    this.UserId = localStorage.getItem["UserId"]

    this.pgname = localStorage.getItem("pgname");

    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    this.centerservice = centerservice
    centerservice.GetCenterComputerList(this.CenterId).subscribe((data: any) => {
      this.ComputerList = data;
      console.log("ComputerList"+this.ComputerList)
    })
   }

  ngOnInit() {

    this.ComputerHardwareForm= this.fb.group({

      compuser:['',Validators.required],
      brand:['',Validators.required],
      cpu:['',Validators.required],
      hdd:['',Validators.required],
      fdd:['',Validators.required],
      ram:['',Validators.required],
      cdrom:['',Validators.required],
      lancard:['',Validators.required],
      soundcard:['',Validators.required],
      keyboard:['',Validators.required],
      mouse:['',Validators.required],
      monitor:['',Validators.required],
      headphone:['',Validators.required],
      
    })

  }

  AddComputerHardware() {
    const hardware: Computerhardware = new Computerhardware();
        
        hardware.compuser = this.ComputerHardwareForm.value.compuser;
        hardware.brand = this.ComputerHardwareForm.value.brand;
        hardware.cpu = this.ComputerHardwareForm.value.cpu;
        hardware.hdd = this.ComputerHardwareForm.value.hdd;
        hardware.fdd = this.ComputerHardwareForm.value.fdd;
        hardware.ram = this.ComputerHardwareForm.value.ram;
        hardware.cdrom = this.ComputerHardwareForm.value.cdrom;
        hardware.lancard = this.ComputerHardwareForm.value.lancard;
        hardware.soundcard = this.ComputerHardwareForm.value.soundcard;
        hardware.keyboard = this.ComputerHardwareForm.value.keyboard;
        hardware.mouse = this.ComputerHardwareForm.value.mouse;
        hardware.monitor = this.ComputerHardwareForm.value.monitor;
        hardware.headphone = this.ComputerHardwareForm.value.headphone;
        console.log(hardware);

        this.centerservice.AddCenterComputer(this.CenterId,hardware).subscribe((res) => {
          console.log(res);
          this.submited.emit(res.toString());
          console.log(res.toString());
         
          this.toastr.success ("Added SuccessFully");
          this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
          this.router.navigate(['/CAL-UBS-CenterDetail', this.CenterId]));
  this.centerservice.GetCenterComputerList(this.CenterId).subscribe((data: any) => { this.ComputerList = data;})

              },
          error => {
            console.log(error);
          }
        );
        }

        Delete1(hardwareid) {
          console.log(hardwareid);
          this.centerservice.RemoveCenterComputer(hardwareid).subscribe((res) => {
            this.submited.emit(res.toString());
            this.toastr.error("Removed SuccessFully");
            this.centerservice.GetCenterComputerList(this.CenterId).subscribe((data: any) => { this.ComputerList = data;})

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

    ExportReport() {

      this.centerservice.GetCenterComputerList(this.CenterId).subscribe((data: any) => {
  
        let new_list = data.map(function (obj) {
          return {
            compuser: obj.compuser,
            brand: obj.brand,
            cpu: obj.cpu,
            hdd: obj.hdd,
            fdd: obj.fdd,
            ram: obj.ram,
            cdrom: obj.cdrom,
            lancard: obj.lancard,
            soundcard: obj.soundcard,
            keyboard: obj.keyboard,
            mouse: obj.mouse,
            monitor: obj.monitor,
            headphone: obj.headphone,
            
          }
        });
  
  
        new AngularCsv(new_list, "DownLoad Employee Report", this.csvOptions);
  
      })
  
  
  
    }
    csvOptions = {

      quoteStrings: '"',
      decimalseparator: '.',
      // // showLabels: true,
     //showTitle: "Employee Report",

      useBom: true,
      noDownload: false,
   
      headers: ["Computer User", "Brand", "CPU", "HDD", "FDD", "RAM", "CD ROM	", "Lancard", "Soundcard", "Keyboard", "Mouse	", "Monitor", "Headphone"]
    };
    Back(){
      this.router.navigate(['/CAL-UBS-CenterDetail', this.CenterId]);

    }

}
