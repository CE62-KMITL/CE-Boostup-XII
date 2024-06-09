import { ResultCode } from "../enum/compile-and-run.enum";

export interface CompileAndRunOutput {
    runtimeOutput: string;
    executionTime?: number;
    executionMemory?: number;
    code?: ResultCode;
    exitSignal?: number;
}