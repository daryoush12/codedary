export class Portfolio {
    name : string;
    description : string;
    html_url: string;
    homepage: string;
    
    constructor(name : string){
        this.name = name;
    }

    hasDescription() : boolean{ return(this.description.length > 0); }
}
