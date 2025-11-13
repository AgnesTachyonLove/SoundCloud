import { Component, OnInit } from '@angular/core';
import { IonFooter, IonToolbar, IonAvatar, IonButton, IonRange, IonIcon } from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';
import { SongServices } from 'src/app/servicios/song-services';
import { ApiServices, SongResponse } from 'src/app/servicios/api-services';
import { AudioService } from 'src/app/servicios/audio-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.component.html',
  styleUrls: ['./musicplayer.component.scss'],
  standalone: true,
  imports: [
    IonFooter, IonToolbar, IonAvatar, IonButton, IonRange, NgIf, IonIcon
  ]
})
export class MusicplayerComponent implements OnInit {
  currentSong: SongResponse | null = null;
  duration = 0;
  currentTime = 0;
  volume = 1;
  isPlaying = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private song_services: SongServices,
    private api: ApiServices,
    public audioService: AudioService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.song_services.id$.subscribe(song_id => {
        if (song_id !== null) {
          this.api.getSongs().subscribe(songs => {
            this.currentSong = songs.find(s => s.id === song_id) || null;

            if (this.currentSong) {
              this.api.playSelectedSong(song_id).subscribe(res => {
                const audioUrl = res.streaming_url;  // url d3 la s3
                this.audioService.play(audioUrl);    // psar string altiro
              });
            }
          });
        }
      })
    );

    this.subscriptions.push(
      this.audioService.isPlaying$.subscribe(status => this.isPlaying = status)
    );


    this.subscriptions.push(
      this.audioService.currentTime$.subscribe(time => this.currentTime = time)
    );
    this.subscriptions.push(
      this.audioService.duration$.subscribe(dur => this.duration = dur)
    );
  }

  togglePlayPause() {
    this.audioService.toggle();
  }

  seekTo(event: any) {
    this.audioService.seek(event.detail.value);
  }

  setVolume(event: any) {
    this.volume = event.detail.value;
    this.audioService.setVolume(this.volume);
  }

  stopAudio() {
    this.audioService.stop();
    this.currentSong = null;
  }

  formatTime(time: number) {
    if (!time) return '0:00';
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
