"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[4765],{43434:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357),r=n(68584);const l=(0,a.ph)((e=>{let{title:t="Change your profile picture",disabled:n,isForForum:l,currentAvatarBlobUrl:i,onChange:s}=e;const[c,d]=(0,a.J0)(),[m,u]=(0,a.J0)(i);(0,a.vJ)((()=>{u(i)}),[i]);const A=(0,a.hb)((e=>{d(void 0),s(e),m&&m!==i&&URL.revokeObjectURL(m),u(URL.createObjectURL(e))}),[m,i,s]),h=(0,a.hb)((()=>{d(void 0)}),[]),v=(0,o.A)(m&&"filled",n&&"disabled",l&&"rounded-square");return a.Ay.createElement("div",{className:"AvatarEditable"},a.Ay.createElement("label",{className:v,role:"button",tabIndex:0,title:t},a.Ay.createElement("input",{type:"file",onChange:function(e){const t=e.target;t?.files?.[0]&&(d(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),a.Ay.createElement("i",{className:"icon icon-camera-add"}),m&&a.Ay.createElement("img",{src:m,draggable:!1,alt:"Avatar"})),a.Ay.createElement(r.A,{file:c,onClose:h,onChange:A}))}))},24713:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(84051),o=n(87357),r=n(68292),l=n(26607);const i=(0,a.ph)((e=>{let{text:t,className:n,isAlternateColor:i}=e;return a.Ay.createElement(l.A,{className:(0,o.A)("Y3ZoW17O",i?"Lq67O2D2":"DWjOG2Ze",n),isOpen:Boolean(t)},t&&a.Ay.createElement(r.A,{text:t}))}))},77561:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(19806);const r=(0,a.ph)((e=>{let{id:t,options:n,selected:r=[],disabled:l,round:i,loadingOptions:s,onChange:c}=e;const[d,m]=(0,a.J0)(r||[]),u=(0,a.hb)((e=>{const{value:t,checked:n}=e.currentTarget;let a;a=n?[...d,t]:d.filter((e=>e!==t)),m(a),c(a)}),[c,d]);return a.Ay.createElement("div",{id:t,className:"radio-group"},n.map((e=>a.Ay.createElement(o.A,{label:e.label,subLabel:e.subLabel,value:e.value,checked:-1!==r.indexOf(e.value),disabled:e.disabled||l,round:i,isLoading:s?-1!==s.indexOf(e.value):void 0,onChange:u}))))}))},94189:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(84051),o=n(87357),r=n(10328),l=n(59030),i=n(64493),s=n(8410);const c=(0,a.ph)((e=>{let{isOpen:t,title:n,header:c,text:d,textParts:m,confirmLabel:u="Confirm",confirmIsDestructive:A,isConfirmDisabled:h,isOnlyConfirm:v,areButtonsInColumn:g,className:y,children:p,confirmHandler:b,onClose:f,onCloseAnimationEnd:E}=e;const C=(0,l.A)(),N=(0,a.li)(null),w=(0,a.hb)((e=>{-1===e&&b()}),[b]),k=(0,r.A)(N,t,w,".Button");return a.Ay.createElement(s.A,{className:(0,o.A)("confirm",y),title:n||C("Telegram"),header:c,isOpen:t,onClose:f,onCloseAnimationEnd:E},d&&d.split("\\n").map((e=>a.Ay.createElement("p",null,e))),m||p,a.Ay.createElement("div",{className:g?"dialog-buttons-column":"dialog-buttons mt-2",ref:N,onKeyDown:k},a.Ay.createElement(i.A,{className:"confirm-dialog-button",isText:!0,onClick:b,color:A?"danger":"primary",disabled:h},u),!v&&a.Ay.createElement(i.A,{className:"confirm-dialog-button",isText:!0,onClick:f},C("Cancel"))))}))},68584:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(84051),o=n(31481),r=n(87679),l=n(59030),i=n(64493),s=n(52745),c=n(8410);const d={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let m,u,A;const h=(0,a.ph)((e=>{let{file:t,onChange:h,onClose:v}=e;const[g,y]=(0,a.J0)(!1);(0,a.vJ)((()=>{t&&(g?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:a}=t;A=new m(t,{enableZoom:!0,boundary:{width:n,height:a},viewport:{width:n-16,height:a-16,type:"circle"}});const o=await(0,r.zE)(e);await A.bind({url:o})}catch(e){o.Oig&&console.error(e)}}(t):async function(){return u||(u=Promise.all([n.e(4903),n.e(7643)]).then(n.bind(n,27643)),m=(await u).default),u}().then((()=>y(!0))))}),[t,g]);const p=(0,l.A)(),b=(0,a.hb)((async()=>{if(!A)return;const e=await A.result(d),t="string"==typeof e?e:(0,r.ti)(e,"avatar.jpg");h(t)}),[h]);return a.Ay.createElement(c.A,{isOpen:Boolean(t),onClose:v,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},g?a.Ay.createElement("div",{id:"avatar-crop"}):a.Ay.createElement(s.A,null),a.Ay.createElement(i.A,{className:"confirm-button",round:!0,color:"primary",onClick:b,ariaLabel:p("CropImage")},a.Ay.createElement("i",{className:"icon icon-check"})))}))},80401:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(84051),o=n(87357),r=n(95807),l=n(59030);const i={x:0,y:0},s=(0,a.ph)((e=>{let{children:t,id:n,onDrag:s,onDragEnd:d,style:m,knobStyle:u,isDisabled:A}=e;const h=(0,l.A)(),v=(0,a.li)(null),[g,y]=(0,a.J0)({isDragging:!1,origin:i,translation:i}),p=e=>{e.stopPropagation(),e.preventDefault();const{x:t,y:n}=c(e);y({...g,isDragging:!0,origin:{x:t,y:n},width:v.current?.offsetWidth,height:v.current?.offsetHeight})},b=(0,a.hb)((e=>{const{x:t,y:a}=c(e),o={x:t-g.origin.x,y:a-g.origin.y};y((e=>({...e,translation:o}))),s(o,n)}),[n,s,g.origin.x,g.origin.y]),f=(0,a.hb)((()=>{y((e=>({...e,isDragging:!1,width:void 0,height:void 0}))),d()}),[d]);(0,a.vJ)((()=>{g.isDragging&&A&&y((e=>({...e,isDragging:!1,width:void 0,height:void 0})))}),[A,g.isDragging]),(0,a.vJ)((()=>(g.isDragging?(window.addEventListener("touchmove",b),window.addEventListener("mousemove",b),window.addEventListener("touchend",f),window.addEventListener("touchcancel",f),window.addEventListener("mouseup",f)):(window.removeEventListener("touchmove",b),window.removeEventListener("mousemove",b),window.removeEventListener("touchend",f),window.removeEventListener("touchcancel",f),window.removeEventListener("mouseup",f),y((e=>({...e,translation:i})))),()=>{g.isDragging&&(window.removeEventListener("touchmove",b),window.removeEventListener("mousemove",b),window.removeEventListener("touchend",f),window.removeEventListener("touchcancel",f),window.removeEventListener("mouseup",f))})),[b,f,g.isDragging]);const E=(0,o.A)("kWQHzIMD",g.isDragging&&"k0c5WDAy"),C=(0,a.Kr)((()=>(0,r.A)(g.isDragging&&`transform: translate(${g.translation.x}px, ${g.translation.y}px)`,g.width?`width: ${g.width}px`:void 0,g.height?`height: ${g.height}px`:void 0,m)),[m,g.height,g.isDragging,g.translation.x,g.translation.y,g.width]);return a.Ay.createElement("div",{style:C,className:E,ref:v},t,!A&&a.Ay.createElement("div",{"aria-label":h("i18n_dragToSort"),tabIndex:0,role:"button",className:(0,o.A)("UpzQzcvs","div-button","draggable-knob"),onMouseDown:p,onTouchStart:p,style:u},a.Ay.createElement("i",{className:"icon icon-sort","aria-hidden":!0})))}));function c(e){let t,n;return"touches"in e?(t=e.touches[0].clientX,n=e.touches[0].clientY):(t=e.clientX,n=e.clientY),{x:t,y:n}}},12933:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(84051),o=n(87357),r=n(59030),l=n(64493);const i=e=>{let{isShown:t,className:n,color:i="primary",ariaLabel:s,disabled:c,onClick:d,children:m}=e;const u=(0,r.A)(),A=(0,o.A)("FloatingActionButton",t&&"revealed",n);return a.Ay.createElement(l.A,{className:A,color:i,round:!0,disabled:c,onClick:t&&!c?d:void 0,ariaLabel:s,tabIndex:-1,isRtl:u.isRtl},m)}},46222:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(84051),o=n(89925),r=n(66644),l=n(95807),i=n(9718),s=n(37836),c=n(82393),d=n(17712);const m=".ListItem",u=20,A=800,h=e=>{let{ref:t,style:n,className:h,items:v,itemSelector:g=m,preloadBackwards:y=u,sensitiveArea:p=A,withAbsolutePositioning:b,maxHeight:f,noScrollRestore:E=!1,noScrollRestoreOnTop:C=!1,noFastList:N,cacheBuster:w,beforeChildren:k,children:x,onLoadMore:L,onScroll:T,onWheel:D,onClick:S,onKeyDown:R,onDragOver:M,onDragLeave:O}=e,B=(0,a.li)(null);t&&(B=t);const I=(0,a.li)({}),[F,J]=(0,a.Kr)((()=>L?[(0,s.sg)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];L({direction:o.TN.Backwards,noScroll:e})}),1e3,!0,!1),(0,s.sg)((()=>{L({direction:o.TN.Forwards})}),1e3,!0,!1)]:[]),[L,v]);(0,a.vJ)((()=>{if(!F)return;if(y>0&&(!v||v.length<y))return void F(!0);const{scrollHeight:e,clientHeight:t}=B.current;t&&e<t&&F()}),[v,F,y]),(0,a.Nf)((()=>{(0,r.gm)((()=>{const e=B.current,t=I.current;let n;if(t.listItemElements=e.querySelectorAll(g),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:a}=e,o=t.currentAnchor.getBoundingClientRect().top;n=a+(o-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}if(b||E)return;const{scrollTop:a}=e;return C&&0===a?void 0:()=>{(0,i.A)(e,n),t.isScrollTopJustUpdated=!0}}))}),[v,g,E,C,w,b]);const K=(0,d.A)((e=>{if(J&&F){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=I.current,a=I.current.listItemElements;if(e)return void(I.current.isScrollTopJustUpdated=!1);const o=a.length,r=B.current,{scrollTop:l,scrollHeight:i,offsetHeight:s}=r,c=l<=(o?a[0].offsetTop:0)+p,d=(o?a[o-1].offsetTop+a[o-1].offsetHeight:i)-(l+s)<=p;let m=!1;if(c){const e=a[0];if(e){const a=e.getBoundingClientRect().top,o=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:a;t&&void 0!==n&&o>n&&(I.current.currentAnchor=e,I.current.currentAnchorTop=a,m=!0,J())}}if(d){const e=a[o-1];if(e){const a=e.getBoundingClientRect().top,o=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:a;t&&void 0!==n&&o<n&&(I.current.currentAnchor=e,I.current.currentAnchorTop=a,m=!0,F())}}if(!m)if(t?.offsetParent)I.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=a[0];e&&(I.current.currentAnchor=e,I.current.currentAnchorTop=e.getBoundingClientRect().top)}}T&&T(e)}));return a.Ay.createElement("div",{ref:B,className:h,onScroll:K,onWheel:D,teactFastList:!N&&!b,onKeyDown:R,onDragOver:M,onDragLeave:O,onClick:S,style:n},k,b&&v?.length?a.Ay.createElement("div",{teactFastList:!N,style:(0,l.A)("position: relative",c.Ni&&`height: ${f}px`)},x):x)}},22720:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(84051),o=n(66644),r=n(87357),l=n(82393),i=n(4961),s=n(10722),c=n(11217),d=n(37661),m=n(17712),u=n(94803),A=n(59030),h=n(18276),v=n(64493),g=n(9168),y=n(24433),p=n(60859),b=n(42452);const f=e=>{let{ref:t,buttonRef:n,icon:f,iconClassName:E,leftElement:C,buttonClassName:N,menuBubbleClassName:w,secondaryIcon:k,secondaryIconClassName:x,rightElement:L,className:T,style:D,children:S,disabled:R,allowDisabledClick:M,ripple:O,narrow:B,inactive:I,focus:F,destructive:J,multiline:K,isStatic:P,allowSelection:$,withColorTransition:q,contextActions:H,withPortalForMenu:z,href:W,onMouseDown:Y,onClick:_,onContextMenu:X,clickArg:j,onSecondaryIconClick:U,onDragEnter:Q}=e,Z=(0,a.li)(null);t&&(Z=t);const[G,V,ee]=(0,d.A)(),{isContextMenuOpen:te,contextMenuPosition:ne,handleBeforeContextMenu:ae,handleContextMenu:oe,handleContextMenuClose:re,handleContextMenuHide:le}=(0,s.A)(Z,!H),ie=(0,m.A)((()=>Z.current)),se=(0,m.A)((()=>Z.current.closest(".custom-scroll"))),ce=(0,m.A)((()=>(z?document.querySelector("#portals"):Z.current).querySelector(".ListItem-context-menu .bubble"))),de=(0,m.A)((()=>({withPortal:z}))),{positionX:me,positionY:ue,transformOriginX:Ae,transformOriginY:he,style:ve}=(0,u.A)(ne,ie,se,ce,de),ge=(0,m.A)((e=>{e.ctrlKey||e.metaKey||e.shiftKey||e.button!==l.w3.Main||e.preventDefault()})),ye=(0,m.A)((e=>{if((!R||M)&&_){if(W){if((e.ctrlKey||e.metaKey||e.shiftKey)&&e.button===l.w3.Main||e.button===l.w3.Auxiliary)return;e.preventDefault()}_(e,j),l.TF&&!O&&(V(),(0,o.YS)(ee))}})),{handleClick:pe,handleMouseDown:be}=(0,c.Q)((e=>{R&&!M||0!==e.button||!U&&!H||(e.stopPropagation(),U?U(e):oe(e))})),fe=(0,m.A)((e=>{I||l.TF||(!H||e.button!==l.w3.Secondary&&_||ae(e),e.button===l.w3.Main&&(_?ye(e):oe(e)))})),Ee=(0,A.A)(),Ce=(0,r.A)("ListItem",T,$&&"allow-selection",O&&"has-ripple",B&&"narrow",R&&"disabled",M&&"click-allowed",I&&"inactive",ne&&"has-menu-open",F&&"focus",J&&"destructive",K&&"multiline",P&&"is-static",q&&"with-color-transition"),Ne=W?"a":"div";return a.Ay.createElement("div",{ref:Z,className:Ce,dir:Ee.isRtl?"rtl":void 0,style:D,onMouseDown:Y,onDragEnter:Q},a.Ay.createElement(Ne,{className:(0,r.A)("ListItem-button",G&&"active",N),role:P?void 0:"button",href:W,ref:n,tabIndex:P?void 0:0,onClick:!I&&l.TF?ye:ge,onMouseDown:fe,onContextMenu:X||(!I&&H?oe:void 0)},!R&&!I&&O&&a.Ay.createElement(b.A,null),C,f&&a.Ay.createElement(h.A,{name:f,className:(0,r.A)("ListItem-main-icon",E)}),K&&a.Ay.createElement("div",{className:"multiline-item"},S),!K&&S,k&&a.Ay.createElement(v.A,{className:(0,r.A)("secondary-icon",x),round:!0,color:"translucent",size:"smaller",onClick:pe,onMouseDown:be},a.Ay.createElement(h.A,{name:k})),L),H&&void 0!==ne&&a.Ay.createElement(g.A,{isOpen:te,transformOriginX:Ae,transformOriginY:he,positionX:me,positionY:ue,style:ve,className:"ListItem-context-menu with-menu-transitions",autoClose:!0,onClose:re,onCloseAnimationEnd:le,withPortal:z,bubbleClassName:w},H.map((e=>"isSeparator"in e?a.Ay.createElement(p.A,{key:e.key||"separator"}):a.Ay.createElement(y.A,{key:e.title,icon:e.icon,destructive:e.destructive,disabled:!e.handler,onClick:e.handler},a.Ay.createElement("span",{className:"list-item-ellipsis"},(0,i.A)(e.title)))))))}},60859:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357);const r={root:"h039vb1K",thin:"NGKaFgra",thick:"_BdnjPEa"},l=e=>{let{className:t,size:n="thin"}=e;return a.Ay.createElement("div",{className:(0,o.A)(r.root,r[n],t)})}},8410:(e,t,n)=>{n.d(t,{A:()=>b,U:()=>p});var a=n(84051),o=n(87357),r=n(52674),l=n(14680),i=n(91034),s=n(29441),c=n(32706),d=n(26072),m=n(17712),u=n(37859),A=n(59030),h=n(34201),v=n(18276),g=n(64493),y=n(3325);const p=200,b=(0,i.A)((e=>{let{dialogRef:t,title:n,className:i,contentClassName:b,isOpen:f,isSlim:E,header:C,hasCloseButton:N,hasAbsoluteCloseButton:w,noBackdrop:k,noBackdropClose:x,children:L,style:T,onClose:D,onCloseAnimationEnd:S,onEnter:R,shouldSkipHistoryAnimations:M}=e;const{shouldRender:O,transitionClassNames:B}=(0,h.A)(f,S,M,void 0,M),I=(0,a.li)(null),F=N||w;(0,a.vJ)((()=>{if(f)return(0,l.FD)(),l.wb}),[f]);const J=(0,m.A)((e=>!!R&&(e.preventDefault(),R(),!0)));(0,a.vJ)((()=>f?(0,r.A)({onEsc:D,onEnter:J}):void 0),[f,D,J]),(0,a.vJ)((()=>f&&I.current?(0,s.A)(I.current):void 0),[f]),(0,d.A)({isActive:f,onBack:D}),(0,u.A)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",Boolean(f)),(f||!f&&void 0!==t)&&(0,c.UH)(p),()=>{document.body.classList.remove("has-open-dialog")}}),[f]);const K=(0,A.A)();if(!O)return;const P=(0,o.A)("Modal",i,B,k&&"transparent-backdrop",E&&"slim");return a.Ay.createElement(y.A,null,a.Ay.createElement("div",{ref:I,className:P,tabIndex:-1,role:"dialog"},a.Ay.createElement("div",{className:"modal-container"},a.Ay.createElement("div",{className:"modal-backdrop",onClick:x?void 0:D}),a.Ay.createElement("div",{className:"modal-dialog",ref:t},C||(n||F?a.Ay.createElement("div",{className:"modal-header"},F&&a.Ay.createElement(g.A,{className:(0,o.A)(w&&"modal-absolute-close-button"),round:!0,color:"translucent",size:"smaller",ariaLabel:K("Close"),onClick:D},a.Ay.createElement(v.A,{name:"close"})),a.Ay.createElement("div",{className:"modal-title"},n)):void 0),a.Ay.createElement("div",{className:(0,o.A)("modal-content custom-scroll",b),style:T},L)))))}))},21052:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(84051),o=n(13439),r=n(31481),l=n(87357),i=n(11778),s=n(34201),c=n(64493),d=n(3325);const m=3e3,u=e=>{let{title:t,className:n,message:u,duration:A=m,containerId:h,onDismiss:v,action:g,actionText:y}=e;const p=(0,o.ko)(),[b,f]=(0,a.J0)(!0),E=(0,a.li)(null),{transitionClassNames:C}=(0,s.A)(b),N=(0,a.hb)((()=>{f(!1),setTimeout(v,150+r.xB5)}),[v]),w=(0,a.hb)((()=>{g&&(Array.isArray(g)?g.forEach((e=>p[e.action](e.payload))):p[g.action](g.payload)),N()}),[g,p,N]);(0,a.vJ)((()=>b?(0,i.A)(N):void 0),[b,N]),(0,a.vJ)((()=>(E.current=window.setTimeout(N,A),()=>{E.current&&(clearTimeout(E.current),E.current=void 0)})),[A,N]);const k=(0,a.hb)((()=>{E.current&&(clearTimeout(E.current),E.current=void 0)}),[]),x=(0,a.hb)((()=>{E.current=window.setTimeout(N,A)}),[A,N]);return a.Ay.createElement(d.A,{className:"Notification-container",containerId:h},a.Ay.createElement("div",{className:(0,l.A)("Notification",C,n),onClick:w,onMouseEnter:k,onMouseLeave:x},a.Ay.createElement("div",{className:"content"},t&&a.Ay.createElement("div",{className:"notification-title"},t),u),g&&y&&a.Ay.createElement(c.A,{color:"translucent-white",onClick:w,className:"Notification-button"},y)))}},35913:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(84051),o=n(66644),r=n(19822),l=n(87357),i=n(86974),s=n(41257),c=n(38691),d=n(18276);const m={s:42,m:48,l:54,xl:52},u=.05,A=(0,a.ph)((e=>{let{progress:t=0,size:n="l",square:A,transparent:h,noCross:v,rotationOffset:g,withColor:y,onClick:p}=e;const b=(0,a.li)(null),f=m[n],E=(0,s.i)(t),C=(0,c.A)(),N=(0,i.A)(b,!y);(0,a.vJ)((()=>{let e,t,a=!0,l=u;(0,r.i0)((()=>{if(!b.current)return!1;E.current!==t&&(l=Math.min(Math.max(u,t||0),1),e=Date.now(),t=E.current);const o=Math.min(Math.max(u,E.current),1),i=Math.min(1,(Date.now()-e)/600),s=r.qM.easeOutQuad(i),c=l+(o-l)*s;return function(e,t,n,a,o,r){let l=arguments.length>6&&void 0!==arguments[6]&&arguments[6];const i=t/2,s=(t-n)/2-2*r,c=(arguments.length>7?arguments[7]:void 0)??Date.now()%2e3/2e3,d=2*Math.PI*c,m=d+2*Math.PI*o,u=e.getContext("2d");l&&(e.width=t,e.height=t,u.lineCap="round",u.strokeStyle=a,u.lineWidth=n),u.clearRect(0,0,t,t),u.beginPath(),u.arc(i,i,s,d,m),u.stroke()}(b.current,f*C,("xl"===n?3:2)*C,N??"white",c,C,a,g),a=!1,c<1}),o.RK)}),[E,n,f,C,g,N]);const w=(0,l.A)(`ProgressSpinner size-${n}`,h&&"transparent",A&&"square",v&&"no-cross");return a.Ay.createElement("div",{className:w,onClick:p},!v&&a.Ay.createElement(d.A,{name:"close"}),a.Ay.createElement("canvas",{ref:b,className:"ProgressSpinner_canvas",style:`width: ${f}; height: ${f}px;`}))}))},98033:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(84051),o=n(17712),r=n(87357),l=n(59030),i=n(57474);const s=(0,a.ph)((e=>{let{id:t,label:n,subLabel:o,subLabelClassName:s,value:c,name:d,checked:m,disabled:u,hidden:A,isLoading:h,className:v,onChange:g,isLink:y,onSubLabelClick:p}=e;const b=(0,l.A)(),f=(0,r.A)("Radio",v,u&&"disabled",A&&"hidden-widget",h&&"loading");return a.Ay.createElement("label",{className:f,dir:b.isRtl?"rtl":void 0},a.Ay.createElement("input",{type:"radio",name:d,value:c,id:t,checked:m,onChange:g,disabled:u||A}),a.Ay.createElement("div",{className:"Radio-main"},a.Ay.createElement("span",{className:"label",dir:b.isRtl?"auto":void 0},n),o&&a.Ay.createElement("span",{className:(0,r.A)(s,"subLabel",y?"subLabelLink":void 0),dir:b.isRtl?"auto":void 0,onClick:y?p:void 0},o)),h&&a.Ay.createElement(i.A,null))})),c=(0,a.ph)((e=>{let{id:t,name:n,options:r,selected:l,disabled:i,loadingOption:c,onChange:d,onClickAction:m,subLabelClassName:u,isLink:A,subLabel:h}=e;const v=(0,a.hb)((e=>{const{value:t}=e.currentTarget;d(t,e)}),[d]),g=(0,o.A)((e=>()=>{m?.(e)}));return a.Ay.createElement("div",{id:t,className:"radio-group"},r.map((e=>a.Ay.createElement(s,{name:n,label:e.label,subLabel:h||e.subLabel,subLabelClassName:u,value:e.value,checked:e.value===l,hidden:e.hidden,disabled:i,isLoading:c?c===e.value:void 0,className:e.className,onChange:v,onSubLabelClick:g(e.value),isLink:A}))))}))},82497:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357),r=n(59030);const l=(0,a.ph)((e=>{let{options:t,min:n=0,max:l=(t?t.length-1:100),step:i=1,label:s,value:c,disabled:d,bold:m,className:u,renderValue:A,onChange:h}=e;const v=(0,r.A)(),g=(0,a.hb)((e=>{h(Number(e.currentTarget.value))}),[h]),y=(0,o.A)(u,"RangeSlider",d&&"disabled",m&&"bold"),p=(0,a.Kr)((()=>t?c/(t.length-1)*100:(c-n)/((l-n)/i)*100),[t,c,l,n,i]);return a.Ay.createElement("div",{className:y},s&&a.Ay.createElement("div",{className:"slider-top-row",dir:v.isRtl?"rtl":void 0},a.Ay.createElement("span",{className:"label",dir:"auto"},s),!t&&a.Ay.createElement("span",{className:"value",dir:"auto"},A?A(c):c)),a.Ay.createElement("div",{className:"slider-main"},a.Ay.createElement("div",{className:"slider-fill-track",style:`width: ${p}%`}),a.Ay.createElement("input",{min:n,max:l,value:c,step:i,type:"range",className:"RangeSlider__input",onChange:g}),t&&a.Ay.createElement("div",{className:"slider-options"},t.map(((e,t)=>a.Ay.createElement("div",{className:(0,o.A)("slider-option",t===c&&"active"),onClick:()=>h(t)},e))))))}))},11124:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357);const r=(0,a.ph)((e=>{let{marks:t,onChange:n,rangeCount:r}=e;const l=(0,a.li)(null),i=(0,a.Kr)((()=>(t.indexOf(r)/(t.length-1)*100).toFixed(2)),[t,r]),s=(0,a.Kr)((()=>t.indexOf(r)),[t,r]),c=(0,a.Kr)((()=>t.indexOf(r).toString()),[t,r]);return(0,a.Nf)((()=>{l.current.style.setProperty("--fill-percentage",`${i}%`)}),[i]),a.Ay.createElement("div",{className:"s8NMMSES"},a.Ay.createElement("form",null,a.Ay.createElement("div",{className:"i_wrxmyh"},a.Ay.createElement("div",{className:"O7SI4r_Y"},t.map(((e,t)=>{const n=t<=s;return a.Ay.createElement("div",{key:e,className:(0,o.A)("b6UDc3zh",n?"VELPJsJ0":"K8NtimIi")})}))),a.Ay.createElement("div",{className:"bVlnaLCI"},t.map((e=>a.Ay.createElement("div",{key:e,className:(0,o.A)("AFFaq4eZ",r===e&&"cuogxYPG")},e)))),a.Ay.createElement("input",{ref:l,type:"range",className:"H_rMZrqn",min:"0",max:t.length-1,value:c,onChange:e=>{const a=parseInt(e.target.value,10),o=t[a];n(o)},step:"1"}))))}))},66469:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(84051),o=n(82393),r=n(17712),l=n(64493);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}let s,c=!0;const d=e=>{let{onActivate:t,...n}=e;const d=(0,a.li)(!1),m=(0,r.A)((e=>{if(d.current=!0,c)return c=!1,void t(e);s&&(clearTimeout(s),s=void 0),s=window.setTimeout((()=>{d.current&&t(e)}),200)})),u=(0,r.A)((()=>{d.current=!1})),A=(0,r.A)((e=>{d.current=!0,t(e)}));return a.Ay.createElement(l.A,i({},n,{onMouseEnter:o.TF?void 0:m,onMouseLeave:o.TF?void 0:u,onClick:o.TF?A:t}))}},36393:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(84051),o=n(87357),r=n(37661),l=n(79174),i=n(59030),s=n(64493),c=n(52745),d=n(41036);const m=(0,a.ph)((e=>{let{ref:t,children:n,parentContainerClassName:m,value:u,inputId:A,className:h,focused:v,isLoading:g=!1,spinnerColor:y,spinnerBackgroundColor:p,placeholder:b,disabled:f,autoComplete:E,canClose:C,autoFocusSearch:N,onChange:w,onReset:k,onFocus:x,onBlur:L,onSpinnerClick:T}=e,D=(0,a.li)(null);t&&(D=t);const[S,R,M]=(0,r.A)(v);(0,l.A)(D,N,M),(0,a.vJ)((()=>{D.current&&(v?D.current.focus():D.current.blur())}),[v,b]);const O=(0,i.A)(),B=(0,a.hb)((e=>{if("ArrowDown"===e.key||"Enter"===e.key){const e=document.querySelector(`.${m} .ListItem-button`);e&&e.focus()}}),[m]);return a.Ay.createElement("div",{className:(0,o.A)("SearchInput",h,S&&"has-focus"),dir:O.isRtl?"rtl":void 0},n,a.Ay.createElement("input",{ref:D,id:A,type:"text",dir:"auto",placeholder:b||O("Search"),className:"form-control",value:u,disabled:f,autoComplete:E,onChange:function(e){const{currentTarget:t}=e;w(t.value)},onFocus:function(){R(),x&&x()},onBlur:function(){M(),L&&L()},onKeyDown:B}),a.Ay.createElement(d.Ay,{name:"fade",shouldCleanup:!0,activeKey:Number(g),className:"icon-container"},g?a.Ay.createElement(c.A,{color:y,backgroundColor:p,onClick:T}):a.Ay.createElement("i",{className:"icon icon-search search-icon"})),!g&&(u||C)&&k&&a.Ay.createElement(s.A,{round:!0,size:"tiny",color:"translucent",onClick:k},a.Ay.createElement("span",{className:"icon icon-close"})))}))},63173:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357);const r=(0,a.ph)((e=>{const{id:t,value:n,label:r,hasArrow:l,error:i,ref:s,tabIndex:c,onChange:d,children:m}=e,u=i||r,A=(0,o.A)("input-group",n&&"touched",i&&"error",u&&"with-label",l&&"with-arrow","input-group");return a.Ay.createElement("div",{className:A},a.Ay.createElement("select",{className:"form-control",id:t,value:n||"",onChange:d,tabIndex:c,ref:s},m),u&&t&&a.Ay.createElement("label",{htmlFor:t},u))}))},91356:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(52844),r=n(68584);const l=(0,a.ph)((e=>{let{onChange:t,inputRef:n}=e;const[l,i]=(0,a.J0)(),s=(0,a.hb)((e=>{i(void 0),t(e)}),[t]),c=(0,a.hb)((()=>{i(void 0)}),[]),d=(0,a.hb)((()=>{(0,o.p)("image/png, image/jpeg",(e=>{const t=e.target;t?.files?.[0]&&i(t.files[0])}),!0)}),[]);return a.Ay.createElement(a.Ay.Fragment,null,a.Ay.createElement("input",{ref:n,className:"axfkbhWJ",onClick:d}),a.Ay.createElement(r.A,{file:l,onClose:c,onChange:s}))}))},32581:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357),r=n(59030);const l=function(e){let{children:t,className:n}=e;const l=(0,r.A)();return a.Ay.createElement("div",{dir:l.isRtl?"rtl":void 0,className:(0,o.A)("LxlpQKLr",n)},t)}},55573:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(59030),r=n(64493);const l=e=>{let{count:t,itemName:n,itemPluralName:l,isLoading:i,onClick:s}=e;const c=(0,o.A)();return a.Ay.createElement(r.A,{className:"ShowMoreButton",color:"translucent",size:"smaller",isText:!0,isLoading:i,isRtl:c.isRtl,onClick:s},a.Ay.createElement("i",{className:"icon icon-down"}),"Show ",t," more ",t>1?l||`${n}s`:n)}},26607:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(84051),o=n(87357),r=n(29886),l=n(34201);const i=e=>{let{isOpen:t,isHidden:n,isCustom:i,id:s,className:c,onClick:d,children:m,noCloseTransition:u,shouldAnimateFirstRender:A,style:h,ref:v}=e;const g=(0,r.A)(t),y=(0,r.A)(m),p=(0,a.li)(),b=void 0===g,{shouldRender:f,transitionClassNames:E}=(0,l.A)(t&&!n,void 0,b&&!A,!i&&void 0,u);return g&&!t&&(p.current=y),(f||n)&&a.Ay.createElement("div",{id:s,ref:v,className:(0,o.A)(c,E),onClick:d,style:h},t?m:p.current)}},63152:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(84051),o=n(87357);const r=(0,a.ph)((e=>{let{id:t,name:n,value:r,label:l,checked:i=!1,disabled:s,inactive:c,noAnimation:d,onChange:m,onCheck:u}=e;const A=(0,a.hb)((e=>{m&&m(e),u&&u(e.currentTarget.checked)}),[m,u]),h=(0,o.A)("Switcher",s&&"disabled",c&&"inactive",d&&"no-animation");return a.Ay.createElement("label",{className:h,title:l},a.Ay.createElement("input",{type:"checkbox",id:t,name:n,value:r,checked:i,disabled:s,onChange:A}),a.Ay.createElement("span",{className:"widget"}))}))},34132:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(84051),o=n(66644),r=n(87357),l=n(41402),i=n(82393),s=n(4961),c=n(10722),d=n(11217),m=n(17712),u=n(94803),A=n(9168),h=n(24433),v=n(60859);const g="Tab--active",y=e=>{let{className:t,title:n,isActive:y,isBlocked:p,badgeCount:b,isBadgeActive:f,previousActiveTab:E,onClick:C,clickArg:N,contextActions:w,contextRootElementSelector:k}=e;const x=(0,a.li)(null);(0,a.Nf)((()=>{y&&void 0===E&&x.current&&x.current.classList.add(g)}),[y,E]),(0,a.vJ)((()=>{if(!y||void 0===E)return;const e=x.current,t=e.parentElement.children[E];if(!t)return void(y&&!e.classList.contains(g)&&(0,o.RK)((()=>{e.classList.add(g)})));const n=e.querySelector(".platform"),a=t.querySelector(".platform"),r=a.parentElement.offsetLeft-n.parentElement.offsetLeft,i=a.clientWidth/n.clientWidth;(0,o.RK)((()=>{a.classList.remove("animate"),n.classList.remove("animate"),n.style.transform=`translate3d(${r}px, 0, 0) scale3d(${i}, 1, 1)`,(0,o.gm)((()=>((0,l.A)(n),()=>{n.classList.add("animate"),n.style.transform="none",t.classList.remove(g),e.classList.add(g)})))}))}),[y,E]);const{contextMenuPosition:L,handleContextMenu:T,handleBeforeContextMenu:D,handleContextMenuClose:S,handleContextMenuHide:R,isContextMenuOpen:M}=(0,c.A)(x,!w),{handleClick:O,handleMouseDown:B}=(0,d.Q)((e=>{!w||e.button!==i.w3.Secondary&&C||D(e),"mousedown"===e.type&&e.button!==i.w3.Main||C?.(N)})),I=(0,m.A)((()=>x.current)),F=(0,m.A)((()=>k?x.current.closest(k):document.body)),J=(0,m.A)((()=>document.querySelector("#portals").querySelector(".Tab-context-menu .bubble"))),K=(0,m.A)((()=>({withPortal:!0}))),{positionX:P,positionY:$,transformOriginX:q,transformOriginY:H,style:z}=(0,u.A)(L,I,F,J,K);return a.Ay.createElement("div",{className:(0,r.A)("Tab",C&&"Tab--interactive",t),onClick:O,onMouseDown:B,onContextMenu:T,ref:x},a.Ay.createElement("span",{className:"Tab_inner"},(0,s.A)(n),Boolean(b)&&a.Ay.createElement("span",{className:(0,r.A)("badge",f&&"Tab__badge--active")},b),p&&a.Ay.createElement("i",{className:"icon icon-lock-badge blocked"}),a.Ay.createElement("i",{className:"platform"})),w&&void 0!==L&&a.Ay.createElement(A.A,{isOpen:M,transformOriginX:q,transformOriginY:H,positionX:P,positionY:$,style:z,className:"Tab-context-menu",autoClose:!0,onClose:S,onCloseAnimationEnd:R,withPortal:!0},w.map((e=>"isSeparator"in e?a.Ay.createElement(v.A,{key:e.key||"separator"}):a.Ay.createElement(h.A,{key:e.title,icon:e.icon,destructive:e.destructive,disabled:!e.handler,onClick:e.handler},e.title)))))}},24680:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(84051),o=n(31481),r=n(57446),l=n(87357),i=n(82393),s=n(36838),c=n(59030),d=n(29886),m=n(34132);const u=i.pz?450:i.Ni?400:300,A=(0,a.ph)((e=>{let{tabs:t,areFolders:n,activeTab:i,big:A,onSwitchTab:h,contextRootElementSelector:v,className:g}=e;const y=(0,a.li)(null),p=(0,d.A)(i);(0,s.A)(y,void 0,!0),(0,a.vJ)((()=>{const e=y.current,{scrollWidth:t,offsetWidth:n,scrollLeft:a}=e;if(t<=n)return;const o=e.childNodes[i];if(!o)return;const{offsetLeft:l,offsetWidth:s}=o,c=l-n/2+s/2;Math.abs(c-a)<16||(0,r.A)(e,c,u)}),[i]);const b=(0,c.A)();return a.Ay.createElement("div",{className:(0,l.A)("TabList","no-scrollbar",A&&"big",g),ref:y,dir:b.isRtl?"rtl":void 0},t.map(((e,t)=>a.Ay.createElement(m.A,{key:e.id??e.title,title:n&&e.id!==o.DSF?e.title:b(e.title),isActive:t===i,isBlocked:e.isBlocked,badgeCount:e.badgeCount,isBadgeActive:e.isBadgeActive,previousActiveTab:p,onClick:h,clickArg:t,contextActions:e.contextActions,contextRootElementSelector:v}))))}))},94079:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(84051),o=n(66644),r=n(87357),l=n(17712),i=n(59030);const s=(0,a.ph)((e=>{let{ref:t,id:n,className:s,value:c,label:d,error:m,success:u,disabled:A,readOnly:h,placeholder:v,autoComplete:g,inputMode:y,maxLength:p,maxLengthIndicator:b,tabIndex:f,onChange:E,onInput:C,onKeyPress:N,onKeyDown:w,onBlur:k,onPaste:x,noReplaceNewlines:L}=e,T=(0,a.li)(null);t&&(T=t);const D=(0,i.A)(),S=m||u||d,R=(0,r.A)("input-group",c&&"touched",m?"error":u&&"success",A&&"disabled",h&&"disabled",S&&"with-label",s),M=(0,l.A)((e=>{(0,o.RK)((()=>{e.style.height="0",(0,o.gm)((()=>{const t=e.scrollHeight;return()=>{e.style.height=`${t}px`}}))}))}));(0,a.Nf)((()=>{const e=T.current;e&&M(e)}),[]);const O=(0,a.hb)((e=>{const t=e.currentTarget;if(!L){const e=t.selectionEnd;t.value=t.value.replace(/\n/g," "),t.selectionEnd=e}M(t),E?.(e)}),[L,E]);return a.Ay.createElement("div",{className:R,dir:D.isRtl?"rtl":void 0},a.Ay.createElement("textarea",{ref:T,className:"form-control",id:n,dir:"auto",value:c||"",tabIndex:f,placeholder:v,maxLength:p,autoComplete:g,inputMode:y,disabled:A,readOnly:h,onChange:O,onInput:C,onKeyPress:N,onKeyDown:w,onBlur:k,onPaste:x,"aria-label":S}),S&&a.Ay.createElement("label",{htmlFor:n},S),b&&a.Ay.createElement("div",{className:"max-length-indicator"},b))}))},61361:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(84051),o=n(17663),r=n(80140),l=n(32625),i=n(30857),s=n(59030);const c=(0,a.ph)((e=>{let{langKey:t,endsAt:n,onEnd:c}=e;const d=(0,s.A)(),m=(0,i.A)(),u=(0,r.Fm)(),A=u<n;if((0,l.A)(m,A?500:void 0),(0,a.vJ)((()=>{A||c?.()}),[A,c]),!A)return;const h=n-u,v=(0,o.QO)(h);return a.Ay.createElement("span",null,d(t,v))}))},629:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357);const r={root:"eGD1rubd",widget:"EXXsQxeq",min:"C4vXj96y",mid:"nRNm3LRD",max:"LdztzMx0",filler:"kudEBJOk"},l=(0,a.ph)((function(e){let{value:t}=e;return a.Ay.createElement("div",{className:(0,o.A)(r.root,"Toggle"),"aria-hidden":!0},a.Ay.createElement("i",{className:(0,o.A)(r.filler,r[t])}),a.Ay.createElement("i",{className:(0,o.A)(r.widget,r[t])}))}))},283:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357);const r="AtWkrIxV",l=(0,a.ph)((()=>a.Ay.createElement("div",{className:"Oob7moh7"},a.Ay.createElement("div",{className:(0,o.A)("ao0o6F_1",r)}),a.Ay.createElement("div",{className:"e94nYlC4"},a.Ay.createElement("div",{className:(0,o.A)("ANs9RCJu",r)}),a.Ay.createElement("div",{className:(0,o.A)("RSn3O5Rx",r)})))))},55158:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(84051),o=n(87357),r=n(95807);const l=e=>{let{variant:t="rectangular",animation:n="wave",width:l,height:i,forceAspectRatio:s,inline:c,className:d}=e;const m=(0,o.A)("Skeleton",t,n,d,c&&"inline"),u=l&&i?`aspect-ratio: ${l}/${i}`:void 0,A=(0,r.A)(s&&u,Boolean(l)&&`width: ${l}px`,!s&&Boolean(i)&&`height: ${i}px`);return a.Ay.createElement("div",{className:m,style:A},c&&" ")}}}]);
//# sourceMappingURL=4765.2a64f7f2f16a1febf31a.js.map