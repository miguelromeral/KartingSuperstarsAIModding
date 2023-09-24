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

  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
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
    this.racer.color1 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
  }
  racerColor2EventListener(nuevaVariable: Color) {
    this.racer.color2 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
  }
  racerColor3EventListener(nuevaVariable: Color) {
    this.racer.color3 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
  }
  racerColor4EventListener(nuevaVariable: Color) {
    this.racer.color4 = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
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

  /* Vehicle */
  racerVehicleMaterialEventListener(nuevaVariable: string) {
    this.racer.vehicles[0].materialId = nuevaVariable;
    this.jsonService.updateRacer(this.racer);
  }
}
