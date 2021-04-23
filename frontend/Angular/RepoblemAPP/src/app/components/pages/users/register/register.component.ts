import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, NgForm  } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Offer } from 'src/app/shared/models/offer.interface';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
//import { on } from 'node:events';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  
export class RegisterComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  public photoFile:any | undefined;



  constructor (private fb:FormBuilder,private authSvc:AuthService,private router:Router){}

  registro = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    birthDay: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    profilePhoto: new FormControl(null,[Validators.required]),
    file : new FormControl ('',[Validators.required])

  })
  


  ngOnInit(): void {
    try{
      this.registro = this.fb.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        username: new FormControl(''),
        phone: new FormControl(''),
        birthDay: new FormControl(''),
        email:new FormControl(''),
        password: new FormControl(''),
        profilePhoto: new FormControl(null)
      })
    }
    catch{
      throw new Error('Method not implemented.');
    }

  }

  addUsuario(firstNameValue:string, lastNameValue:string, usernameValue:string, phoneValue:string, birthDayValue:string, emailValue:string, passwordValue:string):void {

    if(this.registro.valid){


      //const fileUpload: this.fileUpload.nativeElement;


      let user: User;
      this.authSvc.registerUser(usernameValue, firstNameValue, lastNameValue,passwordValue,emailValue , phoneValue,new Date(birthDayValue),this.photoFile)
      .pipe(take(1)).subscribe((res: any) =>{
        //Miramos que respuesta nos envia 
        if(res.code = "200"){
          //si es correcte tornarem a la pagina de tots els usauris
          this.router.navigate(['/users-list']);
        }
        else if(res.code="403"){
          alert("Error en les dades: Correu existen o Usuari repetit")
        }
        else{
          alert("Usuario no creado correctamente")
        }
      });
      

    }

    else{
      
    }

  }
  selectFile(event:any):void{
    this.photoFile=event.target.files.item(0);
    console.log("Photo Changed ")
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
