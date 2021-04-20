import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //private isValidUsername =
  constructor(private authSvc:AuthService, private router: Router,private fb: FormBuilder) { }

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])

  })

  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:(''),
      password:('')
    })
  }

  getErrorMsg(field:string){

    let message;

    if(this.loginForm.get(field)?.errors){
      message = 'Has d introduir un valor'
    }
    else if(this.loginForm.get(field)){
      message = 'Nom d usuari no registrat'
    }//que el nombre este registrado 
    else if(this.loginForm.get(field)?.hasError('minlength')){
      message = 'La contrasenya ha de tenir més de 5 caracters'
    }
    return message;
  }
  isValidField(field:string):void { //boolean
    //return ( (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) && !this.loginForm.get(field)?.valid);

  }

  onLogin(usernameValue:string, passwordValue:string):void{

    this.authSvc.loginFunction(usernameValue,passwordValue).subscribe(data => {
      if(data){

      }
      else{

      }
    })


  }

  /*onLogin2(usernameValue:string, passwordValue:string):void{

    if(usernameValue=="admin" && passwordValue=="admin"){
      
    }
    else{
      
    }
  }*/
  
}
