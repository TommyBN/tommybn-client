import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, SINGLE_QUOTE, TAB } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['../add-job.component.css']
})
export class ChipsComponent implements OnInit {

  @Input() placeholder: string;
  @Input() formControl: FormControl;
  @Input() chips:string[] = [];
  @Output() emitChips:EventEmitter<string[]> = new EventEmitter<string[]>();
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, SINGLE_QUOTE, TAB];


  constructor() { }

  ngOnInit() { }

    //add chip
    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        this.chips.push(value.trim());
        this.emitChips.emit(this.chips)
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
    }
  
    remove(chip): void {
      const index = this.chips.indexOf(chip);
  
      if (index >= 0) {
        this.chips.splice(index, 1);
        this.emitChips.emit(this.chips)
      }
    }
  

}
