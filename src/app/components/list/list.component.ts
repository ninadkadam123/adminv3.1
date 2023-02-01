import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MethodService } from 'src/app/services/method.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:any
  constructor(private methodservice:MethodService,
    private router:Router,){

  }

  ngOnInit(): void {
    console.log("inList")

    this.methodservice.getList().subscribe({
      next:(data)=>{
       this.list=data
      },
      error:(err)=>{

      },complete:()=>{
        console.log("API ")
      }
    })

  }

  Update(id:number){

  }

  addmethod(){
    console.log("in AddMethod")
  this.router.navigate(['add'])
  }

}
