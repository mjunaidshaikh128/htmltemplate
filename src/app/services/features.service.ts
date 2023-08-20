import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feature } from 'feature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:5000/features';

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl);
  }
}
