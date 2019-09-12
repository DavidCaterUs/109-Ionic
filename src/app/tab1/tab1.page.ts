import { Component } from '@angular/core';
import { DataService } from './../service/data.service';
import { Post } from '../models/Post';
import { firestore } from 'firebase';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  postToShow: Post[] = [];

  constructor (private data: DataService) {
    //load DataService
    this.data.getAllPosts().subscribe(res => {
      console.log('all post changed', res);

      console.log('1');
      // iterate over the res to fix the createdOn format

      for(let i=0; i < res.length; i++){
        console.log('2');
        let post = res[i];
        let co: any = post.createdOn;
        console.log('2.5');
        post.createdOn = new firestore.Timestamp(co.seconds, co.nanoseconds).toDate();
        console.log('3');
      }

        this.postToShow = res;
    });
  }
}
