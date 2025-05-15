import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
rememberMe: any;
errorMessage: any;
togglePasswordVisibility() {
throw new Error('Method not implemented.');
}
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/home']);
  }
}













// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   imports:[FormsModule,CommonModule]
// })
// export class LoginComponent {
// rememberMe: any;
// togglePasswordVisibility() {
// throw new Error('Method not implemented.');
// }
//   username: string = '';
//   password: string = '';

  
//   login() {
//     if (!this.username) {
//       alert('Le champ "Nom d\'utilisateur" est obligatoire.');
//       return;
//     }

//     if (!this.password) {
//       alert('Le champ "Mot de passe" est obligatoire.');
//       return;
//     }

//     console.log('next etape');
//   }
// }
