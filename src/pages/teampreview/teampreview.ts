import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'teampreview-page',
  templateUrl: 'teampreview.html',
  styleUrls: ['/pages/teampreview/teampreview.scss']
})
export class TeamPreviewPage {
  public itemsList = ["CRICKET","KABADDI","NBA","FOOTBOOL"];
  public dummyJsonBowler = [{
    "id":"1",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  },
  {
    "id":"2",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  },
  {
    "id":"3",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  },
  {
    "id":"4",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  }];
  public dummyJsonBatsMan = [{
    "id":"1",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  },
  {
    "id":"2",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  },
  {
    "id":"3",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  }];
  public dummyJsonAllRounder = [{
    "id":"1",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  },
  {
    "id":"2",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  },
  {
    "id":"3",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  }];
  public dummyJsonWicketKeeper = [{
    "id":"1",
    "img1":"../../assets/imgs/default-player-image.png",
    "name":"dhoni",
    "playerpoints":"9cr",
    "catagory":"Bowler"
  }];
  constructor(public navCtrl: NavController) {

  }

}
