import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  status = false;
  public role! : string;

  constructor(
    private Route: Router,
    private toast : NgToastService
    ) {}

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.Route.navigate(['login']);
    this.toast.success({detail: "TERIMAKASIH", summary:"Logout Berhasil", duration: 5000});
  }

  clickEvent(){
    this.status = !this.status;       
  }
}
