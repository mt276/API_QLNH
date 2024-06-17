import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-add-edit',
  templateUrl: './menu-add-edit.component.html',
  styleUrl: './menu-add-edit.component.css'
})
export class MenuAddEditComponent implements OnInit {

  constructor(private service:SharedService){}
  
  menuID:any;
  menuName:any;

  @Input() menu:any;

  ngOnInit(): void {
    this.menuID = this.menu.MenuID;
    this.menuName = this.menu.MenuName;
  }



  AddMenu(){
    var val = {
      menuName:this.menuName
    };
    this.service.PostMenu(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  EditMenu(){
    var val = {
      menuID:this.menuID, 
      menuName:this.menuName
    };
    this.service.PutMenu(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  

}
