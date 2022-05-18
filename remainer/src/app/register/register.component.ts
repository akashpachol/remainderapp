import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ds:DataService, private router:Router,private fb:FormBuilder) { }

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    uid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })

  ngOnInit(): void {
  }
  register(){
  var uname=this.registerForm.value.uname
  var uid = this.registerForm.value.uid
  var pwd = this.registerForm.value.pwd
  if (this.registerForm.valid) {
    this.ds.register(uname, uid, pwd)
      .subscribe((result: any) => {
        if (result) {
      
           alert(result.message)
          this.router.navigateByUrl("")
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
