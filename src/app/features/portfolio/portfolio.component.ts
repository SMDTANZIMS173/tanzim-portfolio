import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

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
        source: "portfolio",
        userAgent: navigator.userAgent,
        note: "portfolio visit"
      })
    }).catch(err => console.error("Tracking failed", err));
  }

}
