import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DoorsModule } from './create-new-cycle.model'

@Component({
  selector: 'app-create-new-cycle',
  templateUrl: './create-new-cycle.component.html',
  styleUrl: './create-new-cycle.component.css'
})
export class CreateNewCycleComponent {
  @Input() show: boolean = false;
  @Output() hide = new EventEmitter<boolean>();

  chipsValues: string[] = [];
  modules!: DoorsModule[];
  tableData: DoorsModule[] = [];

  eprJiraFilterInput!: string;

  selectedLocation!: string;
  selectedBaseline!: string;

  constructor() {
    this.modules = [
      { location: '***** * ****************** * *************************', baseline: '**** ********' },
      { location: '***** * ****************** * *********************', baseline: '**** ********' },

    ];
  }
  removeRow(location: string) {
    this.tableData = this.tableData.filter((u) => u.location !== location);
  }

  addRow(newItem: DoorsModule) {
    const found = this.tableData.filter((obj) => {
      return obj.location === newItem.location;
    });

    if (found.length == 0)
      this.tableData = [newItem, ...this.tableData]
  }

  isEmpty() {
    return (!this.selectedLocation || this.selectedBaseline.trim() === "");
  }

  submmitStatus() {
    return (this.isEmpty() || this.tableData.length === 0 ? true : false);
  }

  setHide() {
    this.hide.emit(this.show);
  }
}


