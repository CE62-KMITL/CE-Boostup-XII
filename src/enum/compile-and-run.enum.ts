export enum ProgrammingLanguage {
    C99 = 'c99',
    C11 = 'c11',
    C17 = 'c17',
    CPP11 = 'c++11',
    CPP14 = 'c++14',
    CPP17 = 'c++17',
    CPP20 = 'c++20',
    CPP23 = 'c++23',
    GNU99 = 'gnu99',
    GNU11 = 'gnu11',
    GNU17 = 'gnu17',
    GNUPP11 = 'gnu++11',
    GNUPP14 = 'gnu++14',
    GNUPP17 = 'gnu++17',
    GNUPP20 = 'gnu++20',
    GNUPP23 = 'gnu++23',
}

export enum OptimizationLevel {
    O0 = 'O0',
    Og = 'Og',
    O1 = 'O1',
    O2 = 'O2',
    O3 = 'O3',
    Os = 'Os',
    Ofast = 'Ofast',
}

export enum WarningLevel {
    Default = 'default',
    All = 'all',
    Extra = 'extra',
    Pedantic = 'pedantic',
}

export enum ResultCode {
    AC = 'AC', // Accepted
    WA = 'WA', // Wrong Answer
    IR = 'IR', // Invalid Return
    RE = 'RE', // Runtime Error
    HNA = 'HNA', // Header Not Allowed
    FNA = 'FNA', // Function Not Allowed
    COLE = 'COLE', // Compilation Output Limit Exceeded
    CTLE = 'CTLE', // Compilation Time Limit Exceeded
    CMLE = 'CMLE', // Compilation Memory Limit Exceeded
    OLE = 'OLE', // Output Limit Exceeded
    MLE = 'MLE', // Memory Limit Exceeded
    TLE = 'TLE', // Time Limit Exceeded
    IE = 'IE', // Internal Error
    CE = 'CE', // Compilation Error
    UE = 'UE', // Unknown Error
}