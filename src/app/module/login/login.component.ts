import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username = new FormControl();
  password = new FormControl();

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  _beforeLogin(){
    this.loginService.login('test','test').subscribe(result=>{
      console.log(result);
      // alert('Login Successfully')
    });
  }
}
