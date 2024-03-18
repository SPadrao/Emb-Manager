import { Injectable } from '@angular/core';
import { TestFile } from '../models.model';

@Injectable({
  providedIn: 'root'
})

export class TestFileService {
  constructor() { }

  getTestFile(): Promise<TestFile[]> {
    const tf: TestFile[] = [
      {vc: '***********************',
        component_folder: '***',
        in_this_cycle: true,
        svn_revision_on_last_recompute: 12345,
        reviewer: '*******',
        needs_review: true,
        review_reason: ['*** **** ********', '** ***** *****'],
        aplicability: 'unknown',
        auxiliar_files: ['**********************', '***********'],
        needs_evidence: true,
        review: true},
    ]
    return new Promise(resolve => {
      resolve(tf)
    })
  }
}
