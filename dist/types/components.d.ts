/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface CoreTabs {
    'tabs': string[] | string;
  }
}

declare global {


  interface HTMLCoreTabsElement extends Components.CoreTabs, HTMLStencilElement {}
  var HTMLCoreTabsElement: {
    prototype: HTMLCoreTabsElement;
    new (): HTMLCoreTabsElement;
  };
  interface HTMLElementTagNameMap {
    'core-tabs': HTMLCoreTabsElement;
  }
}

declare namespace LocalJSX {
  interface CoreTabs extends JSXBase.HTMLAttributes<HTMLCoreTabsElement> {
    'onSelected'?: (event: CustomEvent<string>) => void;
    'tabs'?: string[] | string;
  }

  interface IntrinsicElements {
    'core-tabs': CoreTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


