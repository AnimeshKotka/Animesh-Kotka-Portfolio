import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetService implements OnInit {

  // private scriptUrl = 'https://script.google.com/macros/s/AKfycby3vSuKthoZqjUENRAuSbzuGkHXJWWr4iLBGZ53Zhzy/dev'
  private scriptUrl = 'https://script.google.com/macros/s/AKfycbxntgonzRF7Rs1069o4eHTbI2n0b8xv8hIsXjQhNoyuPGSyc4P8RtLkf770w-uoQO0YuQ/exec';

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
  }

  public submitData(data: { name: string; subject: string; email: string; message: string }) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.scriptUrl, data, { headers });
  }
}
