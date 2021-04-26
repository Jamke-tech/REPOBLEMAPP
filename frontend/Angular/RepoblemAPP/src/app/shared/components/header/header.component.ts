import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }
  mostrarPes :boolean = false;
  onLogout():void{
    //this.authSvc.
  }
}
