(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(8),c=n.n(r),i=n(1),o=n(2),u=n(4),d=n(3),s=n(5),m=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"component-display"},l.a.createElement("div",null,this.props.value))}}]),t}(l.a.Component)),h=(n(16),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(){n.props.clickHandler(n.props.name)},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=["component-button",this.props.orange?"orange":"",this.props.wide?"wide":""];return l.a.createElement("div",{className:e.join(" ").trim()},l.a.createElement("button",{onClick:this.handleClick},this.props.name))}}]),t}(l.a.Component)),p=(n(17),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){n.props.clickHandler(e)},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"component-button-panel"},l.a.createElement("div",null,l.a.createElement(h,{name:"AC",clickHandler:this.handleClick}),l.a.createElement(h,{name:"+/-",clickHandler:this.handleClick}),l.a.createElement(h,{name:"%",clickHandler:this.handleClick}),l.a.createElement(h,{name:"\xf7",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(h,{name:"7",clickHandler:this.handleClick}),l.a.createElement(h,{name:"8",clickHandler:this.handleClick}),l.a.createElement(h,{name:"9",clickHandler:this.handleClick}),l.a.createElement(h,{name:"x",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(h,{name:"4",clickHandler:this.handleClick}),l.a.createElement(h,{name:"5",clickHandler:this.handleClick}),l.a.createElement(h,{name:"6",clickHandler:this.handleClick}),l.a.createElement(h,{name:"-",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(h,{name:"1",clickHandler:this.handleClick}),l.a.createElement(h,{name:"2",clickHandler:this.handleClick}),l.a.createElement(h,{name:"3",clickHandler:this.handleClick}),l.a.createElement(h,{name:"+",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(h,{name:"0",clickHandler:this.handleClick,wide:!0}),l.a.createElement(h,{name:".",clickHandler:this.handleClick}),l.a.createElement(h,{name:"=",clickHandler:this.handleClick,orange:!0})))}}]),t}(l.a.Component)),k=n(6),x=n.n(k);function f(e,t,n){var a=x()(e||"0"),l=x()(t||("\xf7"===n||"x"===n?"1":"0"));if("+"===n)return a.plus(l).toString();if("-"===n)return a.minus(l).toString();if("x"===n)return a.times(l).toString();if("\xf7"===n)return"0"===l?(alert("Divide by 0 error"),"0"):a.div(l).toString();throw Error("Unknown operation '".concat(n,"'"))}n(18);var E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={total:null,next:null,operation:null},n.handleClick=function(e){n.setState(function(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(/[0-9]+/.test(t))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var n=f(e.total,e.next,e.operation);return{total:x()(n).div(x()("100")).toString(),next:null,operation:null}}return e.next?{next:x()(e.next).div(x()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:f(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:f(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}}(n.state,e))},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"component-app"},l.a.createElement(m,{value:this.state.next||this.state.total||"0"}),l.a.createElement(p,{clickHandler:this.handleClick}))}}]),t}(l.a.Component);n(19),n(20);c.a.render(l.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.037f25d8.chunk.js.map