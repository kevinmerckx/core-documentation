import { ComponentDidLoad, EventEmitter } from '../../stencil.core';
export declare class CoreTabs implements ComponentDidLoad {
    tabs: string[] | string;
    selectedTab: string;
    selected: EventEmitter<string>;
    componentDidLoad(): void;
    render(): any;
    private getSelectedTab;
    private readonly myTabs;
    private onClickFn;
}
