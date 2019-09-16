import { Component } from '@angular/core';
import { Post } from './../models/Post';
import { DataService } from './../service/data.service';
import { Friend } from '../models/Friend';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  p : Post = new Post();
  friendsToDisplay : Friend[] = [];

  constructor(private data : DataService) {
    data.getAllFriends().subscribe(list => {
      this.friendsToDisplay = [];

      for(let i=0; i < list.length; i++){
        let friend  = list[i];
        if(friend.belongsTo == 'Kleibert'){
          this.friendsToDisplay.push(friend);
        }
      }

      //sort the array
      this.friendsToDisplay = this.friendsToDisplay.sort((left,right) => {
        if (left.name.toLowerCase() < right.name.toLowerCase()) return -1;
      else return 1;
      });
    });
  }


post(){
  console.log("Save btn pressed");
  console.log(this.p);

  //save the post
  this.data.savePost(this.p);


  //clear the form
  this.p = new Post();
  }
}
