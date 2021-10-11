import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { environment } from 'src/environments/environment';'../../../environments/environment';

const baseUrl = environment.URL_BACKEND || 'http://localhost:3003';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  options = 
      {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'supertest': 'que ?'
      }
  
  constructor(private http: HttpClient) { }

  create<T>(category: Category) : Observable<T> {
    return this.http.post<T>(`${baseUrl}/category`, {
      name: category.name,
    }, {headers: this.options})
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}/categories`, {headers: this.options})
  }

  delete<T>(category: Category) : Observable<T> {
    return this.http.delete<T>(`${baseUrl}/category`, {
      headers: this.options,
      body: {
        id: category.id
      }
    })
  }
}
