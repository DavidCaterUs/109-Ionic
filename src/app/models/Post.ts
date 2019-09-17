import { SharedService } from './../service/shared.service';

export class Post{
  // class atributes
public message: string;
public to : string;
public from: string;
public createdOn: Date;
public imageUrl: string;



  //constructor
  constructor(){

    this.to = "Everyone";
    this.createdOn = new Date(); //current date/time

  }

  //methods

}
