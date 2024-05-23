import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/user/storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  fazerLogin() {
    if (this.userModel.email && this.userModel.password) {
      console.log('Login efetuado com:', this.userModel);
      this.storageService.saveUser(this.userModel);
      this.router.navigate(['']);
      setTimeout(() => {
        location.reload();
      }, 1000);
    } else {
      this.mensagem = 'Por favor, corrija os erros antes de enviar.';
    }
  }

  validarLogin() {
    console.log("clicou!")
  }

}
