import { Component} from '@angular/core';

@Component({
    selector: 'blog-list',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})

export class BlogComponent {

    blogs_to_show:number = 3;

    constructor() { 


    }
}