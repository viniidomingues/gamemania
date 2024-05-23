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

  constructor(private storageService: StorageService, private router: Router) {
    this.logged = storageService.isLoggedIn();
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
