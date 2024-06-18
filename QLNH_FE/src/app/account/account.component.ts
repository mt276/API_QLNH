import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{

  constructor(private service: SharedService) {}
loginForm = new FormGroup({
  username : new FormControl<string>(''),
  password: new FormControl<string>('')
})
 

result:any;





  ngOnInit(): void {

  }

  LoadLogin() {
    
    var acc = {
      userName:this.loginForm.controls.username.value,
      password:this.loginForm.controls.password.value,
    };
    console.log(acc);
    
    this.service.Login(acc).subscribe(data => {

      this.result = data;
    
    if(this.result.success== true){
      window.location.href = "http://localhost:4200/menu";
    }
    else{
      alert("Đăng nhập thất bại!");
    }
    });
    
  }
}
