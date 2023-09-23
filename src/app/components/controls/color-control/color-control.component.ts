import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/models/modding/color.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';

@Component({
  selector: 'app-color-control',
  templateUrl: './color-control.component.html',
  styleUrls: ['./color-control.component.scss']
})
export class ColorControlComponent implements OnInit {

  @Input() public stringValue: string = '#FF0000';
  @Input() public label: string = 'Color';
  @Input() public id: string = 'colorInput';

  @Output() onChange = new EventEmitter<Color>();

  public colorValue: Color = new Color();

  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
  }

  sendValueToParent(): void {
    this.colorValue = this.jsonService.stringToColor(this.stringValue);
    this.onChange.emit(this.colorValue);
  }
}
