import{r as t,h as n,H as l}from"./p-5fb8b51f.js";class s{constructor(n){t(this,n),this.inputs=[],this.outputs=[],this.methods=[]}watchInputs(){"string"==typeof this.inputs&&(this.inputs=JSON.parse(this.inputs))}componentDidLoad(){this.watchInputs()}render(){return n(l,null,n("h2",null,"Selector: ",n("code",null,this.selector)),this.getInputs(),this.getOutputs(),this.getMethods())}getInputs(){if(0!==this.inputs.length)return n("section",null,n("h3",null,"Inputs"),n("table",null,n("thead",null,n("tr",null,n("th",{class:"name"},"Input"),n("th",{class:"type"},"Type"),n("th",{class:"description"},"Description"))),n("tbody",null,"(",this.inputs.map(t=>n("tr",null,n("td",null,n("code",null,t.name)),n("td",null,n("code",null,t.type)),n("td",{innerHTML:t.description}))),")")))}getOutputs(){if(0!==this.outputs.length)return n("section",null,n("h3",null,"Outputs"),n("table",null,n("thead",null,n("tr",null,n("th",{class:"name"},"Output"),n("th",{class:"type"},"Type"),n("th",{class:"description"},"Description"))),n("tbody",null,"(",this.outputs.map(t=>n("tr",null,n("td",null,n("code",null,t.name)),n("td",null,n("code",null,t.defaultValue)),n("td",{innerHTML:t.description}))),");")))}getMethods(){if(0!==this.methods.length)return n("section",null,n("h3",null,"Methods"),n("table",null,n("thead",null,n("tr",null,n("th",{class:"name"},"Method"),n("th",{class:"description"},"Description"))),n("tbody",null,"(",this.outputs.map(t=>n("tr",null,n("td",null,n("code",null,t.name)),n("td",{innerHTML:t.description}))),")")))}static get watchers(){return{inputs:["watchInputs"]}}static get style(){return"*,:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Lato,sans-serif}table{border-collapse:collapse;border:1px solid var(--color-light-grey);border-radius:1px;width:100%}thead{background:var(--color-light-grey)}th{text-align:left}td,th{padding:3px 20px 3px 3px}tr{border-bottom:1px solid var(--color-light-grey)}.name,.type{width:30%}.description{width:40%}"}}export{s as core_component_api};