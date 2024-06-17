import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit {

  constructor(private service: SharedService) {}

  menuItemList: any = [];
  _menuItem: any;
  isEdit: boolean = false;
  title: any;

  ngOnInit(): void {
    this.LoadMenuItemList();
  }

  LoadMenuItemList() {
    this.service.GetListMenuItem().subscribe(data => {
      this.menuItemList = data;
    });
  }

  AddMenuItem() {
    this._menuItem = {
      Menu_ItemID: 0,
      Menu_ItemName: "",
      Menu_ItemImg: 'menuItem0.jpg' // Default image
    };
    this.isEdit = true;
    this.title = "Thêm món ăn";
  }

  EditMenuItem(menuItem: any) {
    this._menuItem = menuItem;
    this.isEdit = true;
    this.title = "Sửa món ăn";
  }

  DeleteMenuItem(menuItem: any) {
    if (confirm("Bạn có chắc muốn xóa?")) {
      this.service.DeleteMenuItem(menuItem.Menu_ItemID).subscribe(
        data => {
          alert(data.toString());
          this.LoadMenuItemList();
        }
      );
    }
  }

  Close() {
    this.isEdit = false;
    this.LoadMenuItemList();
  }

  
}