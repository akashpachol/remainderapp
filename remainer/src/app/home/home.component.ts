import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
uid:any

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { }

  addEventform=this.fb.group({
    date:['',Validators.required,],
    events:['',Validators.required,]
  })


  ngOnInit(): void {
    
    if (!localStorage.getItem("currentUid")) {
      alert("please log in ...")
      this.router.navigateByUrl("")
    }

  }

  addEvent(){

    this.uid=JSON.parse(localStorage.getItem("currentUid")||'')

  var date=this.addEventform.value.date
  var events=this.addEventform.value.events

  if (this.addEventform.valid) {
    
    this.ds.addEvent(this.uid,date,events)
    .subscribe((result:any)=>{
      if (result) {
       alert(result.message)
      }
    },(result)=>{
      alert(result.error.message)
    }
    )
  }
    
  }

  logout(){
    localStorage.removeItem("currentUser")
localStorage.removeItem("currentUid")
this.router.navigateByUrl("")

  }
}
