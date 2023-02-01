import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../interfaces/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient:HttpClient) { }

  getfeedback():Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`https://design-it-well.onrender.com/feedback`)
  }
  
}
