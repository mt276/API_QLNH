import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent implements OnInit{

  constructor(private service:SharedService){}

  menuList:any=[];
  _menu:any;
  isEdit:boolean=false;
  title:any;

  LoadMenuList(){
    this.service.GetListMenu().subscribe(data=>{
      this.menuList = data;
    })
  }

  AddMenu(){
    this._menu={
      MenuID:0,
      MenuName:""
    }
    this.isEdit=true;
    this.title="Thêm thực đơn"

  }

  EditMenu(menu:any){
    this._menu=menu;
    this.isEdit=true;
    this.title="Sửa thực đơn"
  }

  DeleteMenu(menu:any){
    if (confirm("Bạn có chắc muốn xóa?")){
      this.service.DeleteMenu(menu.MenuID).subscribe(
        data=>{
          alert(data.toString());
          this.LoadMenuList();
        }
      );
    }
  }

  Close(){
    this.isEdit=false;
    this.LoadMenuList();
  }

  ngOnInit(): void {
    this.LoadMenuList();
  }


}
