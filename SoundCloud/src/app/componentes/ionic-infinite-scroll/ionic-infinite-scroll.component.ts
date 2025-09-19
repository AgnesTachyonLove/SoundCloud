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
  IonButton,
} from '@ionic/angular/standalone';
import { SongServices } from 'src/app/servicios/song-services';
import { ApiServices } from 'src/app/servicios/api-services';
@Component({
  selector: 'app-ionic-infinite-scroll',
  templateUrl: './ionic-infinite-scroll.component.html',
  styleUrls: ['./ionic-infinite-scroll.component.scss'],
  standalone: true,
  imports: [
    IonAvatar, 
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent, 
    IonItem, 
    IonLabel, 
    IonList,
    IonButton,
  ],
})

export class IonicInfiniteScrollComponent implements OnInit {
  items: any[] = [];
  constructor(private api: ApiServices, private songServices: SongServices){}
  


  ngOnInit() {
    this.loadSongs();
  }
  

  


  private loadSongs() {
      this.api.getSongs().subscribe(
        (resp) => {
          this.items = resp;
        },
        (err) => {
          console.error('Error al cargar canciones', err);
        }
      );
    }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadSongs();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  songSelected(song_id: number){
    console.log('cancion: ' + song_id)
    this.songServices.setSong(song_id)
  }

}