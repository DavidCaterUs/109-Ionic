import { SharedService } from './../service/shared.service';


export class Friend{
  public name : string = "";//<- the actual name of the friends
  public belongsTo: string = ""; // to specify that it belong to me


  //firebase id used to remove freind from database

  public fbId: string = '';
  constructor(){

  }

}
