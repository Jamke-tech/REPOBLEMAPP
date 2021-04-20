import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, NgForm  } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Offer } from 'src/app/shared/models/offer.interface';
import { Observable } from 'rxjs';
//import { on } from 'node:events';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor (private fb:FormBuilder){}

  registro = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    birthDay: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),

  })
  ngOnInit(): void {
    
    this.registro = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl(''),
      phone: new FormControl(''),
      birthDay: new FormControl(''),
      email:new FormControl(''),
      password: new FormControl('')
    })
    throw new Error('Method not implemented.');
  }

  addUsuario(firstNameValue:string, lastNameValue:string, usernameValue:string, phoneValue:string, birthDayValue:string, emailValue:string, passwordValue:string, profilePhotoValue:string):void {

    if(this.registro.valid){

      let user: User;
      user = {name: firstNameValue, surname: lastNameValue, userName: usernameValue, phone:phoneValue, birthDate: new Date(birthDayValue), id:0,email:emailValue,social:"",savedOffers: [], password:passwordValue, profilePhoto:profilePhotoValue};
      
    }
    else{
      
    }

  }

  /*registerForm: FormGroup;   //para los validators
  validation_messages: any; 
  profilePhoto: string;
  name: string;
  surname: string;
  userName: string;
  password: string;
  email: string;
  phone: string;
  birthDate: Date;
  savedOffers:Array<Offer>;
  social: string;

  user: User;*/


  /*constructor(
    private router: Router,
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private user: User = {
      profilePhoto: '',
      name: '',
      surname: '',
      userName: '',
      password: '',
      email: '',
      phone: '',
      birthDate: new Date(),
      savedOffers:new Array(),
      social: '',
      id: 0,
    },
  ) { 

    //this.userName: new FormControl('', )


  }

  ngOnInit(): void {}
      /*if this.auth
          .registerUser(this.user.name, this.user.surname,this.user.userName, this.user.password, this.user.email, this.user.phone, this.user.profilePhoto, this.user.birthDate )
          .subscribe(user => {
            this.auth.setUser(user);
            const token = user.userName;//id??
            this.auth.setToken(token);
            this.router.navigate(['/user-list']); //donde se dirige una vez registrado
            location.reload();
          },
          res => {
            this.msgError = res.error.error.details.messages.email;
            this.onIsError();
          });
      } else {
        this.onIsError();
      }
    }*/

    
  

}
