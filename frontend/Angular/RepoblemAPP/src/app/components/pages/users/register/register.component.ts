import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, NgForm  } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Offer } from 'src/app/shared/models/offer.interface';
import { on } from 'node:events';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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


  constructor(
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
