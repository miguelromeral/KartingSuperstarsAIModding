import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  public stringValue: string = '';
  @Output() onChange = new EventEmitter<string>();

  constructor(private jsonService: JsonConverterService) { }

  ngOnInit(): void {
    if(this.defaultValue != ''){
      this.stringValue = this.defaultValue;
    }
  }

  sendValueToParent(): void {
    this.onChange.emit(this.stringValue);
  }
}
