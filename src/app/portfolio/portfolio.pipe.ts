import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from './portfolio.service';


@Pipe({name: 'PortLangPipe'})
export class PortfolioLanguangesPipe implements PipeTransform {


    object: {[key: string]: number}

    constructor(private portfolioservice : PortfolioService){
 
    }

    transform(value: string): Observable<Map<string, number>> {
        return this.portfolioservice.getProjectLanguanges(value);
    }
}