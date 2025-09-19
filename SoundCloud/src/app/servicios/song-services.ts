import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";



@Injectable({providedIn: 'root'})

export class SongServices{

    constructor (){}


    private id = new BehaviorSubject<number | null> (null)
    id$ = this.id.asObservable()


    setSong(song_id:number){
        this.id.next(song_id)
    }
    
    skipToNextSong(song_id: number) {
        this.id.next(song_id)
    }
    
    
}


