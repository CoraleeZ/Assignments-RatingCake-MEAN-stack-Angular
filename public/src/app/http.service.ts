import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {};

  createCake(data){
    return this._http.post('/api/cake',data);
  };

  getAllCake(){
    return this._http.get('/api/cake');
  };
  
  getOneCake(id:any){
    return this._http.get('/api/cake/'+id);
  };

  createRate(id:any,data){
    return this._http.post('/api/rate/'+id,data);
  };
}
