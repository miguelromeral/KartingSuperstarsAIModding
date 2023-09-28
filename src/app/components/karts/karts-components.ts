import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/modding/vehicle.model';

@Component({
  selector: 'app-kart-base',
  template: '<p>Override the component with the Kart!</p>',
  styles: ['']
})
export class KartBaseComponent implements OnInit {

  @Input() public vehicle: Vehicle = new Vehicle();
  
  ngOnInit(): void {
  }

}