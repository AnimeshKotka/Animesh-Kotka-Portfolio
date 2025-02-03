import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetService implements OnInit {

  private scriptUrl = '';

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
  }

  public submitData(data: { name: string; subject: string; email: string; message: string }) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.scriptUrl, data, { headers });
  }
}
