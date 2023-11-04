"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,f=h["".concat(s,".").concat(p)]||h[p]||m[p]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={id:"transforming",title:"Transforming",sidebar_label:"Transforming"},i=void 0,l={unversionedId:"user_manual/transforming",id:"user_manual/transforming",title:"Transforming",description:"Currently, there are three types of transformations in Pixelorama. Translation (moving), scale and rotation. Transformations can either affect the currently active entire cels, or selections.",source:"@site/docs/user_manual/transforming.md",sourceDirName:"user_manual",slug:"/user_manual/transforming",permalink:"/Pixelorama-Docs/user_manual/transforming",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/transforming.md",tags:[],version:"current",lastUpdatedBy:"Variable",lastUpdatedAt:1699113173,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{id:"transforming",title:"Transforming",sidebar_label:"Transforming"},sidebar:"docs",previous:{title:"Tools",permalink:"/Pixelorama-Docs/user_manual/tools"},next:{title:"Brush",permalink:"/Pixelorama-Docs/concepts/brush"}},s={},c=[{value:"Move",id:"move",level:2},{value:"Scale",id:"scale",level:2},{value:"Rotate",id:"rotate",level:2},{value:"Having An Active Transformation",id:"having-an-active-transformation",level:2},{value:"Applying A Transformation",id:"applying-a-transformation",level:3},{value:"Canceling A Transformation",id:"canceling-a-transformation",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Currently, there are three types of transformations in Pixelorama. Translation (moving), scale and rotation. Transformations can either affect the currently active entire cels, or ",(0,a.kt)("a",{parentName:"p",href:"selecting"},"selections"),"."),(0,a.kt)("p",null,"Keep in mind that ",(0,a.kt)("strong",{parentName:"p"},"any content moved outside the canvas boundaries will be lost"),"."),(0,a.kt)("h2",{id:"move"},"Move"),(0,a.kt)("p",null,"To move pixels around in the canvas, you can use the Move tool. It works by simply holding the mapped mouse button and dragging the cursor to where you want to move the content. If there is no active selection, it will move the entire content of the active cels. If there is a selection, it will start a selection transformation, and it will move both the selection itself and its content. To move a selection, it is also possible to use a selection tool and click inside the selected area and, while the mapped mouse button is being held, drag the cursor, just like you do with the Move tool. There are some keyboard shortcuts that can help you with movement. ",(0,a.kt)("strong",{parentName:"p"},"The order of the key press and mouse button press matters for the selection tools.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mouse movement + ",(0,a.kt)("kbd",null,"Shift")," = Moves & snaps selection to an axis."),(0,a.kt)("li",{parentName:"ul"},"Mouse movement + ",(0,a.kt)("kbd",null,"Control")," = Moves & snaps selection to the rectangular grid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Alt")," + Mouse movement = Moves selection without content. **This only works for the selection tools and not the Move tool.**"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Control")," + ",(0,a.kt)("kbd",null,"Alt")," + mouse movement = Copies selection and moves it without cutting it from the original position. This is basically a quick way to copy and move stuff around without ",(0,a.kt)("kbd",null,"Control + C")," and ",(0,a.kt)("kbd",null,"Control + V"),". **This only works for the selection tools and not the Move tool.**")),(0,a.kt)("p",null,"If you have a selection tool active, you can also use the arrow keys to move the selection and contents. Pressing ",(0,a.kt)("kbd",null,"Alt")," only moves the selection without content, and holding ",(0,a.kt)("kbd",null,"Control")," moves the selection by the size of the rectangular grid tiles. You can also manually change the position of the selection from the tool options. If there is an active transformation, the content will be affected as well, otherwise, it will only move the selection itself without its content."),(0,a.kt)("h2",{id:"scale"},"Scale"),(0,a.kt)("p",null,"To resize your image, you can go to the Image menu and select ",(0,a.kt)("strong",{parentName:"p"},"Scale Image"),". There you can choose the new size of your entire ",(0,a.kt)("a",{parentName:"p",href:"../concepts/project"},"project"),". You can also just expand the canvas without affecting the content that is inside by going to the Image menu and pressing ",(0,a.kt)("strong",{parentName:"p"},"Resize Canvas"),". Furthermore, you can go to Image -> Crop Image, which will remove all of the transparent pixels that surround your drawing, by shrinking the size of the image. Of course, all of these options will affect all of the cels of the project."),(0,a.kt)("p",null,"If you want you resize only selected part(s) of your artwork, you can create a ",(0,a.kt)("a",{parentName:"p",href:"selecting"},"selection")," and use one of the eight gizmos that appear on each side of the selection borders. To use them, you can simply left-click on them, hold, then move your cursor. Moving it outwards will expand the size, while moving it inwards will shrink it. Using gizmos will start a selection transformation. Like with movement, there are some keyboard shortcuts you can use to give you more control over the transformation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mouse click + ",(0,a.kt)("kbd",null,"Shift")," = Keeps the original aspect ratio of the selection."),(0,a.kt)("li",{parentName:"ul"},"Mouse click + ",(0,a.kt)("kbd",null,"Control")," = Expands from the center."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Alt")," + Mouse click = Only affects the selection and not the content.")),(0,a.kt)("p",null,"You can also manually change the size of the selection from the tool options. If there is an active transformation, the content will be affected as well, otherwise, it will only scale the selection itself without its content."),(0,a.kt)("h2",{id:"rotate"},"Rotate"),(0,a.kt)("p",null,"To rotate your image, you can go to the Image menu and select Rotate Image. There, you can choose one of the three rotation algorithms. You can experiment with every one of them to see what works best for you. You are also given the option to only affect the selected part of the image or the entire area of the active cels. In the future, there will most likely be gizmos that rotate the selection directly, just like there are for scaling."),(0,a.kt)("h2",{id:"having-an-active-transformation"},"Having An Active Transformation"),(0,a.kt)("p",null,"When moving or scaling a selection with its contents, the selected pixels will suddenly become transparent. This indicates that a selection transformation has started. This means that your changes haven't yet been applied to the image. When there is an active transformation, moving and scaling will only affect the transformed content and nothing else, until it is applied."),(0,a.kt)("h3",{id:"applying-a-transformation"},"Applying A Transformation"),(0,a.kt)("p",null,"To apply your changes, you can either press ",(0,a.kt)("kbd",null,"Enter"),", or by doing any other action, such as drawing, applying an image effect, selecting another cel, adding a new frame or layer, etc. Doing any of these will automatically apply your changes."),(0,a.kt)("h3",{id:"canceling-a-transformation"},"Canceling A Transformation"),(0,a.kt)("p",null,"To cancel a transformation, you can either press ",(0,a.kt)("kbd",null,"Escape")," or undo. You will not be able to redo your actions if you decide to cancel."))}m.isMDXComponent=!0}}]);