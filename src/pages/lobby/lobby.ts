import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
// For accessing the location.
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions,NativeGeocoderReverseResult } from '@ionic-native/native-geocoder/ngx';

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
  responseObj:any;
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
    
  }
  
  // ionViewDidLoad() {
  //   this.getLocation();
  // }

  // getLocation(){
  //   this.geolocation.getCurrentPosition().then((res) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //     //let location= 'lat'+ res.coords.latitude +'lang'+ res.coords.longitude;
  //     let location='lat '+res.coords.latitude+' lang '+res.coords.longitude;
  //     console.log("location"+location);
  //     // let toast = this.toastCtrl.create({
  //     //   message: location,
  //     //   duration: 3000
  //     // });
  //     // toast.present();

  //   }).catch((error) => {
  //   console.log('Error getting location', error);
  //   });
  // }
  //Show UI loader of ionic
  showLoader(){
    this.loading = this.loadingCtrl.create({
      //message: 'Please wait...'
    });
    this.loading.present();
  }
  
  //Hide UI loader of ionic
  hideLoader(){
    this.loading.dismiss();
  }
  //Get current coordinates of device
  // getGeolocation(){
  //   this.showLoader();
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     this.responseObj = resp.coords; 
  //     this.hideLoader();
  //     this.getGeoencoder(this.responseObj.latitude,this.responseObj.longitude);
  //    }).catch((error) => {
  //      alert('Error getting location'+ JSON.stringify(error));
  //      this.hideLoader();
  //    });
  // }
  

  // //geocoder method to fetch address from coordinates passed as arguments
  // getGeoencoder(latitude,longitude){
  //   this.showLoader();
  //   this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
  //   .then((result: NativeGeocoderReverseResult[]) => {
  //     this.responseObj.address = this.generateAddress(result[0]);
  //     this.hideLoader();
  //   })
  //   .catch((error: any) => {
  //     alert('Error getting location'+ JSON.stringify(error));
  //     this.hideLoader();
  //   });
  // }

  // //Return Comma saperated address
  // generateAddress(addressObj){
  //     let obj = [];
  //     let address = "";
  //     for (let key in addressObj) {
  //       obj.push(addressObj[key]);
  //     }
  //     obj.reverse();
  //     for (let val in obj) {
  //       if(obj[val].length)
  //       address += obj[val]+', ';
  //     }
  //   return address.slice(0, -2);
  // }


  // //Start location update watch
  // watchLocation(){
  //   this.showLoader();
  //   this.isWatching = true;
  //   this.watchLocationUpdates = this.geolocation.watchPosition();
  //   this.watchLocationUpdates.subscribe((resp) => {
  //     //alert(JSON.stringify(resp));
  //     this.hideLoader();
  //     this.responseObj = resp.coords;
  //     this.getGeoencoder(this.responseObj.latitude,this.responseObj.longitude);
  //     // resp can be a set of coordinates, or an error (if an error occurred).
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //   });
  // }

  // //Stop location update watch
  // stopLocationWatch(){
  //   this.isWatching = false;
  //   this.watchLocationUpdates.unsubscribe();
  // }

}
