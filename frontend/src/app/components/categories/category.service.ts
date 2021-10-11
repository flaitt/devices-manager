import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:3000';
  options = 
      {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'supertest': 'que ?'
      }
  
  constructor(private http: HttpClient) { }

  create<T>(category: Category) : Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/category`, {
      name: category.name,
    }, {headers: this.options})
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`, {headers: this.options})
  }

  delete<T>(category: Category) : Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/category`, {
      headers: this.options,
      body: {
        id: category.id
      }
    })
  }
}
