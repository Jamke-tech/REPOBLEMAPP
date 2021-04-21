import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users-modification',
  templateUrl: './users-modification.component.html',
  styleUrls: ['./users-modification.component.css']
})
export class UsersModificationComponent implements OnInit {

  
  usuario: any ;
  constructor(private authSvc:AuthService,private route: ActivatedRoute, private router:Router) {}


  ngOnInit(): void {

    //Recuperem les dades dels usuaris per reomplir els valors 
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];
     // const name = params['name']
     this.authSvc.getDetails(id).subscribe(data => {


      if(data.code = "200"){
        //tenim resposat correcta
        console.log(data.user)
        this.usuario = data.user;
        console.log(this.usuario);

      }
      else{
        console.log("Error: Dades d'usuario incorrecte")
      }
      
      }); 
      
  });
  }

updateUser (firstNameValue:string, lastNameValue:string, usernameValue:string, phoneValue:string, birthDayValue:string, emailValue:string) {
    //Recuperem els id del path params
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];

    //enviem les dades al servei de l'usuari
    this.authSvc.updateUser(id,usernameValue, firstNameValue, lastNameValue, emailValue , phoneValue,new Date(birthDayValue)).subscribe(res => {

      //Comprovem la resposta que ens dona de la bbdd
      if(res.code = "200"){
        //si es correcte tornarem a la pagina de tots els usauris
        

        this.router.navigate(['/users-details/',id]);
      }
      else{
        alert("Usuario no creado correctamente")
      }




    });







  });
    
 } 
}
