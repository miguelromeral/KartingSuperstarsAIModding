import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Color } from 'src/app/models/modding/color.model';
import { Racer } from 'src/app/models/modding/racer.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';


@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit{

  public racer: Racer = new Racer();

  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
    // Tu lógica aquí
  }


  racerColor1EventListener(nuevaVariable: Color) {
    this.racer.color1 = nuevaVariable;

    console.log(this.racer.color1);
    console.log(this.racer.color1.toString());
    this.jsonService.updateRacer(this.racer);
  }
  
  updateValeListener(){

  }

}
