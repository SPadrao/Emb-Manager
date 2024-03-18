import { Component, OnInit, Input } from "@angular/core";
import { DoorsModuleService } from "../services/doors-modules.service";
import { TestFileService } from "../services/test-files.service";
import { AuxiliarFileService } from "../services/auxiliar-files.service";
import { ReviewRecord } from "../models.model";
import { Cycle } from "../models.model";
import { DoorsModule } from "../models.model";
import { TestFile } from "../models.model";
import { AuxiliarFile } from "../models.model";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})

export class ReviewComponent implements OnInit{

  review_records: ReviewRecord[];

  selectedRRCode!: string;

  cycles: Cycle[];

  selectedCycle!: number;

  doors_modules!: DoorsModule[];

  test_files!: TestFile[];

  auxiliar_files!: AuxiliarFile[];

  eprs_visited_by_last_recompute: string[] = ['*************', '*************']

  review_flag: boolean = false;

  displayAddReviewRecord: boolean = false;
  displayNewCycle: boolean = false;

  constructor(private dmService: DoorsModuleService, private afService: AuxiliarFileService, private tfService: TestFileService) {
    this.review_records = [
      { name: '*********** * ****** ****** ** *********** ***** **************** * ********', code: '***********' }
    ];

    this.cycles = [{ name: 'Cycle 1', code: 1 },
    { name: 'Cycle 2', code: 2 }
    ];
  }
 
  ngOnInit() {
    this.dmService.getDoorsModule().then(data => this.doors_modules = data);
    this.tfService.getTestFile().then(data => this.test_files = data);
    this.afService.getAuxiliarFile().then(data => this.auxiliar_files = data);
  }

  showAddReviewRecord() {
    this.displayAddReviewRecord = !this.displayAddReviewRecord;
  }

  showNewCycle() {
    this.displayNewCycle = !this.displayNewCycle;
  }

  hideAddReviewRecord(show: boolean) {
    this.displayAddReviewRecord = show;
  }

  hideNewCycle(show: boolean) {
    this.displayNewCycle = show;
  }

}
