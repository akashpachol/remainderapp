import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  register(uname:any,uid:any,pwd:any){
    const data={
      uname,
      uid,
      pwd,
    }
return this.http.post("http://localhost:3002/register",data)
  }
  login(uid:any,pwd:any){
    const data={
      
      uid,
      pwd,
    }
return this.http.post("http://localhost:3002/login",data)
  }
  addEvent(uid:any,date:any,events:any){
    const data={
      
      uid,
      date,
      events
    }
return this.http.post("http://localhost:3002/add",data)

  }
  viewEvent(uid:any,){
  const data={
    uid,
  }
  return this.http.post("http://localhost:3002/history",data)
  }
  onDelete(uid:any){
    return this.http.delete("http://localhost:3002/onDelete/"+uid)

  }
}
