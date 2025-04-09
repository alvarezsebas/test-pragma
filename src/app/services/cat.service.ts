import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
 
  private url = 'https://api.thecatapi.com/v1/breeds';
  private key = 'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr';

  constructor(private http: HttpClient) { }

  getRazas(): Observable<any>{
    const headers = new HttpHeaders().set('x-api-key', this.key);
    return this.http.get(this.url, { headers });
  }
}
