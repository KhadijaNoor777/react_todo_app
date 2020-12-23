(this.webpackJsonpreact_todo_app=this.webpackJsonpreact_todo_app||[]).push([[0],{37:function(t,e,o){},38:function(t,e,o){},65:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),a=o.n(r),c=o(29),s=o.n(c),i=(o(37),o(20)),d=o(8),l=o(9),p=o(11),u=o(10),j=o(14),b=o(2);o(38);var h={background:"black",color:"white",textAlign:"center",padding:"10px"},O={color:"white",textDecoration:"none"},m=function(){return Object(n.jsxs)("header",{style:h,children:[Object(n.jsx)("h1",{children:"TodoList"}),Object(n.jsx)(j.b,{to:"/",style:O,children:"Home"})," |",Object(n.jsx)(j.b,{to:"/about",style:O,children:" About"})]})},f=o(31),x=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.addInput=function(e){return t.setState(Object(f.a)({},e.target.name,e.target.value))},t.submitTodo=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.submitTodo,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"title",placeholder:"Add Todo...",value:this.state.title,onChange:this.addInput,style:{flex:"10",padding:"5px"}}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),o}(r.Component),g=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{color:"black",padding:"10px",borderBottom:"1px solid gray",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id;t.title;return Object(n.jsx)("div",{style:{backgroundColor:"lightgray"},children:Object(n.jsxs)("p",{style:this.getStyle(),children:[Object(n.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",this.props.todo.title," "," ",Object(n.jsx)("button",{onClick:this.props.deleteTodo.bind(this,e),style:y,children:"x"})]})})}}]),o}(r.Component),y={backgroundColor:"red",color:"white",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},v=g,k=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(v,{todo:e,markComplete:t.props.markComplete,deleteTodo:t.props.deleteTodo},e.id)}))}}]),o}(a.a.Component),T=o(67);var C=function(){return Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"This is a Todo List App. It can manage your todos in a great way. This is my first React App"})]})},S=o(19),A=o.n(S),w=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={todos:[]},t.markComplete=function(e){console.log(e),t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.deleteTodo=function(e){console.log(e),A.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){return t.setState({todos:Object(i.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){console.log(e);var o={id:Object(T.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(i.a)(t.state.todos),[o])})},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;A.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m,{}),Object(n.jsx)(b.a,{exact:!0,path:"/",render:function(e){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(x,{addTodo:t.addTodo}),Object(n.jsx)(k,{todos:t.state.todos,markComplete:t.markComplete,deleteTodo:t.deleteTodo})]})}}),Object(n.jsx)(b.a,{path:"/about",component:C})]})})})}}]),o}(a.a.Component),D=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,68)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;o(t),n(t),r(t),a(t),c(t)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),D()}},[[65,1,2]]]);
//# sourceMappingURL=main.205c12a8.chunk.js.map