import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nome = environment.nome
  foto = environment.linkFoto
  cargo = environment.cargo

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {

  }

  show(){
    /* $('#dropdownMenuLink').on('show.bs.dropdown', function () {
      // do something...
    }) */
  }

}
