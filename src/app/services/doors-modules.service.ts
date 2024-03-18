import { Injectable } from '@angular/core';
import { DoorsModule } from '../models.model';

@Injectable({
  providedIn: 'root'
})

export class DoorsModuleService {
  constructor() { }

  getDoorsModule(): Promise<DoorsModule[]> {
    const dm: DoorsModule[] = [
      {full_path: '**** * ************** * ************************',
        baseline: '***'},
      {full_path: '**** * ************** * ************************',
        baseline: '****'}
    ]
    return new Promise(resolve => {
      resolve(dm)
    })
  }
}
