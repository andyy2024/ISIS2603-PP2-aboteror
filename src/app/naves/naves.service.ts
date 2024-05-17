import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Nave } from './Nave';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  private apiUrl: string = "https://raw.githubusercontent.com/2603-Uniandes/jsons/main/2024-10%20Star%20Wars/spaceships.json";



  constructor(private http: HttpClient) { }

  getNaves(): Observable<Nave[]> {
    return this.http.get<Nave[]>(this.apiUrl);
  }

}
