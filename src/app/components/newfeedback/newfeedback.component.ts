import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/interfaces/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-newfeedback',
  templateUrl: './newfeedback.component.html',
  styleUrls: ['./newfeedback.component.css']
})
export class NewfeedbackComponent implements OnInit {

  feedbacks:Feedback[] 

  constructor(private feedbackservice:FeedbackService){

  }
  ngOnInit(): void {
    
    this.feedbackservice.getfeedback().subscribe({next:(data:Feedback[])=>{
      this.feedbacks=data;
      console.log(this.feedbacks);
      
    },error:(err)=>{
      console.log(err)
    },complete:()=>console.info('API call Completed')})
  }


}
