import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  employeedata:any
  constructor() {
  
    
   }
  getData(){
    return this.employeedata
  }
  setData(data:any){
    this.employeedata=data;
    
    
  }
}
