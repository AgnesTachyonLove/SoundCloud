import { Component, OnInit } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-ionic-infinite-scroll',
  templateUrl: './ionic-infinite-scroll.component.html',
  styleUrls: ['./ionic-infinite-scroll.component.scss'],
  standalone: true,
  imports: [IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList],
})

export class IonicInfiniteScrollComponent implements OnInit {
  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}