export class Friend{
  public name : string = "";//<- the actual name of the friends
  public belongsTo: string = ""; // to specify that it belong to me
  constructor(){
    this.belongsTo = 'Kleibert';
  }
}
