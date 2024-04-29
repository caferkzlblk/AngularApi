import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  veri: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.apiVerisiniGetir();
  }

  apiVerisiniGetir(): void {
    const apiUrl = 'https://openapi.izmir.bel.tr/api/izban/istasyonlar'; 
    this.http.get(apiUrl).subscribe((data) => {
      this.veri = data;
    });
  }
}
