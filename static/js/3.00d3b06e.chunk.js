(this["webpackJsonphahunavth-todo-app"]=this["webpackJsonphahunavth-todo-app"]||[]).push([[3],{102:function(a,e,t){"use strict";t.r(e);var i=t(0),c=t.n(i),s=t(24),n=t(23),r=t(1),o=t(3),l=t(4),d=t.n(l),b=(t(40),t(25)),u=t(5),f=t(56),j=t(55),v=["bsPrefix","active","disabled","className","variant","action","as","onClick"],h={variant:void 0,active:!1,disabled:!1},p=c.a.forwardRef((function(a,e){var t=a.bsPrefix,s=a.active,n=a.disabled,l=a.className,b=a.variant,f=a.action,h=a.as,p=a.onClick,O=Object(o.a)(a,v);t=Object(u.a)(t,"list-group-item");var m=Object(i.useCallback)((function(a){if(n)return a.preventDefault(),void a.stopPropagation();p&&p(a)}),[n,p]);return n&&void 0===O.tabIndex&&(O.tabIndex=-1,O["aria-disabled"]=!0),c.a.createElement(j.a,Object(r.a)({ref:e},O,{as:h||(f?O.href?"a":"button":"div"),onClick:m,className:d()(l,t,s&&"active",n&&"disabled",b&&t+"-"+b,f&&t+"-action")}))}));p.defaultProps=h,p.displayName="ListGroupItem";var O=p,m=["className","bsPrefix","variant","horizontal","as"],x={variant:void 0,horizontal:void 0},N=c.a.forwardRef((function(a,e){var t,i=Object(b.a)(a,{activeKey:"onSelect"}),s=i.className,n=i.bsPrefix,l=i.variant,j=i.horizontal,v=i.as,h=void 0===v?"div":v,p=Object(o.a)(i,m),O=Object(u.a)(n,"list-group");return t=j?!0===j?"horizontal":"horizontal-"+j:null,c.a.createElement(f.a,Object(r.a)({ref:e},p,{as:h,className:d()(s,O,l&&O+"-"+l,t&&O+"-"+t)}))}));N.defaultProps=x,N.displayName="ListGroup",N.Item=O;var P=N,g=t(97),k=["bsPrefix","className","noGutters","as"],w=["xl","lg","md","sm","xs"],y=c.a.forwardRef((function(a,e){var t=a.bsPrefix,i=a.className,s=a.noGutters,n=a.as,l=void 0===n?"div":n,b=Object(o.a)(a,k),f=Object(u.a)(t,"row"),j=f+"-cols",v=[];return w.forEach((function(a){var e,t=b[a];delete b[a];var i="xs"!==a?"-"+a:"";null!=(e=null!=t&&"object"===typeof t?t.cols:t)&&v.push(""+j+i+"-"+e)})),c.a.createElement(l,Object(r.a)({ref:e},b,{className:d.a.apply(void 0,[i,f,s&&"no-gutters"].concat(v))}))}));y.displayName="Row",y.defaultProps={noGutters:!1};var C=y,z=t(60),E=t(96),G=t(2);e.default=function(){var a=this,e=Object(s.c)(n.f),t=Object(s.b)(),c=function(a){t(Object(n.d)(a))},r=function(a){t(Object(n.e)(a)),t(Object(n.c)())};return Object(i.useEffect)((function(){t(Object(n.c)())}),[t]),Object(G.jsx)("div",{children:Object(G.jsx)(P,{as:"ul",variant:"flush",children:e.map((function(e){return Object(G.jsx)(P.Item,{as:"li",className:"Todos-item",children:Object(G.jsx)(g.a,{children:Object(G.jsxs)(C,{children:[Object(G.jsx)(z.a,{children:e.title}),Object(G.jsx)(z.a,{xs:!0,lg:"1",md:"auto",children:Object(G.jsx)("input",{type:"checkbox",checked:e.isComplete,onChange:c.bind(a,e.id)},e.id)}),Object(G.jsx)(z.a,{xs:!0,lg:"1",children:Object(G.jsx)(E.a,{variant:"danger",onClick:r.bind(a,e.id),children:"Delete"})})]})})},e.id)}))})})}}}]);
//# sourceMappingURL=3.00d3b06e.chunk.js.map