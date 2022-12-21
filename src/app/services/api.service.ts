import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private readonly API=environment.API;

  postProduct(data:any){
    return this.http.post<any>(this.API+"/productList/",data);
  }

  getProduct(){
    return this.http.get<any>(this.API+"/productList/")
  }

  putProduct(data:any,id:number){
    return this.http.put<any>(this.API+"/productList/"+id,data)
  }

  deleteProduct(id:number){
    return this.http.delete<any>(this.API+"/productList/"+id)
  }
}

