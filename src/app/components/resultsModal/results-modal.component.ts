import { Component, OnInit} from '@angular/core';
import { CepService } from 'src/app/cep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.css'],
})
export class ResultsModalComponent implements OnInit {
  endereco: {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    cep: string;
  } | null = null;

  cep: string = '';

  cepHistory: any[] = [];
  

  constructor(private http: CepService, private router: Router) {}
  
  ngOnInit(): void {
    if (localStorage.getItem('historico')){
      let dados = JSON.parse(Object(localStorage.getItem('historico')));
      this.cepHistory = Object(dados);
    }
  }

  cleanArray(): void {
    this.endereco = null;
  }

  logoff(): void{
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  abrirHistorico(): void {
    this.router.navigate(['./history-search']);
  }

  getCepInformations() {
    this.http.SearchCep(this.cep).subscribe((res) => {
      this.endereco = res;
      this.cepHistory.push(res);
      localStorage.setItem('historico', JSON.stringify(this.cepHistory));
    });
  }
}
