export interface CoreInputType {
    name: string;
    description: string;
    type: string;
    defaultValue: string;
}
export interface CoreOutputType {
    name: string;
    description: string;
    type: string;
    defaultValue: string;
}
export interface CoreMethodType {
    name: string;
    description: string;
    returnType: string;
}
export declare class CoreComponentApi {
    selector: string;
    inputs: CoreInputType[];
    outputs: CoreOutputType[];
    methods: CoreMethodType[];
    watchInputs(): void;
    watchOutputs(): void;
    watchMethods(): void;
    componentWillLoad(): void;
    render(): any;
    private getInputs;
    private getOutputs;
    private getMethods;
}
