import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from '../portfolio.service';
import {Portfolio} from '../portfolio.model';

@Component({
    selector: 'portfolio-list',
    templateUrl: 'portfolio-list.component.html',
    styleUrls: ['portfolio-list.component.css']
})

export class PortfolioListComponent {

    projects : Observable<Portfolio[]>;

    constructor(portfoliosevice : PortfolioService) { 
        this.projects = portfoliosevice.getAllProjects();

       
    }
}