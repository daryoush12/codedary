import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'; 
import {GameProject} from './gameproject.model';

const itchToken = "c3Tevm9IqkFeI2q8oyJ8rptW8hNiBc0mQCod9emw";
const url = "https://itch.io/api/1/"

@Injectable({providedIn: 'root'})
export class GameProjectService {
    constructor(private http : HttpClient) { }

    getAllGames() : Observable<Map<string, Object>>{
      return this.http.get<Map<string, Object>>("http://127.0.0.1:5000/games/");
    }


    getGameGallery(){

    }

    
}