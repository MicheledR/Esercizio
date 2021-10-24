export class Articolo {
    id!:number;
    abstract:string;
    author:string;
    body:string;
    title:string;
    occhiello:string;
    preview_image:string;
    first_publish_date:string;
    show:boolean;

    constructor(id:number,abstract:string,author,body:string,title:string,occhiello:string,preview_image:string,first_publish_date:string) {
       this.id=id;
       this.abstract=abstract;
       this.first_publish_date=first_publish_date;
       this.author=author;
       this.body=body;
       this.preview_image=preview_image;
       this.title=title;
       this.occhiello=occhiello;
       this.show = false;
    }
}