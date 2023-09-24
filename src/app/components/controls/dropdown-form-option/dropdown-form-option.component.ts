import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormOption } from 'src/app/models/forms/form-option.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';

@Component({
  selector: 'app-dropdown-form-option',
  templateUrl: './dropdown-form-option.component.html',
  styleUrls: ['./dropdown-form-option.component.scss']
})
export class DropdownFormOptionComponent implements OnInit{

  @Input() public id: string = 'selectInput';
  @Input() public label: string = 'Select';
  @Input() public defaultValue: string = '';
  @Input() public options: FormOption[] = [];
  @Input() public stringValue: string = '';
  @Output() onChange = new EventEmitter<string>();

  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
    if(this.defaultValue != ''){
      this.stringValue = this.defaultValue;
    }
  }
  
  // ngOnChanges(changes: SimpleChanges){
  //   if(changes['stringValue']){
  //     const nuevoValor = changes['stringValue'].currentValue;
      
  //   }
  // }

  sendValueToParent(): void {
    this.onChange.emit(this.stringValue);
  }
}
