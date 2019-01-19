import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'lobby-page',
  templateUrl: 'lobby.html',
  styleUrls: ['/pages/lobby/lobby.scss']
})
export class LobbyPage {
  public itemsList = ["CRICKET","KABADDI","NBA","FOOTBOOL","HOCKEY"];
  public dummyJson = [{
    "id":"1",
    "img1":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/AUS-CR1@2x-BIG.png",
    "label":"Australia vs India ODI",
    "timeRemaining":"00h 00m 00s",
    "img2":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/IND-CR1@2x-BIG.png"
  },
  {
    "id":"2",
    "img1":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/AUS-CR1@2x-BIG.png",
    "label":"Australia vs India ODI",
    "timeRemaining":"00h 00m 00s",
    "img2":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/IND-CR1@2x-BIG.png"
  },
  {
    "id":"3",
    "img1":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/AUS-CR1@2x-BIG.png",
    "label":"Australia vs India ODI",
    "timeRemaining":"00h 00m 00s",
    "img2":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/IND-CR1@2x-BIG.png"
  },
  {
    "id":"4",
    "img1":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/AUS-CR1@2x-BIG.png",
    "label":"Australia vs India ODI",
    "timeRemaining":"00h 00m 00s",
    "img2":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/IND-CR1@2x-BIG.png"
  },
  {
    "id":"5",
    "img1":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/AUS-CR1@2x-BIG.png",
    "label":"Australia vs India ODI",
    "timeRemaining":"00h 00m 00s",
    "img2":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/IND-CR1@2x-BIG.png"
  },
  {
    "id":"6",
    "img1":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/AUS-CR1@2x-BIG.png",
    "label":"Australia vs India ODI",
    "timeRemaining":"00h 00m 00s",
    "img2":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/IND-CR1@2x-BIG.png"
  },
  {
    "id":"7",
    "img1":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/AUS-CR1@2x-BIG.png",
    "label":"Australia vs India ODI",
    "timeRemaining":"00h 00m 00s",
    "img2":"https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/IND-CR1@2x-BIG.png"
  }];
  constructor(public navCtrl: NavController) {

  }

}
