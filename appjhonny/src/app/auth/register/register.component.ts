import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

//import { AuthService } from '@auth/auth.service';
//import { AngularFirestore } from '@angular/fire';
//import { Title } from '@angular/platform-browser-dynamic';
import { AngularFirestore } from '@angular/fire/firestore';

//import { User } from '@app/shared/models/user.interface';
//import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    //private authSvc: AuthService, 
    private router: Router,
    //private title: Title,
    public afs: AngularFirestore
    ) { }

  ngOnInit(): void {
    //this.title.setTitle('Registro en la tienda');
  }
  /*async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  /*private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {

      this.router.navigate(['/pagina']);
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }*/
  
}
