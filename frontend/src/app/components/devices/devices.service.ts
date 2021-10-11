import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../categories/category.model';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  baseUrl = 'http://localhost:3000';
  options = 
      {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'supertest': 'que ?'
      }

  category: Category[] = []
  
  constructor(private http: HttpClient) { }

  create<T>(device: Device, category_id: any) : Observable<T> {
    console.log("creating device with", device)
    return this.http.post<T>(`${this.baseUrl}/device`, {
      categoryId: category_id,
      color: device.color,
      partNumber: device.part_number
    }, {headers: this.options})
  }

  read(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.baseUrl}/devices`, {headers: this.options})
  }

  delete<T>(device: Device) : Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/device`, {
      headers: this.options,
      body: {
        id: device.id
      }
    })
  }
}
