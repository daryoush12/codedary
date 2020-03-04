import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'; 
import {GameProject} from './gameproject.model';

const itchToken = "c3Tevm9IqkFeI2q8oyJ8rptW8hNiBc0mQCod9emw";
const url = "https://itch.io/api/1/"

@Injectable({providedIn: 'root'})
export class GameProjectService {
    constructor(private http : HttpClient) { }

    getAllGames() : Observable<Map<string, Array<any>>>{
      return this.http.get<Map<string, Array<any>>>("https://itch.io/api/1/c3Tevm9IqkFeI2q8oyJ8rptW8hNiBc0mQCod9emw/my-games");
    }


    getGameGallery(){

    }

    
}