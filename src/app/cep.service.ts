import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private api = 'https://viacep.com.br/ws/'
  constructor(private http: HttpClient) { }

  SearchCep(id: any): Observable<any> {
    return this.http.get(`${this.api}/${id}/json`)
  }
}
