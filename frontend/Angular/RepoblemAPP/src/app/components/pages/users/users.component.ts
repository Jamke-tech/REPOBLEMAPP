import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from '../../../shared/models/user.interface';

@Component({
    selector:'app-users',
    template:`
    <div class="dsc-card" *ngIf="user">
        <a [routerLink]="['/users-details', user._id]">
            <div class="dsc-card__img">
                <img src="{{user.profilePhoto}}" alt="" *ngIf="user.profilePhoto">
            </div>
            <div class="dsc-card__info">
                <h2>{{ user.userName }}</h2>
                <p>{{ user.email | slice: 0:20 }}</p>
            </div>
        </a>
        <div>
            <button class="btn btn-danger btn-remove btn-sm" style="margin-left: 2px;" (click)="deleteUser()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            <input #selected id="selected" type="checkbox" name="selected"/>
        </div>
    </div>`,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class UsersComponent{
    @Input() user!:User;
    constructor(private route: ActivatedRoute, private authSvc:AuthService, private router:Router){}

    deleteUser():void{

        this.authSvc.deleteUserB(this.user._id).pipe(take(1)).subscribe(res => {
            if(res.code == "200"){
                this.router.navigate(['/users-list']);
                //window.location.reload();


                console.log('Usuari eliminat amb exit')

            }

            else{

                console.log('No s´ha pogut eliminar l´usuari');
                this.router.navigate(['/users-list']);
            }

        });
        
        
    }
}
