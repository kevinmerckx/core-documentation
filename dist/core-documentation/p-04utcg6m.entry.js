import{r as o,h as e,H as t,c}from"./p-ec93b880.js";class i{constructor(e){o(this,e),this.isOneLine=!1,this.onCopyClicked=()=>{this.copyButton.copy(this.code.firstChild.assignedNodes()[0].textContent)}}render(){return e(t,{class:this.isOneLine?"one-line":""},e("pre",null,e("code",{ref:o=>this.code=o},e("slot",null))),e("div",{class:"source-actions"},e("core-copy-button",{ref:o=>this.copyButton=o,onCopyClicked:this.onCopyClicked})))}static get style(){return"*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;color:#fff;background:var(--color-bg-code)}:host,pre{overflow:auto}pre{margin:0;padding:0;height:100%}code{margin:10px 0;padding:0 10px;display:block}:host.one-line{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host.one-line .source-actions{position:static}.source-actions{position:absolute;right:10px;top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"}}class s{constructor(e){o(this,e),this.copied=!1,this.onClick=()=>{this.copyClicked.emit()},this.copyClicked=c(this,"copyClicked",7)}render(){return e("button",{onClick:this.onClick},"Copy",e("div",{class:"tooltip"},this.copied?"copied!":"copy"))}async copy(o){this.copyToClipboard(o),this.copied=!0,clearTimeout(this.copiedTimeout),this.copiedTimeout=setTimeout(()=>this.copied=!1,3e3)}copyToClipboard(o){const e=document.createElement("textarea");e.value=o,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}static get style(){return":host{display:block}*,:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Lato,sans-serif}button{border:none;-webkit-box-shadow:none;box-shadow:none;background:transparent;height:auto;line-height:normal;color:var(--color-text-code);outline:none;padding:0;cursor:pointer}button:hover{color:#fff}button{position:relative;overflow:visible}button .tooltip{display:none;position:absolute;top:50%;left:0;-webkit-transform:translate(calc(-100% - 5px),-50%);transform:translate(calc(-100% - 5px),-50%);margin-right:3px;padding:2px 3px;color:#fff;background:#000}button:hover .tooltip{display:block}"}}export{i as core_code,s as core_copy_button};