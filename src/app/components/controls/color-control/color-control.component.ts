import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/modding/color.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';

@Component({
  selector: 'app-color-control',
  templateUrl: './color-control.component.html',
  styleUrls: ['./color-control.component.scss']
})
export class ColorControlComponent implements OnInit{

  @Input() public stringValue: string = '#FF0000';
  @Input() public label: string = 'Color';
  @Input() public id: string = 'colorInput';
  public colorValue: Color = Color.default;



  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
    this.colorValue = this.jsonService.stringToColor(this.stringValue);
    console.log(this.colorValue);
    console.log(this.colorValue.toString());
  }
}
