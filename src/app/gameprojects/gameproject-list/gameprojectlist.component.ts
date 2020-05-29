import { Component} from '@angular/core';
import { GameProjectService } from '../gameproject.service';
import { Observable } from 'rxjs';
import { GameProject } from '../gameproject.model';

@Component({
    selector: 'gameproject-list',
    templateUrl: './gameprojectlist.component.html',
    styleUrls: ['./gameprojectlist.component.css']
})

export class GameProjectListComponent  {

    gameprojects : Observable<Map<string, Object>>;

    constructor(private gpservice : GameProjectService) {
        this.gameprojects = gpservice.getAllGames();
        console.log(this.gameprojects);
     }

 
}