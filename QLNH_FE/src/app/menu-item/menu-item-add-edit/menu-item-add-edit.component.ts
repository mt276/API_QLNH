import { Component, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-item-add-edit',
  templateUrl: './menu-item-add-edit.component.html',
  styleUrl: './menu-item-add-edit.component.css'
})
export class MenuItemAddEditComponent {


  menu_ItemID:any;
  menu_ItemName:any;
  @Input() menuItem:any;
  menuName:any;
  menuNameList:any=[];

  menu_ItemImg: string = 'menuItem0.jpg';
  pathImg: any;

  constructor(private service:SharedService){}

  ngOnInit(): void {
    if (this.menuItem) {
      this.menu_ItemID = this.menuItem.Menu_ItemID;
      this.menu_ItemName = this.menuItem.Menu_ItemName;
      this.menuName = this.menuItem.MenuName;
      this.menu_ItemImg = this.menuItem.Menu_ItemImg || 'menuItem0.jpg';
    }
    this.service.GetAllMenuName().subscribe(data => {
      this.menuNameList = data;
    });
    
    this.pathImg = this.service.ImgUrl + "/" + this.menu_ItemImg;
  }

  AddMenuItem() {
    var val = {
      menu_ItemName: this.menu_ItemName,
      menuName: this.menuName,
      menu_ItemImg: this.menu_ItemImg
    };
    this.service.PostMenuItem(val).subscribe(res => {
      alert(res.toString());
    });
  }

  EditMenuItem() {
    var val = {
      menu_ItemID: this.menu_ItemID,
      menu_ItemName: this.menu_ItemName,
      menuName: this.menuName,
      menu_ItemImg: this.menu_ItemImg
    };
    this.service.PutMenuItem(val).subscribe(res => {
      alert(res.toString());
    });
  }

  UploadImg(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.LoadImg(formData).subscribe((data: any) => {
      const fileName = data.split('\\').pop(); // Extract filename
      this.menu_ItemImg = fileName;
      this.pathImg = this.service.ImgUrl + "/" + this.menu_ItemImg;
    });
  }
  

}
