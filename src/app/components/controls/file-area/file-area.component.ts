import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Color } from 'src/app/models/modding/color.model';
import { DriverSkin } from 'src/app/models/modding/driver-skin.model';
import { Helmet } from 'src/app/models/modding/helmet.model';
import { Racer } from 'src/app/models/modding/racer.model';
import { Vehicle } from 'src/app/models/modding/vehicle.model';
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

  onChangeTextArea(event: any){
    try{
      const generated = JSON.parse(event.target.value);
      const newRacer = new Racer(
        generated.racerName,
        new DriverSkin(
          generated.driverSkin.id,
          generated.driverSkin.materialId,
          new Color(
            generated.driverSkin.color1.r,
            generated.driverSkin.color1.g,
            generated.driverSkin.color1.b
          ),
          new Color(
            generated.driverSkin.color2.r,
            generated.driverSkin.color2.g,
            generated.driverSkin.color2.b
          ),
          new Color(
            generated.driverSkin.color3.r,
            generated.driverSkin.color3.g,
            generated.driverSkin.color3.b
          ),
          new Color(
            generated.driverSkin.color4.r,
            generated.driverSkin.color4.g,
            generated.driverSkin.color4.b
          )
        ),
        new Helmet(
          generated.helmet.id,
          generated.helmet.materialId,
          generated.helmet.visorId,
          new Color(
            generated.helmet.color1.r,
            generated.helmet.color1.g,
            generated.helmet.color1.b
          ),
          new Color(
            generated.helmet.color2.r,
            generated.helmet.color2.g,
            generated.helmet.color2.b
          ),
          new Color(
            generated.helmet.color3.r,
            generated.helmet.color3.g,
            generated.helmet.color3.b
          ),
          new Color(
            generated.helmet.color4.r,
            generated.helmet.color4.g,
            generated.helmet.color4.b
          )
        ),
        generated.idleAnimation,
        generated.celebrationAnimation,
        [
          new Vehicle(
            generated.vehicles[0].id,
            generated.vehicles[0].materialId,
            new Color(
              generated.vehicles[0].liveryColor1.r,
              generated.vehicles[0].liveryColor1.g,
              generated.vehicles[0].liveryColor1.b
            ),
            new Color(
              generated.vehicles[0].liveryColor2.r,
              generated.vehicles[0].liveryColor2.g,
              generated.vehicles[0].liveryColor2.b
            ),
            new Color(
              generated.vehicles[0].liveryColor3.r,
              generated.vehicles[0].liveryColor3.g,
              generated.vehicles[0].liveryColor3.b
            ),
            new Color(
              generated.vehicles[0].liveryColor4.r,
              generated.vehicles[0].liveryColor4.g,
              generated.vehicles[0].liveryColor4.b
            ),
            new Color(
              generated.vehicles[0].frameColor.r,
              generated.vehicles[0].frameColor.g,
              generated.vehicles[0].frameColor.b
            ),
            new Color(
              generated.vehicles[0].metalHighlightsColor.r,
              generated.vehicles[0].metalHighlightsColor.g,
              generated.vehicles[0].metalHighlightsColor.b
            ),
            new Color(
              generated.vehicles[0].wheelHubColor.r,
              generated.vehicles[0].wheelHubColor.g,
              generated.vehicles[0].wheelHubColor.b
            ),
            new Color(
              generated.vehicles[0].steeringWheelColor1.r,
              generated.vehicles[0].steeringWheelColor1.g,
              generated.vehicles[0].steeringWheelColor1.b
            ),
            new Color(
              generated.vehicles[0].steeringWheelColor2.r,
              generated.vehicles[0].steeringWheelColor2.g,
              generated.vehicles[0].steeringWheelColor2.b
            ),
            generated.vehicles[0].symbol
          )
        ]
      );
      this.onChange.emit(newRacer);
    }catch(e){
      console.error("Error when parsing new value", e);
    }
  }
}
