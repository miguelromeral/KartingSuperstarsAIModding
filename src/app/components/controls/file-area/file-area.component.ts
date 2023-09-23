import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Racer } from 'src/app/models/modding/racer.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';

@Component({
  selector: 'app-file-area',
  templateUrl: './file-area.component.html',
  styleUrls: ['./file-area.component.scss']
})
export class FileAreaComponent implements OnInit {

  public racer: Racer = new Racer();
  public racerString: string = '';

  @Output() onChange = new EventEmitter<Racer>();


  constructor(private jsonService: JsonConverterService) { 
    this.jsonService.racer$.subscribe(racer => {
      this.racer = racer;
      this.generateJson();
    });
  }

  ngOnInit(): void {
    this.generateJson();
  }

  generateJson(){
    console.log("Nuevo JSON", this.racer);
    this.racerString = JSON.stringify(this.racer, null, 4);
  }  
}
