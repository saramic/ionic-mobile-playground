import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { interval } from 'rxjs';
import { addIcons } from 'ionicons';
import { homeOutline, timeOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ten-thirty-five',
  templateUrl: './ten-thirty-five.page.html',
  styleUrls: ['./ten-thirty-five.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    RouterLink
  ],
})
export class TenThirtyFivePage implements OnInit {
  hereAndNow = this.formatDateTime(new Date());
  constructor() {
    addIcons({ homeOutline, timeOutline });
  }

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.hereAndNow = this.formatDateTime(new Date());
    });
  }

  formatDateTime(date: Date): string {
    const seconds = date.getSeconds().toString().padStart(2, '0').split('');
    const minutes = date.getMinutes().toString().padStart(2, '0').split('');
    const hours = (date.getHours() % 12).toString().padStart(2, '0').split('');
    return `${hours.join('')}:${minutes.join('')}:${seconds.join('')}`;
  }
}
