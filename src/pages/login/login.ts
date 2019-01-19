import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { UserPage } from '../../pages/user/user';
import { PhoneValidator } from '../../validators/phone.validator';

import { Country } from './login.model';

import emailMask from 'text-mask-addons/dist/emailMask';

@Component({
  selector: 'page-form',
  templateUrl: 'login.html'
})

export class LoginPage {

  validations_form: FormGroup;
  country_phone_group: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) { }

  ionViewWillLoad() {
    this.validations_form = this.formBuilder.group({
      phone: new FormControl('', Validators.required)
    });
  }

  validation_messages = {
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };

  onSubmit(values){
    this.navCtrl.push(UserPage);
  }

}
