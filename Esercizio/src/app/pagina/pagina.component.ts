import { Component, Input, OnInit } from '@angular/core';
import { Articolo } from '../model/articolo';
import { ServizioEsercizioService } from '../servizio-esercizio.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  listaArticolo:Articolo[];
  articolo:Articolo;
  view:boolean;
  @Input()
  url:string="";
  constructor(private gridService:ServizioEsercizioService){  
 
    //console.log(this.articolo[0].body);


  }

  ngOnInit(): void {
  }

  search(){
    if(this.url==""){
      this.view=true;
    const onsucces = (result:any)=>{
      this.listaArticolo = result;
      console.log(this.listaArticolo[1].body);
    }
    const onerror=()=>{
      console.log("errore getallEvent");
    }
    this.gridService.getAllArticoli().subscribe(onsucces,onerror);    
  }
  else{
    this.view=false;
    const onsucces = (result:any)=>{
      this.articolo = result;
      console.log(this.articolo.body);
    }
    const onerror=()=>{
      console.log("errore getallEvent");
    }
    this.gridService.getArticolo(this.url).subscribe(onsucces,onerror);    
  }
  }
}
