import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { UserPage } from '../user/user';

import { RestApiService } from '../../services/rest-api.service';

import { UsernameValidator } from '../../validators/username.validator';
import { PasswordValidator } from '../../validators/password.validator';
import { PhoneValidator } from '../../validators/phone.validator';

import { Country } from './register.model';

import emailMask from 'text-mask-addons/dist/emailMask';

@Component({
  selector: 'page-form',
  templateUrl: 'register.html'
})

export class RegisterPage {

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;

  emailMask = emailMask;

  countries: Array<Country>;
  genders: Array<string>;
  data1: any;
  data2: any;

  constructor(public api: RestApiService, public navCtrl: NavController, public formBuilder: FormBuilder,
    public loadingController: LoadingController) { }
  
  ngOnInit() {
    //this.getData();
  }
  async postRequest(formValues, apiName) {
    const loading = await this.loadingController.create({
      
    });
    await loading.present();
    this.api.postRequest(formValues, apiName)
      .subscribe(res => {
        console.log(res);
        this.data1 = res[0];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  ionViewWillLoad() {
    this.countries = [
      new Country('UY', 'Uruguay'),
      new Country('US', 'United States'),
      new Country('AR', 'Argentina')
    ];

    this.genders = [
      "Male",
      "Female"
    ];

    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    });

    this.validations_form = this.formBuilder.group({
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([ 
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
    });
  }

  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };

  onSubmit(values){
   // this.navCtrl.push(UserPage);
   console.log("validations_form.value",this.validations_form.value);
   let formValues = {
        'whiteLabelId': "1",
        'phone': this.validations_form.value.phone,
        'email': this.validations_form.value.email,
        'hpwd': this.validations_form.value.matching_passwords.password,
        'salt': "test",
    };
   let response = this.postRequest(formValues, "signup");
   console.log("response in controller", response);

   
  
  //  .subscribe(data => {
  //   console.log(data);
  // });
  }


}
