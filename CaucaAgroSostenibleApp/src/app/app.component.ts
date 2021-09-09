import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CaucaAgroSostenibleApp';

  constructor(private router:Router){}
  ngOnInit(): void {
    this.Home();
  }

  Home(){
    this.router.navigate(["home"]);
  }

  AdminProd(){
    this.router.navigate(["listar"]);
  }

  ListarOrg(){
    this.router.navigate(["listarorg"]);
  }

  ListarOfer(){
    this.router.navigate(["listarofer"]);
  }

}
