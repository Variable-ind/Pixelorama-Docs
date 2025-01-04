"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[329],{398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"extension_system/internal_extensions","title":"Internal Extensions","description":"Internal extensions are extensions that are not .pck files, but actual code (arranged in the same format as you would an extension) in res://src/Extensions/.","source":"@site/docs/extension_system/internal_extensions.md","sourceDirName":"extension_system","slug":"/extension_system/internal_extensions","permalink":"/Pixelorama-Docs/extension_system/internal_extensions","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/extension_system/internal_extensions.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1735840550000,"sidebarPosition":2,"frontMatter":{"id":"internal_extensions","title":"Internal Extensions","sidebar_label":"Internal Extensions","sidebar_position":2},"sidebar":"docs","previous":{"title":"Extension Basics","permalink":"/Pixelorama-Docs/extension_system/extension_basics"},"next":{"title":"ExtensionsApi","permalink":"/Pixelorama-Docs/extension_system/extension_api"}}');var o=t(4848),i=t(8453);const r={id:"internal_extensions",title:"Internal Extensions",sidebar_label:"Internal Extensions",sidebar_position:2},a=void 0,l={},d=[{value:"Comparing the two methods",id:"comparing-the-two-methods",level:2},{value:"Making an Extension, internal",id:"making-an-extension-internal",level:2},{value:"Exporting your extension.",id:"exporting-your-extension",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Internal extensions are extensions that are not ",(0,o.jsx)(n.code,{children:".pck"})," files, but actual code (arranged in the same format as you would an extension) in ",(0,o.jsx)(n.code,{children:"res://src/Extensions/"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The concept of internal extensions was origally targeted towards potentially making pixelorama more modular by grouping some of it's features into smaller extensions, but it can also be used in developing of extensions by users."}),"\n",(0,o.jsx)(n.h2,{id:"comparing-the-two-methods",children:"Comparing the two methods"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Internal Extensions"}),(0,o.jsx)(n.th,{children:"Standard way (as separate project)"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Both ways are easily interchangeable"}),(0,o.jsx)(n.td,{children:"Both ways are easily interchangeable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"During development you don't have to export a pck, every time you need to debug the extension"}),(0,o.jsx)(n.td,{children:"To debug you'd have to re-export your extension which is time consuming"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["Both Pixelorama's source code and creating an Extension project is required (The Extension project is required for when you ",(0,o.jsx)(n.strong,{children:"release"})," your extension)"]}),(0,o.jsx)(n.td,{children:"Creating the Extension project is required but Pixelorama's source code is optional"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"You can extend pixelorama's classes (like BaseTool)"}),(0,o.jsx)(n.td,{children:"You can still extend classes, but Godot's code editor will complain (it's perfectly fine but it's not very pleasing to the eye)"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"making-an-extension-internal",children:"Making an Extension, internal"}),"\n",(0,o.jsx)(n.admonition,{title:"version control",type:"tip",children:(0,o.jsx)(n.p,{children:"To ensure your work isn't accidentally lost, it is highly recommended that you use version control (e.g Git) in your extension project and in pixelorama's source."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["First, make an extension project by following ",(0,o.jsx)(n.a,{href:"./extension_basics#making-an-extension",children:"this tutorial"})," (from here, it will now be referred to as ",(0,o.jsx)(n.strong,{children:"your project"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Get and unzip the ",(0,o.jsx)(n.a,{href:"https://github.com/Orama-Interactive/Pixelorama/releases",children:"source code"})," of pixelorama that you intend to use for your extension."]}),"\n",(0,o.jsxs)(n.li,{children:["Create an ",(0,o.jsx)(n.code,{children:"Extensions"})," folder (case sensitive) in the pixelorama's source code in the ",(0,o.jsx)(n.code,{children:"src"})," folder."]}),"\n",(0,o.jsxs)(n.li,{children:["From your project, copy (not cut/move) the contents from ",(0,o.jsx)(n.code,{children:"src/Extensions"})," folder to the ",(0,o.jsx)(n.code,{children:"src/Extensions"})," folder in pixelorama (created in step 3)."]}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to the ",(0,o.jsx)(n.code,{children:"src/Extensions/(extension name)/extension.json"})," file and copy the value of the ",(0,o.jsx)(n.code,{children:"name"})," key. Then open ",(0,o.jsx)(n.code,{children:"src/HandleExtensions.gd"})," file in pixelorama's source and find the ",(0,o.jsx)(n.code,{children:"_add_internal_extensions()"})," method. Modify and save it as follows:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'func _add_internal_extensions() -> void:\n    _load_extension("ExtensionName", true)  # Add this line, and replace `ExtensionName` with the value of your `name` key.\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Now the extension has become internal. From here you can continue to code in the ",(0,o.jsx)(n.code,{children:"Extensions/<your extension>"})," folder of pixelorama (just don't create any files in outside your extension folder)."]}),"\n",(0,o.jsx)(n.h2,{id:"exporting-your-extension",children:"Exporting your extension."}),"\n",(0,o.jsx)(n.p,{children:"When you are done making your extension and are ready to release and distribute your extension you have to convert your internal extension back to a regular extension."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Remove/comment the line that was added to ",(0,o.jsx)(n.code,{children:"src/HandleExtensions.gd"})," (In step 5 of ",(0,o.jsx)(n.a,{href:"#making-an-extension-internal",children:"Making an Extension, internal"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["From pixelorama, copy (not cut/move) your extension folder from ",(0,o.jsx)(n.code,{children:"src/Extensions"}),", back to the ",(0,o.jsx)(n.code,{children:"src/Extensions"})," folder of your project (replacing existing files)."]}),"\n",(0,o.jsxs)(n.li,{children:["Export your project by following ",(0,o.jsx)(n.a,{href:"./extension_basics#exporting-the-extension",children:"this tutorial"}),"."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);