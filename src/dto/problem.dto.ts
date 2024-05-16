import { ProgrammingLanguage, OptimizationLevel } from '../enum/problem.enum';

export type CreateProblemDto = {
  title: string;
  description: string;
  input: string;
  output: string;
  hint: string;
  hintCost: number;
  testcases: Testcase[];
  exampleTestcases: Testcase[];
  starterCode: string;
  solution: string;
  solutionLanguage: ProgrammingLanguage;
  allowedHeaders: string[];
  bannedFunctions: string[];
  timeLimit: number;
  memoryLimit: number;
  difficulty: number;
  score: number;
  optimizationLevel: OptimizationLevel;
  attachments: string[];
  tags: string[];
  credits: string;
}

export type UpdateProblemDto = {
    publicationStatus?: string;
    unlockHint?: boolean;
}

export type Testcase = {
    input: string;
    output: string;
}