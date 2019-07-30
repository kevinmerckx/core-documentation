import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: 'core-section',
  styleUrl: 'core-section.css',
  shadow: true
})
export class CoreSection {
  @Prop() sectionTitle: string
  @Prop() hideTitle = false;

  render() {
    return <Host>
      {this.renderTitle()}
      <slot/>
    </Host>;
  }

  private renderTitle() {
    if (this.hideTitle) {
      return;
    }
    return <h2>{this.sectionTitle}</h2>;
  }
}