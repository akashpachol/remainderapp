import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  uname:any
uid:any
history:any
  constructor(private ds:DataService,private router:Router) { 
    this.uid=JSON.parse(localStorage.getItem("currentUid")||'')
    this.uname=JSON.parse(localStorage.getItem("currentUser")||'')
   this.history= this.ds.viewEvent(this.uid)  

    .subscribe((result:any)=>{
      if (result) {
        this.history=result.history
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }

  ngOnInit(): void {
  }
  onDelete(){
this.ds.onDelete(this.uid)
.subscribe((result:any)=>{
  if (result) {
    this.router.navigateByUrl("")
    alert(result.message)
  
  }
},(result)=>{
  alert(result.error.message)
})
  
  }
}

