import{r as e,h as o}from"./p-c0062577.js";class t{constructor(o){e(this,o),this.isOneLine=!1,this.onCopyClicked=()=>{this.copyButton.copy(this.code.firstChild.assignedNodes()[0].textContent)}}render(){return o("div",{class:"container "+(this.isOneLine?"one-line":"")},o("pre",null,o("code",{ref:e=>this.code=e},o("slot",null))),o("div",{class:"source-actions"},o("core-copy-button",{ref:e=>this.copyButton=e,onCopyClicked:this.onCopyClicked})))}static get style(){return"*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;overflow:auto;color:#fff;background:var(--color-bg-code)}.container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}pre{margin:0;padding:0;overflow:auto;height:100%}code{margin:10px 0;padding:0 10px;display:block}.one-line .source-actions{position:static;margin-left:10px}.source-actions{position:absolute;right:10px;top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"}}export{t as core_code};