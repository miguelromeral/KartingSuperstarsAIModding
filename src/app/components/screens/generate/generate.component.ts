import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { FormOption } from 'src/app/models/forms/form-option.model';
import { Color } from 'src/app/models/modding/color.model';
import { DriverSkin } from 'src/app/models/modding/driver-skin.model';
import { Helmet } from 'src/app/models/modding/helmet.model';
import { Racer } from 'src/app/models/modding/racer.model';
import { Vehicle } from 'src/app/models/modding/vehicle.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit{
  
  /* Driver */
  public driverSkinIds: FormOption[] = FormOption.GetFromEnvironment(environment.driverSkinIds);
  public driverSkinMaterialIds: FormOption[] = FormOption.GetFromEnvironment(environment.driverSkinMaterialIds);
  public idsAnimations: FormOption[] = FormOption.GetFromEnvironment(environment.idsAnimations);
  public celebrationAnimations: FormOption[] = FormOption.GetFromEnvironment(environment.celebrationAnimations);

  /* Helmet */
  public helmetIds: FormOption[] = FormOption.GetFromEnvironment(environment.helmetIds);
  public helmetMaterialsIds: FormOption[] = FormOption.GetFromEnvironment(environment.helmetMaterialsIds);
  public visorIds: FormOption[] = FormOption.GetFromEnvironment(environment.visorIds);

  /* Vehicle */
  public vehicleMaterialIds: FormOption[] = FormOption.GetFromEnvironment(environment.vehicleMaterialIds);

  
  public racer: Racer; 

  constructor(private jsonService: JsonConverterService, private cdr: ChangeDetectorRef) { 
    this.racer = new Racer(
      'Miguel Romeral', 
      new DriverSkin(
        this.driverSkinIds[0].value,
        this.driverSkinMaterialIds[0].value,
        new Color(),
        new Color(),
        new Color(),
        new Color()
      ),
      new Helmet(
        this.helmetIds[0].value,
        this.helmetMaterialsIds[0].value,
        this.visorIds[0].value,
        new Color(),
        new Color(),
        new Color()
      ),
      this.idsAnimations[0].value,
      this.celebrationAnimations[0].value,
      [new Vehicle(
        'standard-kart',
        this.vehicleMaterialIds[0].value,
        new Color(200,200,200),
        new Color(255,0,0),
        new Color(0,0,255),
        new Color(0,255,0),
        new Color(),
        new Color(),
        new Color(),
        new Color(),
        new Color(),
        1
      )]);
  }

  ngOnInit(): void {
    this.jsonService.updateRacer(this.racer);
    this.jsonService.racer$.subscribe((newRacer) => {
      this.racer = newRacer;
    });
  }

  racerRacerNameEventListener() {
    this.jsonService.updateRacer(this.racer);
  }

  /* Driver */
  racerDriverSkinEventListener(newValue: string) {
    this.racer.driverSkin.id = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerDriverSkinMaterialEventListener(newValue: string) {
    this.racer.driverSkin.materialId = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerAnimationEventListener(newValue: string) {
    this.racer.idleAnimation = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerCelebrationAnimationsEventListener(newValue: string) {
    this.racer.celebrationAnimation = newValue;
    this.jsonService.updateRacer(this.racer);
  }

  racerColor1EventListener(nuevaVariable: Color) {
    this.racer.driverSkin.color1 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(nuevaVariable, "suit-color-2");
  }
  racerColor2EventListener(nuevaVariable: Color) {
    this.racer.driverSkin.color2 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(nuevaVariable, "suit-color-3");
  }
  racerColor3EventListener(nuevaVariable: Color) {
    this.racer.driverSkin.color3 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(nuevaVariable, "suit-color-4");
  }
  racerColor4EventListener(nuevaVariable: Color) {
    this.racer.driverSkin.color4 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(nuevaVariable, "suit-color-1");
  }

  /* Helmet */
  
  racerHelmetIdEventListener(helmetId: string) {
    this.racer.helmet.id = helmetId;
    this.jsonService.updateRacer(this.racer);
  }

  racerHelmetMaterialIdEventListener(helmetMaterialsId: string) {
    this.racer.helmet.materialId = helmetMaterialsId;
    this.jsonService.updateRacer(this.racer);
  }

  racerHelmetVisorEventListener(visorId: string) {
    this.racer.helmet.visorId = visorId;
    this.jsonService.updateRacer(this.racer);
  }
  racerHelmetColor1EventListener(newValue: Color) {
    this.racer.helmet.color1 = newValue;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(newValue, "helmet-color2");
  }
  racerHelmetColor2EventListener(newValue: Color) {
    this.racer.helmet.color2 = newValue;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(newValue, "helmet-color3");
  }
  racerHelmetColor3EventListener(newValue: Color) {
    this.racer.helmet.color3 = newValue;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(newValue, "helmet-color4");
  }
  racerHelmetColor4EventListener(newValue: Color) {
    this.racer.helmet.color4 = newValue;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(newValue, "ks-helmet");
  }

  /* Vehicle */
  racerVehicleMaterialEventListener(nuevaVariable: string) {
    this.racer.vehicles[0].materialId = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
  }

  racerVehicleLiveryColor1EventListener(newValue: Color) {
    this.racer.vehicles[0].liveryColor1 = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerVehicleLiveryColor2EventListener(newValue: Color) {
    this.racer.vehicles[0].liveryColor2 = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerVehicleLiveryColor3EventListener(newValue: Color) {
    this.racer.vehicles[0].liveryColor3 = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerVehicleLiveryColor4EventListener(newValue: Color) {
    this.racer.vehicles[0].liveryColor4 = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerVehicleFrameColorEventListener(newValue: Color) {
    this.racer.vehicles[0].frameColor = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerVehicleMetalHighlightsEventListener(newValue: Color) {
    this.racer.vehicles[0].metalHighlightsColor = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerVehicleWheelHubColorEventListener(newValue: Color) {
    this.racer.vehicles[0].wheelHubColor = newValue;
    this.jsonService.updateRacer(this.racer);
    this.changeColorsByClassName(newValue, "ks-kart-wheelhub");
  }
  racerVehicleSteeringWheelColor1EventListener(newValue: Color) {
    this.racer.vehicles[0].steeringWheelColor1 = newValue;
    this.jsonService.updateRacer(this.racer);
  }
  racerVehicleSteeringWheelColor2EventListener(newValue: Color) {
    this.racer.vehicles[0].steeringWheelColor2 = newValue;
    this.jsonService.updateRacer(this.racer);
  }

  racerVehicleSymbolEventListener() {
    this.jsonService.updateRacer(this.racer);
  }

  /* Text Area */
  racerJsonGeneratedEventListener(newRacer: Racer){
    this.racer = newRacer;
    this.jsonService.updateRacer(this.racer);
    
    this.changeColorsByClassName(this.racer.driverSkin.color1, "suit-color-2");
    this.changeColorsByClassName(this.racer.driverSkin.color2, "suit-color-3");
    this.changeColorsByClassName(this.racer.driverSkin.color3, "suit-color-4");
    this.changeColorsByClassName(this.racer.driverSkin.color4, "suit-color-1");

    this.changeColorsByClassName(this.racer.helmet.color1, "helmet-color2");
    this.changeColorsByClassName(this.racer.helmet.color2, "helmet-color3");
    this.changeColorsByClassName(this.racer.helmet.color3, "helmet-color4");
    this.changeColorsByClassName(this.racer.helmet.color4, "ks-helmet");
    
    this.cdr.detectChanges();
  }

  
  /* Utilities */
  public changeColorsByClassName(color: Color, className: string){
    let elements = document.getElementsByClassName(className);
    
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      element.style.backgroundColor = color.toStringHex();
    }
  }
}
