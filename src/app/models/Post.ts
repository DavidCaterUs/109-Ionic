export class Post{
  // class atributes
public message: string;
public to : string;
public from: string;
public createdOn: Date;
public imageUrl: string;



  //constructor
  constructor(){

    this.from = "Kleibert";
    this.to = "Everyone";
    this.createdOn = new Date(); //current date/time

  }

  //methods

}
