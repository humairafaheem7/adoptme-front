import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdoptmeService {
  baseUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProgramsDetails() {
    return this.http.get(`${this.baseUrl}/api/programs`);
  }

  getAssociateDetails() {
    return this.http.get(`${this.baseUrl}/api/associate`);
  }
}
