import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'form-dialog',
  templateUrl: 'form-dialog.component.html'
})

export class FormDialogComponent {
  @ViewChild('Dialog', null) public DialogObj: DialogComponent;

  @Output() public sendValue = new EventEmitter<string>();

  private data: any;
  private value1: any;
  private value2: any;

  public dlgButtons: Object[] = [{ click: this.dlgSubmitBtnClick.bind(this), buttonModel: { content: 'Submit', isPrimary: true } }];
  public target: string = '.control-section';

  public showDialog(args: object): void {
    this.data = args;
    this.value1 = this.data.Id;
    this.value2 = this.data.Name;
    this.DialogObj.show();
  }

  public dlgSubmitBtnClick(): void {
    this.DialogObj.hide();
    if (this.data.Id === 1 || this.data.Id === 3) {
      this.sendValue.emit('Open Link');
    } else {
      this.sendValue.emit('Show Image or GIF');
    }
  }
}
