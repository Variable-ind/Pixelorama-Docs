"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[1],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(a),p=r,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=a(7462),r=(a(7294),a(3905));const i={id:"shading",title:"Shading",sidebar_label:"Shading"},o=void 0,s={unversionedId:"user_manual/shading",id:"user_manual/shading",title:"Shading",description:"Pixelorama's shading tool can be used to easily add lighting and shadows to the artwork. You can use it the same way you use the Pencil or Eraser tools, you mouse press on where the pixels of the sprite where you want to apply the shading. Similar to Pencil and Eraser, you can change the affected area size and brush. As of right now, there are two modes of shading, Simple Shading and Hue Shifting, which you can switch from the tool's options.",source:"@site/docs/user_manual/shading.md",sourceDirName:"user_manual",slug:"/user_manual/shading",permalink:"/Pixelorama-Docs/user_manual/shading",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/shading.md",tags:[],version:"current",lastUpdatedBy:"Variable",lastUpdatedAt:1699110687,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{id:"shading",title:"Shading",sidebar_label:"Shading"},sidebar:"docs",previous:{title:"Selecting",permalink:"/Pixelorama-Docs/user_manual/selecting"},next:{title:"Tools",permalink:"/Pixelorama-Docs/user_manual/tools"}},l={},h=[{value:"Simple Shading",id:"simple-shading",level:2},{value:"Hue Shifting",id:"hue-shifting",level:2}],u={toc:h};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pixelorama's shading tool can be used to easily add lighting and shadows to the artwork. You can use it the same way you use the ",(0,r.kt)("a",{parentName:"p",href:"drawing"},"Pencil or Eraser tools"),", you mouse press on where the pixels of the sprite where you want to apply the shading. Similar to Pencil and Eraser, you can change the affected area size and brush. As of right now, there are two modes of shading, Simple Shading and Hue Shifting, which you can switch from the tool's options."),(0,r.kt)("h2",{id:"simple-shading"},"Simple Shading"),(0,r.kt)("p",null,"This is a fairly straightforward method of shading. You can choose to either lighten or darken the area where you clicked, as well as the shading value. The bigger the number, the more shading will be applied. All it does is simply increase (with lighting) or decrease (with shading) the ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," of the pixel's colors, which represents the color's brightness. It essentially just makes the same colors brighter or darker."),(0,r.kt)("h2",{id:"hue-shifting"},"Hue Shifting"),(0,r.kt)("p",null,"Hue Shifting is a bit more complex than Simple Shading. Instead of just shifting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," of the color, we also shift their ",(0,r.kt)("inlineCode",{parentName:"p"},"Hue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Saturation")," too. When we are brightening the colors, we shift their hue to move towards yellow (the limit is set to roughly 60 Hue), decrease their saturation and increase their value. On the contrary, when we are darkening the colors, their hue shifts towards blue (the limit is set to roughly 240 Hue), their saturation increases and their value decreases. This is all done automatically by the Shading tool, but you can also configure the amount the Hue, Saturation and Value change from the tool options."),(0,r.kt)("admonition",{title:"hue shifting limits",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The hue shifting mode does not always change the hue, saturation and value of the colors exactly as much as the values have been set by the user. For example, a color with a hue of 70 and the shading tool set to hue shifting, lighten and a hue of, let's say, 20, will not result in a color with a hue of 50 (because 70 - 20 = 50), but it will rather stay limited to 60, as this is the hard limit of lighting. Similarly, the hard hue limit of darkening is 240. If you want to exactly change the HSV values of a color, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Adjust Hue/Saturation/Value")," image effect under the Image menu.")))}d.isMDXComponent=!0}}]);