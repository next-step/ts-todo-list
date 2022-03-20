var c=class{constructor(t,e){this.id=t,this.content=e,this.id=t,this.content=e}get info(){let t=`id:${this.id},content:${this.content}`;return console.log(`log:${t}`),t}updateContent(t){return this.content=t,!0}};var a=class{constructor(t,e,o,d){this.id=t,this.content=e,this.status=o,this.category=d,this.tags=[],this.nextTagId=0,this.id=t,this.content=e,this.status=o,this.category=d}idGenerator(){return this.nextTagId++}get info(){let t=`id:${this.id},content:${this.content},state:${this.status},category:${this.category},tags:${this.tags.reduce((e,o)=>e+o.info,"")}`;return console.log(`log:${t}`),t}update(t,e,o){let d=this.info;this.content=t||this.content,this.status=e||this.status,this.category=o||this.category,console.log(`log:update ${d} -> ${this.info}`)}addTag(t){let e=new c(this.idGenerator(),t);this.tags.push(e),console.log(`log:add tag to ${this.id}, ${e.info}`)}updateTagById(t,e){let o=this.tags.find(d=>d.id===t);return o?(console.log(`log:updated tag ${o.info} -> ${e}`),o.updateContent(e)):console.error("log:updated tag failed, no such tag id")}deleteTagById(t){this.tags=this.tags.filter(e=>e.id!==t),console.log(`log:deleted tag of ${this.id}, tagid ${t}`)}deleteTagAll(){this.tags=[],console.log(`log:deleted every tag of ${this.id}`)}};var g=class{constructor(){this.todoElements=[],this.nextId=0}idGenerator(){return this.nextId++}addTodoElement(t,e){let o=new a(this.idGenerator(),t,"TODO",e);this.todoElements.push(o),console.log(`log: add todoElement ${o.info}`)}getTodoElementInfoById(t){let e=this.todoElements.find(o=>o.id===t);return e?(console.log(`log:get info -> ${e.info}`),e.info):console.error("log:get info failed, no such element id")}getTodoElementInfoAll(t){return console.log("log:get every info of todo app"),this.todoElements.reduce((e,o)=>`${e+t(o.info)}
`,"")}updateTodoElementById(t,e,o,d){let i=this.todoElements.find(u=>u.id===t);return i?i.update(e,o,d):console.error("log:updated element failed, no such element id")}deleteTodoElementById(t){this.todoElements=this.todoElements.filter(e=>e.id!==t),console.log(`log:deleted elementID ${t}`)}deleteTodoElementAll(){this.todoElements=[],console.log("log:deleted every list of todoApp")}addTodoElementTag(t,e){let o=this.todoElements.find(d=>d.id===t);return o?o.addTag(e):console.error("log:add tag failed, no such element id")}deleteTodoElementTagByTagId(t,e){let o=this.todoElements.find(d=>d.id===t);if(o)return o.deleteTagById(e);console.log("log: no such tag id")}deleteTodoElementTagAll(t){let e=this.todoElements.find(o=>o.id===t);if(e)return e.deleteTagAll();console.log("log: no such element id")}};var p={actionName:"addTodoElement",actionArgs:{arg1:"content",arg2:"category"}},h={actionName:"getTodoElementInfoById",actionArgs:{arg1:"todoElementId"}},A={actionName:"getTodoElementInfoAll",actionArgs:{}},f={actionName:"updateTodoElementById",actionArgs:{arg1:"todoElementId",arg2:"content",arg3:"status",arg4:"category"}},I={actionName:"deleteTodoElementById",actionArgs:{arg1:"todoElementId"}},y={actionName:"deleteTodoElementAll",actionArgs:{}},$={actionName:"addTodoElementTag",actionArgs:{arg1:"todoElementId",arg2:"content"}},B={actionName:"deleteTodoElementTagByTagId",actionArgs:{arg1:"todoElementId",arg2:"tagId"}},v={actionName:"deleteTodoElementTagAll",actionArgs:{arg1:"todoElementId"}},m=[p,h,A,f,I,y,$,B,v];var r=n=>{let t=document.querySelector(`#${n}`);if(!!t)return t.value};var s=new g,x=document.querySelector("#todo-console"),N=document.querySelector("#todo-controller"),S=document.querySelector("#todo-controller-args"),b=document.querySelector("#apply"),l,j=()=>{console.log(`<div>${s.getTodoElementInfoAll(n=>`<div>${n}</div>`)}</div>`),x.innerHTML=`<div>${s.getTodoElementInfoAll(n=>`<div>${n}</div>`)}</div>`},q=()=>{S.innerHTML=`
    <div>
    <select id="action-select">
    <option> 액션을 선택해 주세요 </option>
    ${m.map(n=>`<option value=${n.actionName}>${n.actionName} </option>`)}
    </select>
    </div>`},C=n=>{N.innerHTML=n||""},D=()=>{let n=e=>{let o=m.find(i=>i.actionName===e.target.value);if(!o)return;l=o;let d=Object.entries(o==null?void 0:o.actionArgs).reduce((i,[u,T])=>i+`${T} <input id=${T}></input>`,"");C(d)};q();let t=document.querySelector("#action-select");t.onchange=n},L=()=>{(()=>{switch(l.actionName){case"addTodoElement":{let t=r(l.actionArgs.arg1),e=r(l.actionArgs.arg2);return!t||!e?void 0:s.addTodoElement(t,e)}case"deleteTodoElementAll":return s.deleteTodoElementAll();case"deleteTodoElementTagAll":{let t=r(l.actionArgs.arg1);return s.deleteTodoElementTagAll(Number(t))}case"deleteTodoElementById":{let t=r(l.actionArgs.arg1);return s.deleteTodoElementById(Number(t))}case"deleteTodoElementTagByTagId":{let t=r(l.actionArgs.arg1),e=r(l.actionArgs.arg2);return s.deleteTodoElementTagByTagId(Number(t),Number(e))}case"addTodoElementTag":{let t=r(l.actionArgs.arg1),e=r(l.actionArgs.arg2);return e?s.addTodoElementTag(Number(t),e):void 0}case"updateTodoElementById":{let t=r(l.actionArgs.arg1),e=r(l.actionArgs.arg2),o=r(l.actionArgs.arg3),d=r(l.actionArgs.arg4);return s.updateTodoElementById(Number(t),e,o,d)}case"getTodoElementInfoById":{let t=r(l.actionArgs.arg1);return s.getTodoElementInfoById(Number(t))}}})(),j()},E=()=>{D(),b.onclick=L};console.log("APP started");E();
//# sourceMappingURL=index.js.map
