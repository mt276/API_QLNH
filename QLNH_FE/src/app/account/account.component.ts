import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{

  constructor(private service: SharedService) {}

  userName:string='';
  password:string='';

  table:any=[];

  account:any={
    UserName:"",
    Password:""
   };



  ngOnInit(): void {
    this.userName=this.account.UserName;
    this.password = this.account.Password;
  }

  LoadLogin() {
    
    var acc = {
      userName:this.userName,
      password:this.password
    };
    this.service.Login(acc).subscribe(data => {
      this.table = data;
    });
    if(this.table[0].Column1 == 1){
      window.location.href = "http://localhost:4200/menu";
    }
    else{
      alert("Đăng nhập thất bại!");
    }
  }

}
