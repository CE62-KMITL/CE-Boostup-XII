import { apiController } from "../controllers/api.controller";
import { CompileAndRunDto } from "../dto/compile-and-run.dto";
import { CompileAndRunModelResponse } from "../types/response.type";

export const compileAndRunService = {
  compileAndRun: async (compileAndRunRequest: CompileAndRunDto): Promise<CompileAndRunModelResponse> => {
    return await apiController("/compile-and-run", "post", compileAndRunRequest);
  },
};