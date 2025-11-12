import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonIcon,
  IonProgressBar,

} from '@ionic/angular/standalone';
import { SongServices } from 'src/app/servicios/song-services';
import { ApiServices } from 'src/app/servicios/api-services';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-ionic-infinite-scroll',
  templateUrl: './ionic-infinite-scroll.component.html',
  styleUrls: ['./ionic-infinite-scroll.component.scss'],
  standalone: true,
  imports: [
    IonAvatar, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent, 
    IonItem, 
    IonLabel, 
    IonList,
    IonButton,
    IonIcon,
    IonProgressBar,
    NgIf
  ],
})

export class IonicInfiniteScrollComponent implements OnInit {
  items: any[] = [];
  constructor(private api: ApiServices, private songServices: SongServices, 
    private alertCtrl: AlertController){}
  


  ngOnInit() {
    this.loadSongs();
  }
  

  isDownloading = false;
  downloadProgress = 0;
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
    this.songServices.setSong(song_id)
  }




/*

downloadSong(song_id: number, song_name: string): void {
  this.isDownloading = true;
  this.downloadProgress = 0;

  this.api.download_song(song_id, { reportProgress: true }).subscribe({
    next: async (event: any) => {
      if (event.type === HttpEventType.DownloadProgress) {
        const total = event.total ?? 1;
        this.downloadProgress = event.loaded / total;
      } else if (event.type === HttpEventType.Response) {
        this.isDownloading = false;
        const blob = event.body;
        const base64 = await this.blobToBase64(blob);
        const filename = `${song_name}.mp3`;


        await Filesystem.writeFile({
          path: filename,
          data: base64,
          directory: Directory.Documents,
          recursive: true
        });

        await Preferences.set({
          key: `song_${song_name}`,
          value: JSON.stringify({ name: song_name, path: filename })
        });

        this.downloadProgress = 0;
      }
    },
    error: async (err) => {
      this.isDownloading = false;
      this.downloadProgress = 0;
      await this.mostrarError();
      console.error('Error de descarga', err);
    }
  });
}

private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        const base64 = dataUrl.split(',')[1];
        resolve(base64);
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(blob);
    });
  }

*/


  async mostrarError() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Ha ocurrido un error al descargar la canción',
      buttons: ['OK']
    });
    await alert.present();
  } 
}