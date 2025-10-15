import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap, map, of } from 'rxjs';

interface LoginResponse {
  success: boolean;
  username: string;
  password: string;
  error_message?: string;
}

interface TokenResponse {
  access: string;
  refresh: string;
}


interface RegisterResponse {
  response: boolean | null
}


export interface SongResponse {
  id: number;
  name: string;
  url: string;
  image_url: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServices {
  private apiUrl = 'http://127.0.0.1:8000/SC';

  constructor(private http: HttpClient) {}
  /** 
   * 
   * 
   * responseUserData(username: string, password: string): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(`${this.apiUrl}/login/`, { username, password });
    }
  */

  getSongs(): Observable<SongResponse[]> {
    return this.http.get<SongResponse[]>(`${this.apiUrl}/songs/`);
  }

  playSelectedSong(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/streaming/${id}`, { responseType: 'blob' });
  }

  // obtiene el token y lo guarda en localStorage
  loginUser(username: string, password: string): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/api/token/`, { username, password })
      .pipe(
        tap((tokens: TokenResponse) => this.setToken(tokens))
      );
  }

  // guuardar tokens en localStorage
  setToken(tokens: TokenResponse): void {
    localStorage.setItem("access", tokens.access);
    localStorage.setItem("refresh", tokens.refresh);
  }

  // obbtener access token (para ponerlo en headers)
  getAccessToken(): string | null {
    return localStorage.getItem("access");
  }

  // refresh token
  getRefreshToken(): string | null {
    return localStorage.getItem("refresh");
  }

  // borrar sesión
  clearTokens(): void {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }


  //crear usuario
  userRegister = (username: string, password: string): Observable<RegisterResponse> => {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register/`, {username, password})
  }
}