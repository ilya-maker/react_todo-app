(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(10),r=n.n(l),i=(n(16),n(9),n(1)),c=n(3),d=n(4),u=n(5),s=n(7),m=n(6),h=n(2),f=n.n(h),p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={title:"",errorTitle:!1},e.handleChangeTitle=function(t){var n=t.target;e.setState({title:n.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state.title.trim();if(!n)return e.setState({errorTitle:!0}),void e.resetInput();var o=e.props.id;e.props.addTodo(n,o),e.setState({errorTitle:!1}),e.resetInput()},e.resetInput=function(){e.setState({title:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.errorTitle;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{action:"",onSubmit:this.handleSubmit},a.a.createElement("label",{htmlFor:"new-todo"},a.a.createElement("input",{className:f()({"new-todo new-todo-error":n,"new-todo":!n}),name:"new-todo",placeholder:n?"Please enter the value":"What needs to be done?",value:t,onChange:this.handleChangeTitle}))))}}]),n}(o.Component),g=function(e){var t=e.visibleTodos,n=e.deleteTodo,o=e.completedTodo,l=e.handleSubmit,r=e.changeTitle,i=e.newValue,c=e.editingTodo,d=e.showChangeTitle,u=e.handleChangeTitle,s=e.handleCompletedAll,m=e.cancelEditing;return a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:t.length>0&&t.every((function(e){return e.completed})),onChange:s}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t=e.id,s=e.title,h=e.completed;return a.a.createElement("li",{onDoubleClick:function(){return r(t)},key:t,className:f()({editing:c===t,completed:c!==t&&h,"":c!==t&&!h})},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",checked:h,className:"toggle",id:"todo-".concat(t),onClick:function(){return o(t)}}),a.a.createElement("label",{htmlFor:"todo-".concat(t)},s),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t)}})),d&&a.a.createElement("form",{onSubmit:function(){return l(t)}},a.a.createElement("input",{id:t,value:i,onChange:u,type:"text",className:"edit",onBlur:function(e){return m(e)},onKeyDown:function(e){return m(e)}})))}))))};g.defaultProps={visibleTodos:[],editingTodo:null};var T=function(e){var t=e.filters,n=e.invisibleFooter,o=e.countCompleted,l=e.handleTypeOfFilter,r=e.typeOfFilter,i=e.clearCompleted;return a.a.createElement("footer",{className:f()({"footer-invisible":!n,footer:!0})},a.a.createElement("span",{className:"todo-count"},o," ","items left"),a.a.createElement("ul",{className:"filters"},Object.values(t).map((function(e){return a.a.createElement("li",{key:e},a.a.createElement("a",{href:"#/",onClick:function(){return l(e)},className:f()({selected:r===e})},e))}))),a.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return i()}},"Clear completed"))},b={all:"all",completed:"completed",active:"active"},v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],counter:1,typeOfFilter:b.all,newValue:"",editingTodo:null,showChangeTitle:!1},e.addTodo=function(t,n){var o={id:n,title:t,completed:!1};e.setState((function(e){return{todos:[].concat(Object(c.a)(e.todos),[o]),counter:e.counter+1}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.completedTodo=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e}))}}))},e.clearCompleted=function(){e.setState((function(e){return{todos:e.todos.filter((function(e){return!1===e.completed}))}}))},e.handleTypeOfFilter=function(t){e.setState({typeOfFilter:t})},e.handleSubmit=function(t){var n=e.state.newValue;n.trim()||e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}})),e.setState((function(e){return{showChangeTitle:!1,editingTodo:null,todos:e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{title:n.trim()}):e}))}}))},e.handleCompletedAll=function(t){var n=t.target;e.setState((function(e){return{todos:e.todos.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{completed:n.checked})}))}}))},e.cancelEditing=function(t){var n=t.key,o=t.target,a=t.type;e.setState((function(e){return"blur"===a&&""!==o.value.trim()?{showChangeTitle:!1,editingTodo:null,todos:e.todos.map((function(e){return e.id===+o.id?Object(i.a)(Object(i.a)({},e),{},{title:o.value}):e}))}:"Escape"===n?{showChangeTitle:!1,editingTodo:null}:void 0}))},e.changeTitle=function(t){e.setState((function(e){return{newValue:e.todos.find((function(e){return e.id===t})).title,editingTodo:t,showChangeTitle:!0}}))},e.handleChangeTitle=function(t){e.setState({newValue:t.target.value})},e.getFilterderTodos=function(){var t=e.state,n=t.typeOfFilter,o=t.todos;return n===b.completed?Object(c.a)(o).filter((function(e){return e.completed})):n===b.active?Object(c.a)(o).filter((function(e){return!e.completed})):Object(c.a)(o)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.typeOfFilter,o=e.newValue,l=e.editingTodo,r=e.showChangeTitle,i=this.getFilterderTodos();return a.a.createElement("section",{className:"todoapp"},a.a.createElement(p,{todos:t,addTodo:this.addTodo,id:this.state.counter}),a.a.createElement(g,{visibleTodos:i,deleteTodo:this.deleteTodo,completedTodo:this.completedTodo,handleSubmit:this.handleSubmit,changeTitle:this.changeTitle,newValue:o,editingTodo:l,showChangeTitle:r,handleChangeTitle:this.handleChangeTitle,handleCompletedAll:this.handleCompletedAll,cancelEditing:this.cancelEditing}),a.a.createElement(T,{filters:b,invisibleFooter:t.length,countCompleted:t.filter((function(e){return!1===e.completed})).length,handleTypeOfFilter:this.handleTypeOfFilter,typeOfFilter:n,clearCompleted:this.clearCompleted}))}}]),n}(o.Component);r.a.render(a.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.bee54c4c.chunk.js.map