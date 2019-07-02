import{r as t,h as l,H as n}from"./p-ec93b880.js";class e{constructor(l){t(this,l),this.inputs=[],this.outputs=[],this.methods=[]}render(){return l(n,null,l("h2",null,"Selector: ",l("code",null,this.selector)),this.getInputs(),this.getOutputs(),this.getMethods())}getInputs(){if(0!==this.inputs.length)return l("section",null,l("h3",null,"Inputs"),l("table",null,l("thead",null,l("tr",null,l("th",{class:"name"},"Input"),l("th",{class:"type"},"Type"),l("th",{class:"description"},"Description"))),l("tbody",null,"(",this.inputs.map(t=>l("tr",null,l("td",null,l("code",null,t.name)),l("td",null,l("code",null,t.type)),l("td",{innerHTML:t.description}))),")")))}getOutputs(){if(0!==this.outputs.length)return l("section",null,l("h3",null,"Outputs"),l("table",null,l("thead",null,l("tr",null,l("th",{class:"name"},"Output"),l("th",{class:"type"},"Type"),l("th",{class:"description"},"Description"))),l("tbody",null,"(",this.outputs.map(t=>l("tr",null,l("td",null,l("code",null,t.name)),l("td",null,l("code",null,t.defaultValue)),l("td",{innerHTML:t.description}))),");")))}getMethods(){if(0!==this.methods.length)return l("section",null,l("h3",null,"Methods"),l("table",null,l("thead",null,l("tr",null,l("th",{class:"name"},"Method"),l("th",{class:"description"},"Description"))),l("tbody",null,"(",this.outputs.map(t=>l("tr",null,l("td",null,l("code",null,t.name)),l("td",{innerHTML:t.description}))),")")))}static get style(){return"*,:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Lato,sans-serif}table{border-collapse:collapse;border:1px solid var(--color-light-grey);border-radius:1px;width:100%}thead{background:var(--color-light-grey)}th{text-align:left}td,th{padding:3px 20px 3px 3px}tr{border-bottom:1px solid var(--color-light-grey)}.name,.type{width:30%}.description{width:40%}"}}export{e as core_component_api};