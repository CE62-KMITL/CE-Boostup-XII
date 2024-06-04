import { ProgrammingLanguage, OptimizationLevel, WarningLevel } from "../enum/compile-and-run.enum";

export type CompileAndRunDto = {
  language: ProgrammingLanguage;
  optimizationLevel: OptimizationLevel;
  warningLevel?: WarningLevel;
  code: string;
  inputs: string[];
  allowedHeaders: string[] | null;
  bannedFunctions: string[];
  timeLimit: number;
  memoryLimit?: number;
  compilationTimeLimit?: number;
  compilationMemoryLimit?: number;
  formattedDiagnostic: boolean;
}