import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Think } from './thinking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThinkService {

  private readonly API = 'http://localhost:3000/think'

  constructor(private http: HttpClient) { }

  list(): Observable<Think[]> {
    return this.http.get<Think[]>(this.API)
  }

  create(think: Think): Observable<Think> {
    return this.http.post<Think>(this.API, think)
  }

  excluir(id: number): Observable<Think> {
    const url = `${this.API}/${id}`
    return this.http.delete<Think>(url)
  }

  buscarPorId(id: number): Observable<Think> {
    const url = `${this.API}/${id}`
    return this.http.get<Think>(url)
  }

  editar(think: Think): Observable<Think> {
    const url = `${this.API}/${think.id}`
    return this.http.put<Think>(url, think)
  }
}
