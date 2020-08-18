import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../_model/Item';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = 'http://localhost:5000/api/';

  model: any;
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + 'inventory');
  }

  addItem(fd: FormData): Observable<any> {
    return this.http.post(this.baseUrl + 'inventory/add', fd);
  }
}
