import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.trackClick();
  }

  trackClick(): void {
    fetch(environment.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        secret: environment.secretKey,
        source: "home-visit",
        userAgent: navigator.userAgent,
        note: "portfolio home visit"
      })
    }).catch(err => console.error("Tracking failed", err));
  }

}
