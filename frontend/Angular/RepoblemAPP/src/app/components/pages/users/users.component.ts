import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../shared/models/user.interface';


@Component({
    selector:'app-users',
    template:`
    <div class="dsc-card" *ngIf="user">
        <a [routerLink]="['/user-details']">
            <div class="dsc-card__img">
                <img [src]="user.avatar" alt="">
            </div>
            <div class="dsc-card__info">
                <h2>{{ user.name }}</h2>
                <p>Correu: {{ user.email }}</p>
            </div>
        </a>
    </div>`,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class UsersComponent{
    @Input() user!:User;
}