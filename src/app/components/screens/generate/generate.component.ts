import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormOption } from 'src/app/models/forms/form-option.model';
import { Color } from 'src/app/models/modding/color.model';
import { Racer } from 'src/app/models/modding/racer.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit{

  public racer: Racer = new Racer();
  
  public helmetMaterialsIds: FormOption[] = FormOption.GetFromEnvironment(environment.helmetMaterialsIds);

  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
  }


  racerColor1EventListener(nuevaVariable: Color) {
    this.racer.color1 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
  }
  
  racerHelmetMaterialIdEventListener(helmetMaterialsId: string) {
    this.racer.helmet.materialId = helmetMaterialsId;
    this.jsonService.updateRacer(this.racer);
  }

  updateValeListener(){

  }

}
