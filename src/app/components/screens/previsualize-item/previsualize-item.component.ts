import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormOption } from 'src/app/models/forms/form-option.model';
import { JsonConverterService } from 'src/app/services/json-converter.service';

@Component({
  selector: 'app-previsualize-item',
  templateUrl: './previsualize-item.component.html',
  styleUrls: ['./previsualize-item.component.scss']
})
export class PrevisualizeItemComponent implements OnInit{

  @Input() public selectedOption: string = '';
  @Input() public options: FormOption[] = [];
  @ViewChild('container') listElements: ElementRef<HTMLElement> | undefined;

  constructor(private jsonService: JsonConverterService) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['selectedOption']){
      const selectedValue = changes['selectedOption'].currentValue;
      let children = this.listElements?.nativeElement.children || [];

      // Recorre los elementos hijos y agrega una clase
      for (let i = 0; i < children?.length; i++) {
        if(children[i].id == selectedValue){
          children[i].classList.add('ks-preview-item-show');
        }else{
          children[i].classList.remove('ks-preview-item-show');
        }
      }
    }
  }
}
