import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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

  @Input() public colorValue: Color = new Color();

  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
    if(this.defaultValue != ''){
      this.stringValue = this.defaultValue;
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['colorValue']){
      const nuevoValor = changes['colorValue'].currentValue;
      this.colorValue = new Color(
        nuevoValor.r,
        nuevoValor.g,
        nuevoValor.b,
      );
      this.stringValue = this.colorValue.toStringHex();
    }
  }

  sendValueToParent(): void {
    this.colorValue = this.jsonService.stringToColor(this.stringValue);
    this.onChange.emit(this.colorValue);
  }
}
