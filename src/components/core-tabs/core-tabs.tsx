import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'core-tabs',
  styleUrl: 'core-tabs.css',
  shadow: true
})
export class CoreTabs {
  @Prop() tabs: string[] | string;
  @State() selectedTab: string;

  render() {
    const selectedTab = this.getSelectedTab();
    return <Host><ol>
      {this.myTabs.map(tab =>
        <li 
          class={selectedTab === tab ? 'active' : ''}
          onClick={this.onClickFn(tab)}
        >{tab}</li>
      )}
    </ol></Host>;
  }
  
  private getSelectedTab() {
    return this.selectedTab || this.myTabs[0];
  }

  private get myTabs(): string[] {
    if (typeof(this.tabs) === 'string') {
      return JSON.parse(this.tabs);
    }
    return this.tabs || [];
  }

  private onClickFn(tab: string) {
    return () => this.selectedTab = tab;
  }
}
