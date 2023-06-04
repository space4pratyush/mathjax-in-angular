import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get<any>('assets/questions/NCERT_G09_TOPIC13_LEVEL04.json');
  }
}
