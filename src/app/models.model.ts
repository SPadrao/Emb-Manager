export interface ReviewRecord {
  name: string,
  code: string
}

export interface Cycle {
  name: string,
  code: number
}

export type DoorsModule = {
  full_path: string,
  baseline: string
}

export type TestFile = {
  vc: string,
  component_folder: string,
  in_this_cycle: boolean,
  svn_revision_on_last_recompute: number,
  reviewer: string,
  needs_review: boolean,
  review_reason: string[],
  aplicability: string,
  auxiliar_files: string[],
  needs_evidence: boolean,
  review: boolean
}

export interface AuxiliarFile {
  name: string,
  current_revision: number,
  vcs: string[]
}
