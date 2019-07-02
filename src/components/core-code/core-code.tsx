import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'core-code',
  styleUrl: 'core-code.css',
  shadow: true
})
export class CoreCode {
  @Prop() isOneLine = false;

  private code: HTMLElement;
  private copyButton: HTMLCoreCopyButtonElement;

  render() {
    return <div class={'container ' + (this.isOneLine ? 'one-line' : '')}>
      <pre><code 
        ref={el => this.code = el}
      ><slot/></code></pre>
      <div class='source-actions'>
        <core-copy-button
          ref={el => this.copyButton = el}
          onCopyClicked={this.onCopyClicked}
        />
      </div>
    </div>;
  }

  private onCopyClicked = () => {
    this.copyButton.copy(
      (this.code.firstChild as HTMLSlotElement)
        .assignedNodes()[0].textContent
    );
  }
  
}
