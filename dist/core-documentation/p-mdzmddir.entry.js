import{r as o,h as t,H as e,c}from"./p-95dedb89.js";class i{constructor(t){o(this,t),this.onCopyClicked=()=>{this.copyButton.copy(this.code.firstChild.assignedNodes()[0].textContent)}}render(){return t(e,null,t("pre",null,t("code",{ref:o=>this.code=o},t("slot",null))),t("div",{class:"source-actions"},t("core-copy-button",{ref:o=>this.copyButton=o,onCopyClicked:this.onCopyClicked})))}static get style(){return"*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;color:#fff}:host,pre{overflow:auto}pre{margin:0;padding:0;background:var(--color-bg-code)}code{margin:10px 0;display:block}.source-actions{position:absolute;right:5px;top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"}}class s{constructor(t){o(this,t),this.copied=!1,this.onClick=()=>{this.copyClicked.emit()},this.copyClicked=c(this,"copyClicked",7)}render(){return t("button",{onClick:this.onClick},"Copy",t("div",{class:"tooltip"},this.copied?"copied!":"copy"))}async copy(o){this.copyToClipboard(o),this.copied=!0,clearTimeout(this.copiedTimeout),this.copiedTimeout=setTimeout(()=>this.copied=!1,3e3)}copyToClipboard(o){const t=document.createElement("textarea");t.value=o,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}static get style(){return":host{display:block}*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}button{border:none;-webkit-box-shadow:none;box-shadow:none;background:transparent;height:auto;line-height:normal;color:var(--color-text-code);outline:none;padding:0;cursor:pointer}button:hover{color:#fff}button{position:relative;overflow:visible}button .tooltip{display:none;position:absolute;top:50%;left:0;-webkit-transform:translate(calc(-100% - 5px),-50%);transform:translate(calc(-100% - 5px),-50%);margin-right:3px;padding:2px 3px;color:#fff;background:#000}button:hover .tooltip{display:block}"}}export{i as core_code,s as core_copy_button};