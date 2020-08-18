import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../_model/Item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = 'http://localhost:5000/api/';

  model: any;
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'inventory');
  }

  addItem(item: Item): Observable<any> {
    const fd = new FormData();
    fd.append('photo', item.photo);
    console.log(item);
    return this.http.post(this.baseUrl + 'inventory/add', fd);
  }
}
