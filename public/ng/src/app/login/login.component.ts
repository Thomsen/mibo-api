import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  user: any = { name: '' };

  onLogin() {
    this.authService.login(this.user).then(result => {
      console.log('result ' + JSON.stringify(result));
      let username = JSON.parse(result._body).username;
      console.log('username ' + username);
      if (username == this.user.name) {
        // alert('success');

        this.router.navigate(['/ng/main']);
      }
    });
  }
}
