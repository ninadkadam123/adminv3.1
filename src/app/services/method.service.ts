import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  constructor(private httpClient:HttpClient) { }

  getList():Observable<any>{
    return this.httpClient.get<any>(`https://design-it-well.onrender.com/methods`)
     }
}
