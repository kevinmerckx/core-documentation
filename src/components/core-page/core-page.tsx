import { Component, Prop, h, Host, State, Element } from "@stencil/core";

@Component({
  tag: 'core-page',
  styleUrl: 'core-page.css',
  shadow: true
})
export class CorePage {
  @Prop() noNavigation = false;
  @Prop() pageTitle = '';

  @State() private sections: Array<string> = [];
  @State() private activeSection: string;

  @Element() element: HTMLElement;

  componentDidRender() {
    const sections = [];
    this.element.querySelectorAll('core-section').forEach(section => sections.push(section.sectionTitle));
    if (sections.join(',') !== this.sections.join(',')) {
      this.sections = sections;
    }
    if (!this.activeSection) {
      this.activeSection = sections[0];
    }
  }

  render() {
    return <Host>
      {this.renderNavigation()}
      <div class="content">
        <slot/>
      </div>
    </Host>;
  }

  private select(section: string) {
    this.activeSection = section;
    this.element.querySelector(`core-section[section-title="${section}"]`).scrollIntoView();
  }

  private renderNavigation() {
    if (this.noNavigation) {
      return;
    }
    return <div class="header">
      <h1>{this.pageTitle}</h1>

      <ol>
        {this.sections.map(section => {
          return <li
            class={(section === this.activeSection) ? 'active' : '' }
            onClick={() => this.select(section)}
          >{section}</li>;
        })}
      </ol>
    </div>;
  }
}