import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'; 
import {Portfolio} from './portfolio.model';

@Injectable({providedIn: 'root'})
export class PortfolioService {

   // projectsPath: string = "users/daryoush12/repos";

    constructor(private http: HttpClient) {

     }

    getAllProjects() : Observable<Portfolio[]>{
        const url = 'https://api.github.com/users/daryoush12/repos';
 
        return this.http.get<Portfolio[]>(url);
    }
    getProjectLanguanges(reponame : string) : Observable<Map<string, number>> {
        

        const url = 'https://api.github.com/repos/daryoush12/'+reponame+'/languages';
        console.log(url);
       // console.log(this.http.get<any>(url));
        
        return this.http.get<Map<string, number>>(url);
    }   
}