export default interface IProblem {
    description: string;
    input: string;
    output: string;
    hint: string;
    hintCost: number;
    testcases: string[];
    exampleTestcases: string[];
    exampleTestcases: string[];
    starterCode: string;
    solution: string;
    solutionLanguage: string;
    allowedHeaders: string[];
    bannedFunctions: string[];
    timeLimit: number;
    memoryLimit: number;
    optimizationLevel: number;
    attachments: string[];
    tags: string[];
    owner: string;
    credits: number;
    publicationStatus: string;
}