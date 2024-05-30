import { useMutation } from "react-query";
import { CompileAndRunDto } from "../../dto/compile-and-run.dto";
import { compileAndRunService } from "../../services/compiler-and-run.service";

export const useCompileAndRun = () => {
    const compileAndRunMutation = useMutation(async (compileAndRunRequest: CompileAndRunDto) => {
        const response = await compileAndRunService.compileAndRun(compileAndRunRequest);
        return response;
    });

    return {
        compileAndRunMutation,
    };
};