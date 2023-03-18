import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seller_login } from '../Models/login_model';
import { CarsService } from '../shared/cars_api.service';

@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent implements OnInit {

  loginForm = new FormGroup({
    userid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  seller_login:Seller_login = new Seller_login();

  constructor(private router: Router,private cars:CarsService) { }

  public login_res : any ;

  ngOnInit() {
  }

  onSubmit(){  
    console.log("kfgiudgfkehfoj");
    
    if(this.loginForm.valid){
      console.log(this.loginForm.value)

      this.seller_login.userid = this.loginForm.value.userid;
      this.seller_login.password = this.loginForm.value.password;

      this.cars.checkLoginCreds(this.seller_login).subscribe((data: any) => {
        
        this.login_res = data;
        this.router.navigate(['/addcar']);
        console.log(data);
      });
      
      }
    
   
      
    }    
  }
