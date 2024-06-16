import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrl: './menu-item-list.component.css'
})
export class MenuItemListComponent implements OnInit{


  constructor(private service:SharedService){}
  ngOnInit(): void {
    
  }

}
