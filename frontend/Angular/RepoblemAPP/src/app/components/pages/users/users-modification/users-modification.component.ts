import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, take } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users-modification',
  templateUrl: './users-modification.component.html',
  styleUrls: ['./users-modification.component.css']
})
export class UsersModificationComponent implements OnInit {

  
  usuario: any ;
  idUser : string = '';
  constructor(private authSvc:AuthService,private route: ActivatedRoute, private router:Router) {}


  ngOnInit(): void {

    //Recuperem les dades dels usuaris per reomplir els valors 
    this.route.params.pipe(take(1)).subscribe((params)=>{
      this.idUser = params['id'];
    });
     // const name = params['name']
     this.authSvc.getDetails(this.idUser).subscribe(data => {
       


      if(data.code = "200"){
        //tenim resposat correcta
        //console.log(data.user)
        this.usuario = data.user;
        console.log(this.usuario);
        console.log(this.usuario.profilePhoto);

      }
      else{
        console.log("Error: Dades d'usuario incorrecte")
      }
      
      }); 
      
  
  }
  modificateUser(firstNameValue:string, lastNameValue:string, usernameValue:string, phoneValue:string, birthDayValue:string, emailValue:string, passwordValue:string){


    this.authSvc.updateUser(this.idUser,usernameValue,firstNameValue,lastNameValue,emailValue,this.usuario.profilePhoto,phoneValue,new Date(birthDayValue),passwordValue).subscribe(res=>{});

    const myurl = `/users-details/${this.idUser}`;
    this.router.navigateByUrl(myurl);

  }

 
selectFile(event:any){
  //Funció per posar la fotografía diferent i guardar la foto i enviarla

}
}
