import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  usuario: any ;//Observable<User> | undefined;
  constructor(private route: ActivatedRoute, private userSvc: AuthService,private router: Router) { 
  }

  ngOnInit(): void {


    this.route.params.pipe(take(1)).subscribe((params)=>{
        const id = params['id'];
       // const name = params['name']
       this.userSvc.getDetails(id).subscribe(data => {


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
  tornar(){
    this.router.navigate(['/users-list']);
  }





}
