import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { 
  title = 'Buscar CEP';
  cep = '';


  public customPatterns = { '0': { pattern: new RegExp('[a-zA-Z]') } };

  constructor(private router: Router) {}

  
}
