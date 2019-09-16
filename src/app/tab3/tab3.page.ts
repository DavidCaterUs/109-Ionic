import { Component } from '@angular/core';
import { Friend } from './../models/Friend';
import { DataService } from './../service/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model: Friend = new Friend();
  friendsToDisplay : Friend[] = [];

  constructor(private data : DataService) {
      data.getAllFriends().subscribe(list => {
        //clear the array
        this.friendsToDisplay = [];
        //filter to see only my friends
/**
*
*Travel the list array
*get each friend there
*compare if friend.belongsTo its equal to my userName ("Kleibert")
*then,push the friend into this.friendsToDisplay array */

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

  resgister(){

//send the object to data service
this.data.saveFriend(this.model);




//claer the form
  this.model = new Friend();
 }
}
