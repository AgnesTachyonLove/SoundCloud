import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


interface LoginResponse{
    success: boolean,
    username: string,
    password: string,
    error_message?: string,
}
export interface SongResponse
{
    id: number,
    name: string,
    url: string,
    image_url: string,

}

@Injectable({providedIn:'root'})

export class ApiServices{
    private apiUrl= 'http://localhost:8000/SC/test'
    constructor(
        private http : HttpClient,
    ) {}
                        //parametros de la funcion        retorno de la funcion
    responseUserData = (username: string, password:string):Observable<LoginResponse> => {
                            //tipo retorno   construccion de la solicitud
        return this.http.post<LoginResponse>(this.apiUrl, {username,password})     
    }

    getSongs = (): Observable <SongResponse []> => {
        const apiUrl = 'http://localhost:8000/SC/songs/'
        return this.http.get<SongResponse []>(apiUrl)
    }

    playSelectedSong = (id:number): Observable <Blob> => {
        const apiUrl = 'http://localhost:8000/SC/streaming/' +  id
        return this.http.get(apiUrl,{responseType: 'blob'})
    }
}