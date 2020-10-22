import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './user-main.component.html',
    styleUrls: ['./user-main.component.css']
})

export class UserMainComponent implements OnInit {

   currentUser:User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(){

    //set user
    // this.activatedRoute.paramMap.subscribe((params: ParamMap )=>{
    //   let id = params.get('id');
    //   this.userService.getUser(id).subscribe(user=> {
    //     this.currentUser = user;
    //     this.userService.setUserInStore(this.currentUser);
    //   })
    // })

    //set events
    // this.userService.getUserEvents().subscribe(data=>{
    //   let events = data;
    //   for(let event of events){
    //     event.start = new Date(event.start)
    //   }
    // })
    // this.userService.setUserEventsInStore()
  }

}

