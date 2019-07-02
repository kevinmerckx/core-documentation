import { Component, Event, EventEmitter, h, Method, State } from '@stencil/core';

@Component({
  tag: 'core-copy-button',
  styleUrl: 'core-copy-button.css',
  shadow: true
})
export class CoreCodeComponent {
  @Event() copyClicked: EventEmitter;
  @State() copied = false;
  private copiedTimeout: any;

  render() {
    return <button onClick={this.onClick}>
      Copy
      <div class='tooltip'>
        {this.copied ? 'copied!' : 'copy'}
      </div>
    </button>;
  }
  
  @Method()
  async copy(valueToCopy: string) {
    this.copyToClipboard(valueToCopy);
    this.copied = true;
    clearTimeout(this.copiedTimeout);
    this.copiedTimeout = setTimeout(() => this.copied = false, 3000);
  }

  private onClick = () => {
    this.copyClicked.emit();
  }

  private copyToClipboard(str: string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
