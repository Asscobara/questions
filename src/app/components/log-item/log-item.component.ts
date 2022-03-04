import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IQuestionItem } from 'src/app/model/log.model';

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.scss']
})
export class LogItemComponent implements OnInit {
  
  @Input() public item: IQuestionItem | null = null;
  
  public value: any;

  public myFormControl = new FormControl();
  public myGroup: FormGroup = new FormGroup({'d': this.myFormControl});

  constructor() { console.log(`constructor`); }
  
  ngOnInit(): void {
    console.log(`Init`);
  }
 
  public get type() : string {
    return this.item ? this.item.type : 'text';
  }

  public get options() : string[] {
    return this.item?.options ? this.item.options: [];
  }


  public get showChildren(): boolean {
    return (this.myFormControl.value && this.myFormControl.value === 'y') || this.type !== 'radio';
  }
}
