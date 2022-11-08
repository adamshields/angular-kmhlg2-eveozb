import { Component, ViewEncapsulation, ViewChild, Output, EventEmitter } from '@angular/core';
import { SelectEventArgs } from '@syncfusion/ej2-angular-dropdowns';

import { FormDialogComponent } from './form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild(FormDialogComponent, null) private formDialog: FormDialogComponent;

  @Output() eventEmitter = new EventEmitter();

  public fields: Object = { text: 'Name', value: 'Id' };

  public data: { [key: string]: Object; }[] = [
    { Name: 'Australia', Id: 0 },
    { Name: 'Bermuda', Id: 1 },
    { Name: 'Canada', Id: 2 },
    { Name: 'Cameroon', Id: 3 }
  ];

  public actionType: string;

  public optionData: string[] = ['Open Link', 'Show Image or GIF'];

  onSelect(args: SelectEventArgs) {
    this.formDialog.showDialog(args.itemData);
  }

  setAction(args: string){
    this.actionType = args;
  }
}
