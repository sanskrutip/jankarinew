import { Component, OnInit } from '@angular/core';
import { RoleDetail } from 'src/app/ClassFiles/role-detail';
import { Rolemenu } from 'src/app/ClassFiles/rolemenu';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userrolemenuassign',
  templateUrl: './userrolemenuassign.component.html',
  styleUrls: ['./userrolemenuassign.component.scss']
})
export class UserrolemenuassignComponent implements OnInit {
  UpdateForm:FormGroup

  RoleDetail:RoleDetail;
  role:RoleDetail;
  Rolemenu:Rolemenu;
  roleid;
  displayedColumns: string[] = [ 'SrNo','menuid', 'menuname', 'menuurl', 'parentmenu','opration'];
  dataSource: MatTableDataSource<Rolemenu>;
  selection = new SelectionModel<Rolemenu>(true, []);
  isAllSelected() {
   
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    // console.log(numSelected,numRows);
    
    return numSelected === numRows;
    
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(ref) {
   //console.log(ref);
    // if there is a selection then clear that selection
    if (this.isSomeSelected()) {
      
      this.selection.clear();
    ref.checked=false;
      
    } else {
      this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    }
    console.log(ref);
  }

  isSomeSelected() {
    
    return this.selection.selected.length > 0;
  }
  constructor(private toastr: ToastrService,private service: MasterServiceService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
    this.service = service;
    
    this.roleid=route.snapshot.params["id"];

    service.GetRoleDetails(this.roleid).subscribe((data: any) => { 
      this.RoleDetail= data;
     console.log(data);
     })
     
    //  service.GetMenuNoRole(this.roleid).subscribe((data: any) => { 
    //   this.role= data;
    //  console.log(data);
    //  })


     service.GetMenuNoRole(  this.roleid).subscribe((data: any) => { 
           

      this.dataSource  = new MatTableDataSource(data);
    })
   }

  ngOnInit() {
  }


  Update(){
   // var newData = this.dataSource.data;
    var newdata = this.selection.selected;
    console.log(newdata);
    this.service.Assignmenutorole(this.roleid, newdata).subscribe(
      res => {

        this.toastr.success ("update SuccessFully");          
        this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/UserRoleMenuAssign',this.roleid]));

      });

  }

  back(){
       this.router.navigate(['/RoleDetails',this.roleid]);
  }
  
}
