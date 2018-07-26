export interface IExecution {
    code: string;
    challengeId: number;
    language: string;
}

export interface IExecutionResponse {
    error: string;
    stdout: string;
    stderr: string;
}
