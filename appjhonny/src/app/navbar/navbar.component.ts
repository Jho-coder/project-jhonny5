import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {AuthService} from './auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
  //providers:[AuthService]
})
export class NavbarComponent implements OnInit {
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goTo(path: string): void{
    this.route.navigate(['/login'])
  }

  //async onLogout(){
    //try {
      //await this.authSvc.logout();
      //this.router.navigate(['/login']);}
    //catch(error){console.log(error)};
    
 // }
}
