import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/user/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean;
  horas!: number;
  minutos!: number;
  segundos!: number;

  constructor(private storageService: StorageService, private router: Router) {
    this.logged = storageService.isLoggedIn();
    const dataAtual = new Date();
    this.horas = dataAtual.getHours();
    this.minutos = dataAtual.getMinutes();
    this.segundos = dataAtual.getSeconds();

    setInterval(() => {
      const novaData = new Date();
      this.horas = novaData.getHours();
      this.minutos = novaData.getMinutes();
      this.segundos = novaData.getSeconds();
    }, 1000);
  }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.storageService.clean();
    this.logged = false;
    this.router.navigate(['/login']);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

}
