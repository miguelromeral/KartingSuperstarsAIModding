import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/models/modding/color.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';

@Component({
  selector: 'app-color-control',
  templateUrl: './color-control.component.html',
  styleUrls: ['./color-control.component.scss']
})
export class ColorControlComponent implements OnInit {

  public stringValue: string = '';
  @Input() public defaultValue: string = '#FFFFFF';
  @Input() public label: string = 'Color';
  @Input() public id: string = 'colorInput';

  @Output() onChange = new EventEmitter<Color>();

  public colorValue: Color = new Color();

  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
    if(this.defaultValue != ''){
      this.stringValue = this.defaultValue;
    }
  }

  sendValueToParent(): void {
    this.colorValue = this.jsonService.stringToColor(this.stringValue);
    this.onChange.emit(this.colorValue);
  }
}
