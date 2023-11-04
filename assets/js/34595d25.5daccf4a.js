"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[992],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),d=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||r;return a?l.createElement(k,o(o({ref:t},m),{},{components:a})):l.createElement(k,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));const r={id:"palettes",title:"Palettes",sidebar_label:"Palettes"},o=void 0,i={unversionedId:"user_manual/palettes",id:"user_manual/palettes",title:"Palettes",description:"Palettes are a way to organize colors in your projects.",source:"@site/docs/user_manual/palettes.md",sourceDirName:"user_manual",slug:"/user_manual/palettes",permalink:"/Pixelorama-Docs/user_manual/palettes",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/palettes.md",tags:[],version:"current",lastUpdatedBy:"Variable",lastUpdatedAt:1699113173,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{id:"palettes",title:"Palettes",sidebar_label:"Palettes"},sidebar:"docs",previous:{title:"Drawing",permalink:"/Pixelorama-Docs/user_manual/drawing"},next:{title:"Save and Export",permalink:"/Pixelorama-Docs/user_manual/save_and_export"}},p={},d=[{value:"Palettes panel",id:"palettes-panel",level:2},{value:"Creating a new palette",id:"creating-new-palette",level:3},{value:"Preset",id:"preset",level:4},{value:"Name",id:"name",level:4},{value:"Comment",id:"comment",level:4},{value:"Width and Height",id:"width-and-height",level:4},{value:"Create colors with alpha component",id:"create-colors-with-alpha-component",level:4},{value:"Get colors from",id:"get-colors-from",level:4},{value:"Editing palette metadata",id:"editing-palette-metadata",level:3},{value:"Name",id:"name-1",level:4},{value:"Path",id:"path",level:4},{value:"Delete button",id:"delete-button",level:4},{value:"Palette grid",id:"palette-grid",level:2},{value:"Tools",id:"palette-grid-tools",level:3},{value:"Colors movement",id:"colors-movement",level:3},{value:"Palettes import",id:"palettes-import",level:2},{value:"Supported formats",id:"supported-formats",level:3}],m={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Palettes are a way to organize colors in your projects."),(0,n.kt)("p",null,"Pixelorama ships on most platforms with several pre-made palettes. These palettes can be freely modified."),(0,n.kt)("p",null,"All palettes are physically stored on disk in Pixelorama data folder."),(0,n.kt)("admonition",{title:"undo/redo",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Palettes currently don't support undo/redo so be careful with any modifications because they are permanent.")),(0,n.kt)("h2",{id:"palettes-panel"},"Palettes panel"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pixelorama&#39;s Canvas",src:a(6988).Z,width:"311",height:"323"})),(0,n.kt)("p",null,"The top of the panel consists of ",(0,n.kt)("inlineCode",{parentName:"p"},"Palettes selector"),", ",(0,n.kt)("a",{parentName:"p",href:"#editing-palette-metadata"},(0,n.kt)("inlineCode",{parentName:"a"},"Edit palette button"))," and ",(0,n.kt)("a",{parentName:"p",href:"#creating-new-palette"},(0,n.kt)("inlineCode",{parentName:"a"},"Add new palette button")),"."),(0,n.kt)("p",null,"The main section is the ",(0,n.kt)("a",{parentName:"p",href:"#palette-grid"},(0,n.kt)("inlineCode",{parentName:"a"},"Palette grid")),", displaying all colors present in the currently selected palette."),(0,n.kt)("p",null,"On the left of the ",(0,n.kt)("a",{parentName:"p",href:"#palette-grid"},(0,n.kt)("inlineCode",{parentName:"a"},"Palette grid"))," are ",(0,n.kt)("a",{parentName:"p",href:"#palette-grid-tools"},(0,n.kt)("inlineCode",{parentName:"a"},"tools"))," used to edit the colors of the palette."),(0,n.kt)("h3",{id:"creating-new-palette"},"Creating a new palette"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pixelorama&#39;s Canvas",src:a(9307).Z,width:"311",height:"325"})),(0,n.kt)("p",null,"A new palette can be created by clicking ",(0,n.kt)("inlineCode",{parentName:"p"},"Add new palette button"),"."),(0,n.kt)("h4",{id:"preset"},"Preset"),(0,n.kt)("p",null,"You can select one of the presets to initialize a new palette with colors."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Preset"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Empty"),(0,n.kt)("td",{parentName:"tr",align:null},"Empty palette with no colors.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From Current Palette"),(0,n.kt)("td",{parentName:"tr",align:null},"Palette will be created with colors copied from the currently selected palette.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From Current Sprite"),(0,n.kt)("td",{parentName:"tr",align:null},"Colors will be imported from the currently opened image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From Current Selection"),(0,n.kt)("td",{parentName:"tr",align:null},"Colors will be imported from the current selection.")))),(0,n.kt)("h4",{id:"name"},"Name"),(0,n.kt)("p",null,"The name of the palette is also used as a palette file name."),(0,n.kt)("h4",{id:"comment"},"Comment"),(0,n.kt)("p",null,"The palette's description. Default Pixelorama palettes use this field to credit palette authors."),(0,n.kt)("h4",{id:"width-and-height"},"Width and Height"),(0,n.kt)("p",null,"Palettes have set width and height (can be resized later) which define their grid size. Allowed values are from 1 to 64."),(0,n.kt)("h4",{id:"create-colors-with-alpha-component"},"Create colors with alpha component"),(0,n.kt)("p",null,"If this option is not toggled on, colors will be imported without alpha channel and transparency is ignored."),(0,n.kt)("h4",{id:"get-colors-from"},"Get colors from"),(0,n.kt)("p",null,"You can limit colors import to just some or all cels (as seen in the animation timeline)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Current frame"),(0,n.kt)("td",{parentName:"tr",align:null},"Colors imported from currently selected frame and all of its layers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Selected cels"),(0,n.kt)("td",{parentName:"tr",align:null},"Colors imported only from selected cels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"All frames"),(0,n.kt)("td",{parentName:"tr",align:null},"Colors imported from all frames and their layers.")))),(0,n.kt)("h3",{id:"editing-palette-metadata"},"Editing palette metadata"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pixelorama&#39;s Canvas",src:a(7099).Z,width:"311",height:"323"})),(0,n.kt)("p",null,"Currently, selected palette metadata can be edited with ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit palette button"),"."),(0,n.kt)("p",null,"The majority of properties are identical to create a new palette dialog."),(0,n.kt)("admonition",{title:"palette resizing",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If the palette size is reduced positions of all colors will be reset to the beginning of the palette. If some colors don't fit in the new size they will be removed!")),(0,n.kt)("h4",{id:"name-1"},"Name"),(0,n.kt)("p",null,"If the palette name is changed the file name will also be changed accordingly."),(0,n.kt)("h4",{id:"path"},"Path"),(0,n.kt)("p",null,"Displays where exactly in the file system the palette file is located."),(0,n.kt)("h4",{id:"delete-button"},"Delete button"),(0,n.kt)("p",null,"Permanently removes the palette from the file system."),(0,n.kt)("h2",{id:"palette-grid"},"Palette grid"),(0,n.kt)("p",null,"Displays all colors present in the palette. Colors in the grid can be interacted with."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Interaction"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Left click")),(0,n.kt)("td",{parentName:"tr",align:null},"Color will be left selected and set as the left tool color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Right click")),(0,n.kt)("td",{parentName:"tr",align:null},"Color will be right selected and set as the right tool color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Double click")),(0,n.kt)("td",{parentName:"tr",align:null},"Double click on an existing color opens a color picker to change it's color.")))),(0,n.kt)("admonition",{title:"palette grid panning",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If palette size is greater than ",(0,n.kt)("inlineCode",{parentName:"p"},"8x8")," it can be panned in the grid either with sliders or ",(0,n.kt)("inlineCode",{parentName:"p"},"Middle click + Mouse drag"),".")),(0,n.kt)("h3",{id:"palette-grid-tools"},"Tools"),(0,n.kt)("p",null,"Tools allow you to edit colors in the palette."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Button"),(0,n.kt)("th",{parentName:"tr",align:null},"Tool"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"+")),(0,n.kt)("td",{parentName:"tr",align:null},"Add a new color"),(0,n.kt)("td",{parentName:"tr",align:null},"Left mouse click adds left tool color. Right mouse click adds right tool color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-")),(0,n.kt)("td",{parentName:"tr",align:null},"Remove a selected color"),(0,n.kt)("td",{parentName:"tr",align:null},"Left mouse click removes left selected color. Right mouse click removes right selected color.")))),(0,n.kt)("h3",{id:"colors-movement"},"Colors movement"),(0,n.kt)("p",null,"Colors can be moved and copied around in the palette grid."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Shortcut"),(0,n.kt)("th",{parentName:"tr",align:null},"Movement description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Mouse drag")),(0,n.kt)("td",{parentName:"tr",align:null},"Color switches with a color it is dropped on.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("kbd",null,"Shift")," + ",(0,n.kt)("inlineCode",{parentName:"td"},"Mouse drag")),(0,n.kt)("td",{parentName:"tr",align:null},"Color is inserted where dropped. If dropped on another color the original color is moved to the right with every color next to it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("kbd",null,"Ctrl")," + ",(0,n.kt)("inlineCode",{parentName:"td"},"Mouse drag")),(0,n.kt)("td",{parentName:"tr",align:null},"Color is copied where dropped. If dropped on another color the original color is overwritten.")))),(0,n.kt)("h2",{id:"palettes-import"},"Palettes import"),(0,n.kt)("p",null,"To import a palette, either ",(0,n.kt)("inlineCode",{parentName:"p"},"drag and drop")," a palette file into Pixelorama window or use ",(0,n.kt)("inlineCode",{parentName:"p"},"File > Open")," dialog."),(0,n.kt)("p",null,"An imported palette will be converted to ",(0,n.kt)("inlineCode",{parentName:"p"},"Pixelorama palette"),", stored physically in the Pixelorama data folder and added to the palettes selection in ",(0,n.kt)("inlineCode",{parentName:"p"},"Palettes panel"),"."),(0,n.kt)("p",null,"The only exception to import behavior is ",(0,n.kt)("inlineCode",{parentName:"p"},"Image palette"),". Importing an image to Pixelorama will open ",(0,n.kt)("inlineCode",{parentName:"p"},"Import Options")," dialog in which you can select ",(0,n.kt)("inlineCode",{parentName:"p"},"Import as > New palette")," to process an image to import a palette."),(0,n.kt)("admonition",{title:"palette extraction",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can import any image as a palette and extract colors from it. Every color from the image will be added to the palette only once. With bigger images, it can take longer time to finish.")),(0,n.kt)("h3",{id:"supported-formats"},"Supported formats"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"File extension"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pixelorama palette"),(0,n.kt)("td",{parentName:"tr",align:null},".tres")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GIMP GPL"),(0,n.kt)("td",{parentName:"tr",align:null},".gpl")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PAL"),(0,n.kt)("td",{parentName:"tr",align:null},".pal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Image palette"),(0,n.kt)("td",{parentName:"tr",align:null},".png, .bmp, .hdr, .jpg, .jpeg, .svg, .tga, .webp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pixelorama old palette"),(0,n.kt)("td",{parentName:"tr",align:null},".json")))),(0,n.kt)("admonition",{title:"file extensions",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Palette format detection uses file extensions to determine how to parse palette formats. An incorrect extension will result in an import error.")),(0,n.kt)("admonition",{title:"pre-0.9 pixelorama palettes",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Palettes created in versions of Pixelorama prior to 0.9 have to be reimported. The save format was changed from ",(0,n.kt)("inlineCode",{parentName:"p"},".json")," to more Godot-compatible ",(0,n.kt)("inlineCode",{parentName:"p"},".tres"),".")))}s.isMDXComponent=!0},9307:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/palette-create-2d054e856332f5bd13bb064f0c8bcb45.png"},7099:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/palette-edit-35bc3a00785c8fad62c592a6b0895d8f.png"},6988:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/palettes-panel-17bf1f702aa11b5ebd7dc9ef71cc468b.png"}}]);