import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'core-code',
  styleUrl: 'core-code.css',
  shadow: true
})
export class CoreCode {
  private code: HTMLElement;
  private copyButton: HTMLCoreCopyButtonElement;

  render() {
    return <Host>
      <pre><code ref={el => this.code = el}><slot/></code></pre>
      <div class='source-actions'>
        <core-copy-button
          ref={el => this.copyButton = el}
          onCopyClicked={this.onCopyClicked}
        />
      </div>
    </Host>;
  }

  private onCopyClicked = () => {
    this.copyButton.copy(
      (this.code.firstChild as HTMLSlotElement)
        .assignedNodes()[0].textContent
    );
  }
  
}
