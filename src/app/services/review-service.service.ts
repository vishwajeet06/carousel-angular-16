import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewServiceService {
  url: string = 'assets/review.json';

  constructor(private http: HttpClient) {}

  getReview():Observable<any> {
    return this.http.get<any>(this.url);
  }
}
