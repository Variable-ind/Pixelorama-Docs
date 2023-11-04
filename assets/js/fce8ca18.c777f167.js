"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[872],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),k=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=k(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),h=k(a),d=l,p=h["".concat(m,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(p,r(r({ref:e},s),{},{components:a})):n.createElement(p,r({ref:e},s))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=h;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:l,r[1]=i;for(var k=2;k<o;k++)r[k]=a[k];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1749:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>k});var n=a(7462),l=(a(7294),a(3905));const o={id:"tools",title:"Tools",sidebar_label:"Tools"},r=void 0,i={unversionedId:"user_manual/tools",id:"user_manual/tools",title:"Tools",description:"Tools are the main way to interact with your artwork.",source:"@site/docs/user_manual/tools.md",sourceDirName:"user_manual",slug:"/user_manual/tools",permalink:"/Pixelorama-Docs/user_manual/tools",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/tools.md",tags:[],version:"current",lastUpdatedBy:"Variable",lastUpdatedAt:1699110687,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{id:"tools",title:"Tools",sidebar_label:"Tools"},sidebar:"docs",previous:{title:"Shading",permalink:"/Pixelorama-Docs/user_manual/shading"},next:{title:"Transforming",permalink:"/Pixelorama-Docs/user_manual/transforming"}},m={},k=[{value:"Pixelorama&#39;s toolbar, located on the left side of the application window.",id:"pixeloramas-toolbar-located-on-the-left-side-of-the-application-window",level:5},{value:"Left and right mouse buttons",id:"left-and-right-mouse-buttons",level:2},{value:"A screenshot example of the Pencil tool having a blue half background, which is mapped to the left mouse button and the Eraser tool having an orange half background, which is mapped to the right mouse button.",id:"a-screenshot-example-of-the-pencil-tool-having-a-blue-half-background-which-is-mapped-to-the-left-mouse-button-and-the-eraser-tool-having-an-orange-half-background-which-is-mapped-to-the-right-mouse-button",level:5},{value:"The tools",id:"the-tools",level:2},{value:"The selection tools",id:"the-selection-tools",level:3},{value:"Canvas navigation tools",id:"canvas-navigation-tools",level:3},{value:"Drawing tools and drawing-assisting tools",id:"drawing-tools-and-drawing-assisting-tools",level:3},{value:"Tool options",id:"tool-options",level:2},{value:"An example of tool options, for the Pencil and Eraser tool.",id:"an-example-of-tool-options-for-the-pencil-and-eraser-tool",level:5},{value:"Changing colors",id:"changing-colors",level:3}],s={toc:k};function u(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Tools are the main way to interact with your artwork."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Pixelorama&#39;s toolbar, located on the left side of the application window.",src:a(3035).Z,width:"48",height:"491"})),(0,l.kt)("h5",{id:"pixeloramas-toolbar-located-on-the-left-side-of-the-application-window"},"Pixelorama's toolbar, located on the left side of the application window."),(0,l.kt)("h2",{id:"left-and-right-mouse-buttons"},"Left and right mouse buttons"),(0,l.kt)("admonition",{title:"tools for left and right mouse buttons",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Left-clicking a tool will assign this tool to your left mouse button and right-clicking it will assign the tool you clicked to your right mouse button. If you left-click on the canvas, your left tool will be activated, and if you right-click on the canvas, your right tool will be activated.")),(0,l.kt)("p",null,"In Pixelorama, you are given the ability to map a different tool to each mouse button, left and right. This essentially means that you can use a different tool with your left mouse button, and a different tool with your right mouse button. The two mouse buttons can be used ",(0,l.kt)("strong",{parentName:"p"},"independently")," of one another. In the toolbar, you will see one of the tool buttons having a half background on the left side of the button as ",(0,l.kt)("strong",{parentName:"p"},"blue"),". This represents the left mouse button, and it means that this specific tool has been ",(0,l.kt)("strong",{parentName:"p"},"mapped to the left mouse button"),". Similarly, the tool button with that has has a half background on the right side as ",(0,l.kt)("strong",{parentName:"p"},"orange is mapped to the right mouse button"),". If a tool button has both a blue and orange background, then this means that this tool has been mapped to both left and right mouse buttons."),(0,l.kt)("p",null,"So, to sum up, blue represents the left mouse button and orange represents the right mouse button. To map a tool to your left mouse button you can left-click the button of the tool you want to map in the toolbar, and to map a tool to your right mouse button you can right-click the tool button."),(0,l.kt)("p",null,"When you are on your ",(0,l.kt)("a",{parentName:"p",href:"user_interface/canvas"},"canvas"),", if you left-click, the tool that you left-clicked on the toolbar will be used and if you right-click, the tool that you right-clicked will be used."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"A screenshot example of the Pencil tool having a blue half background, which is mapped to the left mouse button and the Eraser tool having an orange half background, which is mapped to the right mouse button.",src:a(8434).Z,width:"36",height:"116"})),(0,l.kt)("h5",{id:"a-screenshot-example-of-the-pencil-tool-having-a-blue-half-background-which-is-mapped-to-the-left-mouse-button-and-the-eraser-tool-having-an-orange-half-background-which-is-mapped-to-the-right-mouse-button"},"A screenshot example of the Pencil tool having a blue half background, which is mapped to the left mouse button and the Eraser tool having an orange half background, which is mapped to the right mouse button."),(0,l.kt)("h2",{id:"the-tools"},"The tools"),(0,l.kt)("p",null,"These are all of the available tools in Pixelorama in order, from top to bottom."),(0,l.kt)("h3",{id:"the-selection-tools"},(0,l.kt)("a",{parentName:"h3",href:"selecting"},"The selection tools")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Shortcut"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rectangular Selection"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a rectangular selection."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"R"),", R: ",(0,l.kt)("kbd",null," Alt + R"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elliptical Selection"),(0,l.kt)("td",{parentName:"tr",align:null},"Create an elliptical selection."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"Y"),", R: ",(0,l.kt)("kbd",null," Alt + Y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Polygonal Selection"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a polygonal selection. Click where you want each point of the polygon to be. Double click to end your polygon and finalize your selection area."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"K"),", R: ",(0,l.kt)("kbd",null," Alt + K"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Select By Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Selects all parts of the cel that share the same color."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"W"),", R: ",(0,l.kt)("kbd",null," Alt + W"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Magic Wand"),(0,l.kt)("td",{parentName:"tr",align:null},"Selects the neighboring same-color area of the pixel the cursor was in on mouse button press."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"Q"),", R: ",(0,l.kt)("kbd",null," Alt + Q"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lasso / Free Select Tool"),(0,l.kt)("td",{parentName:"tr",align:null},"Selects a rough outline of an area."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"F"),", R: ",(0,l.kt)("kbd",null," Alt + F"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Move"),(0,l.kt)("td",{parentName:"tr",align:null},"Moves the content of the active cel. Not a selection tool, see ",(0,l.kt)("a",{parentName:"td",href:"transforming"},"transforming"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"T"),", R: ",(0,l.kt)("kbd",null," Alt + T"))))),(0,l.kt)("h3",{id:"canvas-navigation-tools"},(0,l.kt)("a",{parentName:"h3",href:"user_interface/canvas"},"Canvas")," navigation tools"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Shortcut"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zoom"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows the user to change the zoom level of the canvas."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"Z"),", R: ",(0,l.kt)("kbd",null," Alt + Z"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pan"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows the user to move around the canvas."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"M"),", R: ",(0,l.kt)("kbd",null," Alt + M"))))),(0,l.kt)("h3",{id:"drawing-tools-and-drawing-assisting-tools"},(0,l.kt)("a",{parentName:"h3",href:"drawing"},"Drawing tools and drawing-assisting tools")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Shortcut"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color Picker"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the color of the pixel on mouse position."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"O"),", R: ",(0,l.kt)("kbd",null," Alt + O"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pencil"),(0,l.kt)("td",{parentName:"tr",align:null},"Draw individual pixels on mouse position."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"P"),", R: ",(0,l.kt)("kbd",null," Alt + P"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Eraser"),(0,l.kt)("td",{parentName:"tr",align:null},"Erase individual pixels on mouse position."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"E"),", R: ",(0,l.kt)("kbd",null," Alt + E"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"Fill a same-color area or all of the pixels of the same color with a new color."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"B"),", R: ",(0,l.kt)("kbd",null," Alt + B"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shading"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"shading"},"See this page for a detailed explanation.")),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"U"),", R: ",(0,l.kt)("kbd",null," Alt + U"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Line Tool"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a straight line."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"L"),", R: ",(0,l.kt)("kbd",null," Alt + L"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rectangle Tool"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a rectangle."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"S"),", R: ",(0,l.kt)("kbd",null," Alt + S"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ellipse Tool"),(0,l.kt)("td",{parentName:"tr",align:null},"Create an ellipse."),(0,l.kt)("td",{parentName:"tr",align:null},"L: ",(0,l.kt)("kbd",null,"C"),", R: ",(0,l.kt)("kbd",null," Alt + C"))))),(0,l.kt)("p",null,"Hovering your mouse over a tool button will reveal a small display that can give you more information about the tool."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hover",src:a(623).Z,width:"198",height:"142"})),(0,l.kt)("h2",{id:"tool-options"},"Tool options"),(0,l.kt)("p",null,"Almost every tool has certain properties that the user can tweak, such as brush type and size, different modes, color or mirroring. The tool options are located in the right side of the application window and they are separated in left tool and right tool settings. These, of course, correspond to the two tools you have mapped at your two mouse buttons. The two colors are also mapped to different mouse buttons. The left one is for the left mouse button tool, and the right one is for the right mouse button tool."),(0,l.kt)("admonition",{title:"Change mode quickly!",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Most of the tools have some binary property that has to be changed often. Holding ",(0,l.kt)("kbd",null,"Ctrl")," will allow you to quickly alternate between the properties for a given tool as follows:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Tool"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternating Property"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zoom"),(0,l.kt)("td",{parentName:"tr",align:null},"Zoom in / Zoom out")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color picker"),(0,l.kt)("td",{parentName:"tr",align:null},"Pick for left color / Pick for right")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pencil"),(0,l.kt)("td",{parentName:"tr",align:null},"Overwrite color on / off")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"Fill same color area / Fill same color pixels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shading"),(0,l.kt)("td",{parentName:"tr",align:null},"Lighten / Darken option")))),(0,l.kt)("p",null,"The tool options change every time the user changes the available tool, and most tools have their own unique options."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"An example of tool options, for the Pencil and Eraser tool.",src:a(8289).Z,width:"307",height:"325"})),(0,l.kt)("h5",{id:"an-example-of-tool-options-for-the-pencil-and-eraser-tool"},"An example of tool options, for the Pencil and Eraser tool."),(0,l.kt)("h3",{id:"changing-colors"},"Changing colors"),(0,l.kt)("p",null,"On the above screenshot, on the top side, you can see two color buttons, for the left and right tools. To change them, you can either click on them and a color picker window will appear, or you can also choose a color from the palette. Left-clicking a swatch from the palette will change the left color, and right-clicking a swatch will change the right color. You can also switch between them by clicking on the double-arrow button above the two color buttons (also mapped to the ",(0,l.kt)("kbd",null,"X")," keyboard button by default). The small button below the two color buttons is used to change them back to the default colors, which are black for the left color, and white for the right color."))}u.isMDXComponent=!0},8434:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAB0BAMAAAAfoI1cAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUXFxcdHR0kJCQjIyMcHBwWFhYVFRW/v78Ahs/9bRT///8n2+OsAAAAAWJLR0QKaND0VgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UIAhEaBc2HZMgAAAGeSURBVEjHxdUxjtwwDIVhpmK7RTAHSJrUAXKAAJkTZJN+i/Sv+2dOYNVpDN02hWhblLzYKRaIyg+UbJk0afbhU1pPZuf0+eOPWN+/Bn378yvW759BF2vLsZeg6yboORPAG+TyiXDGs2AiB7BEAszGsywTCCVywPNGQJbIAbN0FqBMbuaWSWaaKIJ60kCXeJzZ/qFP0nGStMey/Rh9KaWUko4vpZRS0ks0MrOjJjbyI2kbddkO8pnEuNHxI9uNQMq0pAKIoD7bR1CiyGRHEdTTlu6DlmWoiVK4cRuJpWRa4DZTmaiMVAqxXl5Px0nS3rMmWsnVWmv9mwqz1lprTX2irhzUOkCF+0ArMBDAvU6/O3VqCol8pib9WVtQTb87+b32oIO0Be3UOhXdta+gCOoIb0E9qQX1hKdPeHVAmQywWu/3/UIXOfJ1Xdf92ifpOEna+9fEY7ODvqVFtjX06AdJE7mQhn4vxNDvhVDu90JpnHiQBvI0rQQMM01ROt1GRYFZTw6kl6DVYT9OaGM1kcxS/2rkyrMjJtN/nB1v18Q/37KfVMnQQB0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMDJUMTc6MjY6MDIrMDA6MDC3JAVVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTAyVDE3OjI2OjAyKzAwOjAwxnm96QAAAABJRU5ErkJggg=="},8289:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"},3035:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAHrBAMAAAB7ogPsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUVFRUWFhYcHBwXFxcYGBgiIiIkJCQdHR0jIyO/v78Ahs/9bRT///9toKYoAAAAAWJLR0QMgbNRYwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UIAhEaBLqAVF4AAAQ/SURBVGje7Zo9bmQ3EIS1kVKvIqdy4gP0wkbFG/gGvoEFw5Gwu4DjTXyBjko6wfAABga8nAOS8/NYJc0Io11oPIQifeh+j816zWZzrq6+97j5aWfc9n9GxIff73bGHx8jIn65iohf7/bG5x3w56fh6Od/9sDXd+/7+OHHPXBPZP+73gO3GX3gZh/EZixAgiTJxKEgBri4et6VDbtZKLu0VgxWPlZwJwTfWbsRIHO2yLaEKVy1hRKuOngjgnOv+8QETUhsEC/afWXtBjKUdiNI7aotlHDVlvwEn8El7160uwgiTRBlWmqAyhVBMqTajSu4pU0y9W4A+RkEmfIzAEmk3g3kx4kIyFhlRErBZTOYXWU3mFyRF+2eRrtwQYTOu4HAca6QTOLQZ8R4hnyrNG8F5ypdUaQFF05w3UC4ynCuXrDdXbT7ivVuRkBluC7rEImsae5Q4F31h6epLGEnmE4lZmMBjymKqNU+JnjR7vPa3Ybkeo4VUsQqRvUahy7Uk66OBDC6CjaLqfwAmSTIPBRYV/7hJ5zgU0F0YZeu7NKel3ZBo111+IkIMGMuUiMCCYYCRIJIBUAFkCSZPAFoJbV+uAF+HmbmoIkVs0V3PsTpLDrycczfoMm7G4Oldvm/0C5N3g33nac6yrQa9SWArwxaB2KSTzpAC6hBHA+gGxBPgLAAqsNyP461563dCFBqN9SWOroGPAJ0naiwg/oZbaVu9G5A/UW5bUKmvtFn0PKBzKJkig5L36BUFiXlsQ+bU5w79om6/Zlj35R3+Zby7l+llFLEw0sppRTxug1ExFK7A2ApnwEmJXYAB5LaFYilEhsgMxVYCYl2g1mJWwMBqCrLrcEMhhSXYLWS2i2FD3zQgKuiwIp8cKAYUDQopSd9Xh8mBiufb5d3a621/is+tVprrVXk3brmErQsWslHCdYkJSDJx2qSJatJrwLAgfb/+RnDoOpte57HxmAJchjUZcmJbrAAZHaDCRDNYAbZDGZAiIW6BclUIEhGrY+Pi5DcJ5hYr9frRRCtGKx83ma9aw68x4M0AMmUhTCTSbmfJ1NVfWQydZGaTFF+gExCVDJJUtY+m0uv+QrClLWbe0DRy5DXgOBoNEwge6NBAaSqGcYx7rz7DLQ9Ml1ZBiJULZoZEqBdBCjtpr68ByIC6s4rM0WrGEQzmUvObGMCACDmATYT1W4DIAphJMmUumJ/rVlwVJXMbbDf6QmQunnWT2rirIZeyZx7f5fXuhcOmia5OcQFpNpbStb3atQpPOQ5arT0jkn6cP0S2hZraKBPXhsD2SOT4NIjO8G9GnVB7+/VBoAD5iI34ADd1a8DNAAO0AA4QAPgAA2AAzQADtABe69mlvac8m7fcqa8S/2TG3+7NDQqGkLNIjXABM5F1Bitvnnm0KAfFAkRdpJUl3p6oezSnky79ifm8dvfO+NLbIEYbw38B5OWDw3QZABEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTAyVDE3OjI2OjAyKzAwOjAwtyQFVQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0wMlQxNzoyNjowMiswMDowMMZ5vekAAAAASUVORK5CYII="},623:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);