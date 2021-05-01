import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from '../../../shared/models/user.interface';

@Component({
    selector:'app-users',
    template:'./user-card.html',
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
