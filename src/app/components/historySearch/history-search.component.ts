import { Router } from '@angular/router';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-history-search',
  templateUrl: './history-search.component.html',
  styleUrls: ['./history-search.component.css'],
})
export class HistorySearchComponent implements OnInit {
  
  @Input() cepHistory: any[] = [];  

  constructor(private router: Router) {}

  fechar(): void {
    this.router.navigate(['./home']);
  }

  limpar(): void {
    this.cepHistory = [];
    localStorage.removeItem('historico');
  }

  ngOnInit(): void {
      if (localStorage.getItem('historico')){
        let dados = JSON.parse(Object(localStorage.getItem('historico')));
        this.cepHistory = Object(dados);
      }
    }
}
