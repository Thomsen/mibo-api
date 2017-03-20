import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  user: any = { name: '' };

  onLogin() {
    this.authService.login(this.user).then(result => {
      console.log('result ' + JSON.stringify(result));
      let username = JSON.parse(result._body).username;
      console.log('username ' + username);
      if (username == this.user.name) {
        alert('success');
      }
    });
  }

}
