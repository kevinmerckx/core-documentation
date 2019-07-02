import { EventEmitter } from '../../stencil.core';
export declare class CoreCodeComponent {
    copyClicked: EventEmitter;
    copied: boolean;
    private copiedTimeout;
    render(): any;
    copy(valueToCopy: string): Promise<void>;
    private onClick;
    private copyToClipboard;
}
