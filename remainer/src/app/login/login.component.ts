import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    
    uid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    var uid = this.loginForm.value.uid
    var pwd = this.loginForm.value.pwd
    if (this.loginForm.valid) {
      this.ds.login(uid, pwd)
        .subscribe((result: any) => {
          if (result) {
            localStorage.setItem("currentUid",JSON.stringify(result.currentUid))
            localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
             alert(result.message)
            this.router.navigateByUrl("home")
          }
  
        }, (result: any) => {
          alert(result.error.message)
        }
        )
    
  
    } else {
      alert("invalid form")
    }
  
    
  }
}




