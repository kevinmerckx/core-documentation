import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'core-code',
  styleUrl: 'core-code.css',
  shadow: true
})
export class CoreCode {
  @Prop() code = '';

  render() {
    return <Host>
      <pre><code>{this.code}</code></pre>
      <div class='source-actions'>
        <slot/>
      </div>
    </Host>;
  }
  
}
