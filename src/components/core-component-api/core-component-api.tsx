import { Component, h, Host, Prop, Watch } from '@stencil/core';

export interface CoreInputType {
  name: string;
  description: string;
  type: string;
  defaultValue: string;
}

export interface CoreOutputType {
  name: string;
  description: string;
  type: string;
  defaultValue: string;
}

export interface CoreMethodType {
  name: string;
  description: string;
  returnType: string;
}

@Component({
  tag: 'core-component-api',
  styleUrl: 'core-component-api.css',
  shadow: true
})
export class CoreComponentApi {
  @Prop() selector: string;
  @Prop() inputs: CoreInputType[] = [];
  @Prop() outputs: CoreOutputType[] = [];
  @Prop() methods: CoreMethodType[] = [];

  @Watch('inputs')
  watchInputs() {
    if (typeof(this.inputs) === 'string') {
      this.inputs = JSON.parse(this.inputs) || [];
    }
  }

  @Watch('outputs')
  watchOutputs() {
    if (typeof(this.outputs) === 'string') {
      this.outputs = JSON.parse(this.outputs) || [];
    }
  }

  @Watch('methods')
  watchMethods() {
    if (typeof(this.methods) === 'string') {
      this.methods = JSON.parse(this.methods) || [];
    }
  }

  componentWillLoad() {
    this.watchInputs();
    this.watchOutputs();
    this.watchMethods();
  }

  render() {
    return <Host>
      <h2>Selector: <code>{this.selector}</code></h2>
      {this.getInputs()}
      {this.getOutputs()}
      {this.getMethods()}
    </Host>
    
  }

  private getInputs() {
    if (this.inputs.length === 0) {
      return;
    }
    return <section>
      <h3>Inputs</h3>

      <table>
        <thead>
          <tr>
            <th class="name">Input</th>
            <th class="type">Type</th>
            <th class="description">Description</th>
          </tr>
        </thead>
        <tbody>
          {
            this.inputs.map(input => <tr>
              <td><code>{input.name}</code></td>
              <td><code>{input.type}</code></td>
              <td innerHTML={input.description} />
            </tr>)
          }
        </tbody>
      </table>  
    </section>;
  }

  private getOutputs() {
    if (this.outputs.length === 0) {
      return;
    }
    return <section>
      <h3>Outputs</h3>
  
      <table>
        <thead>
          <tr>
            <th class="name">Output</th>
            <th class="type">Type</th>
            <th class="description">Description</th>
          </tr>
        </thead>
        <tbody>
          ({this.outputs.map(output => {
            return <tr>
              <td><code>{output.name}</code></td>
              <td><code>{output.defaultValue}</code></td>
              <td innerHTML={output.description}></td>
            </tr>
          })});
        </tbody>
      </table>
    </section>;
  }

  private getMethods() {
    if (this.methods.length === 0) {
      return;
    }
    return <section>

      <h3>Methods</h3>

      <table>
        <thead>
          <tr>
            <th class="name">Method</th>
            <th class="description">Description</th>
          </tr>
        </thead>
        <tbody>
          ({this.outputs.map(output => {
            return <tr>
              <td><code>{output.name}</code></td>
              <td innerHTML={output.description}></td>
            </tr>;
          })})
        </tbody>
      </table>
    </section>;
  }

}
