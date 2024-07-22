import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-naughts-and-crosses',
  templateUrl: './naughts-and-crosses.page.html',
  styleUrls: ['./naughts-and-crosses.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class NaughtsAndCrossesPage implements OnInit {
  constructor() {
    addIcons({ homeOutline });
  }

  ngOnInit() {}
}
