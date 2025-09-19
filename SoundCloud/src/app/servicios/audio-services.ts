import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AudioService {
  private audio: HTMLAudioElement | null = null;
  public isPlaying$ = new BehaviorSubject<boolean>(false);
  public currentTime$ = new BehaviorSubject<number>(0);
  public duration$ = new BehaviorSubject<number>(0);

  play(url?: string) {
    if (!this.audio) {
      this.audio = new Audio();
      this.setupEvents();
    }

    if (url) {
      this.audio.src = url;
      this.audio.load();
    }

    this.audio.play()
      .then(() => this.isPlaying$.next(true))
      .catch(err => console.error("Error al reproducir:", err));
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying$.next(false);
  }

  toggle() {
    if (this.isPlaying$.value) this.pause();
    else this.play();
  }

  stop() {
    if (!this.audio) return;
    this.pause();
    this.audio.src = '';
    this.audio = null;
    this.isPlaying$.next(false);
    this.currentTime$.next(0);
    this.duration$.next(0);
  }

  seek(time: number) {
    if (!this.audio) return;
    this.audio.currentTime = time;
    this.currentTime$.next(time);
  }

  setVolume(vol: number) {
    if (!this.audio) return;
    this.audio.volume = vol;
  }

  private setupEvents() {
    if (!this.audio) return;

    this.audio.ontimeupdate = () => {
      this.currentTime$.next(this.audio!.currentTime);
    };

    this.audio.onloadedmetadata = () => {
      this.duration$.next(this.audio!.duration);
    };

    this.audio.onended = () => {
      this.isPlaying$.next(false);
      this.currentTime$.next(0);
    };
  }
}
