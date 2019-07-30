/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  CoreInputType,
  CoreMethodType,
  CoreOutputType,
} from './components/core-component-api/core-component-api';

export namespace Components {
  interface CoreCode {
    'isOneLine': boolean;
  }
  interface CoreComponentApi {
    'inputs': CoreInputType[];
    'methods': CoreMethodType[];
    'outputs': CoreOutputType[];
    'selector': string;
  }
  interface CoreCopyButton {
    'copy': (valueToCopy: string) => Promise<void>;
  }
  interface CorePage {
    'noNavigation': boolean;
    'pageTitle': string;
  }
  interface CoreSection {
    'hideTitle': boolean;
    'sectionTitle': string;
  }
  interface CoreTabs {
    'tabs': string[] | string;
  }
}

declare global {


  interface HTMLCoreCodeElement extends Components.CoreCode, HTMLStencilElement {}
  var HTMLCoreCodeElement: {
    prototype: HTMLCoreCodeElement;
    new (): HTMLCoreCodeElement;
  };

  interface HTMLCoreComponentApiElement extends Components.CoreComponentApi, HTMLStencilElement {}
  var HTMLCoreComponentApiElement: {
    prototype: HTMLCoreComponentApiElement;
    new (): HTMLCoreComponentApiElement;
  };

  interface HTMLCoreCopyButtonElement extends Components.CoreCopyButton, HTMLStencilElement {}
  var HTMLCoreCopyButtonElement: {
    prototype: HTMLCoreCopyButtonElement;
    new (): HTMLCoreCopyButtonElement;
  };

  interface HTMLCorePageElement extends Components.CorePage, HTMLStencilElement {}
  var HTMLCorePageElement: {
    prototype: HTMLCorePageElement;
    new (): HTMLCorePageElement;
  };

  interface HTMLCoreSectionElement extends Components.CoreSection, HTMLStencilElement {}
  var HTMLCoreSectionElement: {
    prototype: HTMLCoreSectionElement;
    new (): HTMLCoreSectionElement;
  };

  interface HTMLCoreTabsElement extends Components.CoreTabs, HTMLStencilElement {}
  var HTMLCoreTabsElement: {
    prototype: HTMLCoreTabsElement;
    new (): HTMLCoreTabsElement;
  };
  interface HTMLElementTagNameMap {
    'core-code': HTMLCoreCodeElement;
    'core-component-api': HTMLCoreComponentApiElement;
    'core-copy-button': HTMLCoreCopyButtonElement;
    'core-page': HTMLCorePageElement;
    'core-section': HTMLCoreSectionElement;
    'core-tabs': HTMLCoreTabsElement;
  }
}

declare namespace LocalJSX {
  interface CoreCode extends JSXBase.HTMLAttributes<HTMLCoreCodeElement> {
    'isOneLine'?: boolean;
  }
  interface CoreComponentApi extends JSXBase.HTMLAttributes<HTMLCoreComponentApiElement> {
    'inputs'?: CoreInputType[];
    'methods'?: CoreMethodType[];
    'outputs'?: CoreOutputType[];
    'selector'?: string;
  }
  interface CoreCopyButton extends JSXBase.HTMLAttributes<HTMLCoreCopyButtonElement> {
    'onCopyClicked'?: (event: CustomEvent<any>) => void;
  }
  interface CorePage extends JSXBase.HTMLAttributes<HTMLCorePageElement> {
    'noNavigation'?: boolean;
    'pageTitle'?: string;
  }
  interface CoreSection extends JSXBase.HTMLAttributes<HTMLCoreSectionElement> {
    'hideTitle'?: boolean;
    'sectionTitle'?: string;
  }
  interface CoreTabs extends JSXBase.HTMLAttributes<HTMLCoreTabsElement> {
    'onSelected'?: (event: CustomEvent<string>) => void;
    'tabs'?: string[] | string;
  }

  interface IntrinsicElements {
    'core-code': CoreCode;
    'core-component-api': CoreComponentApi;
    'core-copy-button': CoreCopyButton;
    'core-page': CorePage;
    'core-section': CoreSection;
    'core-tabs': CoreTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


