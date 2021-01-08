let template = document.createElement("template");
template.innerHTML = `
<div class="k-wrapper"></div>
    <div class="k-dialog">
        <div class="k-header">
            <span class="k-title">提示</span><span class="k-close">X</span>
        </div>
        <div class="k-body">
            <span>这是一段文本</span>
            <input class="input-inner" type="text" />
        </div>
        <div class="k-footer">
            <span class="k-cancel">取消</span>
            <span class="k-primary">确定</span>
        </div>
    </div>
    <style>
    .k-dialog {
        width: 30%;
        z-index: 2001;
        display: block;
        position: absolute;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        margin: 0 auto;
        top: 15vh;
        left:30%;
    }

    .k-wrapper {
        position: fixed;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        background: black;
        opacity: 0.4;
        z-index: 2000;
    }

    .k-header {
        padding: 20px 20px 10px;
    }

    .k-header .k-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
        float: left;
    }

    .k-body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
    }

    .k-footer {
        padding: 10px 20px 30px;
        text-align: right;
    }

    .k-close {
        color: #909399;
        font-weight: 400;
        float: right;
        cursor: pointer;
    }

    .k-cancel {
        color: #606266;
        border: 1px solid #dcdfe6;
        text-align: center;
        cursor: pointer;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        font-weight: 500;
        margin-right: 10px;
    }

    .k-cancel:hover {
        color: #409eff;
        background: #ecf5ff;
        border-color: #c6e2ff;
    }

    .k-primary {
        border: 1px solid #dcdfe6;
        text-align: center;
        cursor: pointer;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        font-weight: 500;
        background: #409eff;
        color: #fff;
        margin-left: 10px;
    }

    .k-primary:hover {
        background: #66b1ff;
    }
    .k-input{
        width: 100%;
        margin-left: 20px;
        margin-bottom: 20px;
    }
    .input-inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
        margin-top: 20px;
    }
    </style>
    `;




class MessageBox extends HTMLElement {
    constructor() {
        super();
        this._sd = this.attachShadow({ mode: "open" });
        this._sd.appendChild(template.content.cloneNode(true));
        // console.log(this.getAttribute("title"))
        this.title = this.getAttribute("title");
        this.content = this.getAttribute("content")
        this.close();
        this.addEvent();
    }
    addEvent() {
        let dailog = this._sd.querySelector(".k-dialog");
        dailog.onclick = e => {
            // console.log(e.target.className);
            switch (e.target.className) {
                case 'k-close':
                    this.close();
                    this.dispatchEvent(new CustomEvent("close"))
                    break;
                case 'k-primary':
                    this.close();
                    let inputValue = this._sd.querySelector(".input-inner").value;
                    this.dispatchEvent(new CustomEvent("submit", {
                        detail: inputValue
                    }))
                    break;
                case 'k-cancel':
                    this.close();
                    this.dispatchEvent(new CustomEvent("close"))
                    break;
                default:
                    break;
            }
        }
    }
    close() {
        this._sd.querySelector(".k-dialog").style.display = "none";
        this._sd.querySelector(".k-wrapper").style.display = "none";
    }
    open() {
        this._sd.querySelector(".k-dialog").style.display = "block";
        this._sd.querySelector(".k-wrapper").style.display = "block";
    }
    set title(newValue) {
        this._sd.querySelector(".k-title").innerHTML = newValue;
    }
    set content(newValue) {
        this._sd.querySelector(".k-body span").innerHTML = newValue;
    }
}

customElements.define("message-box", MessageBox);

export default class Dailog {
    constructor(opts) {
        // 配置的合并；
        let defaultOpts = {
            width: "30%",
            height: "250px",
            title: "测试标题",
            content: "测试内容",
            dragable: true, //是否可拖拽
            maskable: true, //是否有遮罩
            isCancel: false //是否有取消
        }
       this.options =  Object.assign(defaultOpts,opts);
       console.log(this.options);
       this.createDom();
    }
    createDom() {
        let msbox = document.createElement("message-box");
        this.msbox = msbox;
        msbox.title = this.options.title;
        msbox.content = this.options.content;
        document.body.appendChild(msbox);
    }
    open() {
        // console.log(this);
        this.msbox.open();
    }
}