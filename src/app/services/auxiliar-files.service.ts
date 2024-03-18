import { Injectable } from '@angular/core';
import { AuxiliarFile } from '../models.model';

@Injectable({
  providedIn: 'root'
})

export class AuxiliarFileService {
  constructor() { }

  getAuxiliarFile(): Promise<AuxiliarFile[]> {
    const af: AuxiliarFile[] = [
      {name: '*****************',
        current_revision: 12345,
        vcs:['*************************',
        '*************************']},
      {name: '*****************',
        current_revision: 12346,
        vcs:['*************************',
        '*************************']},
    ]
    return new Promise(resolve => {
      resolve(af)
    })
  }
}
