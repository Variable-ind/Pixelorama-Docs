"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[329],{398:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"extension_system/internal_extensions","title":"Internal Extensions","description":"Internal extensions are extensions that are not .pck files, but actual code (arranged in the same format as you would an extension) in res://src/Extensions/.","source":"@site/docs/extension_system/internal_extensions.md","sourceDirName":"extension_system","slug":"/extension_system/internal_extensions","permalink":"/Pixelorama-Docs/extension_system/internal_extensions","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/extension_system/internal_extensions.md","tags":[],"version":"current","lastUpdatedBy":"Emmanouil Papadeas","lastUpdatedAt":1740831371000,"sidebarPosition":2,"frontMatter":{"id":"internal_extensions","title":"Internal Extensions","sidebar_label":"Internal Extensions","sidebar_position":2},"sidebar":"docs","previous":{"title":"Extension Basics","permalink":"/Pixelorama-Docs/extension_system/extension_basics"},"next":{"title":"ExtensionsApi","permalink":"/Pixelorama-Docs/extension_system/extension_api"}}');var i=s(4848),o=s(8453);const r={id:"internal_extensions",title:"Internal Extensions",sidebar_label:"Internal Extensions",sidebar_position:2},a=void 0,l={},d=[{value:"Comparing the two methods",id:"comparing-the-two-methods",level:2},{value:"Making an Internal Extension",id:"making-an-internal-extension",level:2},{value:"Exporting an Internal Extension",id:"exporting-an-internal-extension",level:2},{value:"Converting an Internal Extension into an External one",id:"converting-an-internal-extension-into-an-external-one",level:3},{value:"Direct export of Internal Extension",id:"direct-export-of-internal-extension",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Internal extensions are extensions that are not ",(0,i.jsx)(n.code,{children:".pck"})," files, but actual code (arranged in the same format as you would an extension) in ",(0,i.jsx)(n.code,{children:"res://src/Extensions/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The concept of internal extensions was origally targeted towards potentially making pixelorama more modular by grouping some of it's features into smaller extensions, but it can also be used in developing of extensions by users."}),"\n",(0,i.jsx)(n.p,{children:'We will refer to our extension as "Example"'}),"\n",(0,i.jsx)(n.h2,{id:"comparing-the-two-methods",children:"Comparing the two methods"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Internal Extensions"}),(0,i.jsx)(n.th,{children:"Standard way (as separate project)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Both ways are easily interchangeable"}),(0,i.jsx)(n.td,{children:"Both ways are easily interchangeable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"During development you don't have to export a pck, every time you need to debug the extension"}),(0,i.jsx)(n.td,{children:"To debug you'd have to re-export your extension which is time consuming"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Pixelorama's source code is required"}),(0,i.jsx)(n.td,{children:"Creating the Extension project is required but Pixelorama's source code is optional"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"You can extend pixelorama's classes (like BaseTool)"}),(0,i.jsx)(n.td,{children:"You can still extend classes, but Godot's code editor will complain (it's perfectly fine but it's not very pleasing to the eye)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"making-an-internal-extension",children:"Making an Internal Extension"}),"\n",(0,i.jsx)(n.admonition,{title:"converting external extension",type:"tip",children:(0,i.jsxs)(n.p,{children:["The process for converting an ",(0,i.jsx)(n.strong,{children:"existing"})," external extension into an internal extension is almost the same as this. Instead of making files (step 3), you copy them over."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Get and unzip the ",(0,i.jsx)(n.a,{href:"https://github.com/Orama-Interactive/Pixelorama/releases",children:"source code"})," of pixelorama that you intend to use for your extension."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create an ",(0,i.jsx)(n.code,{children:"Extensions"})," folder (case sensitive) in the pixelorama's source code inside the ",(0,i.jsx)(n.code,{children:"res://src"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Make the necessary files mentioned in step 2 of ",(0,i.jsx)(n.a,{href:"./extension_basics#process",children:"this tutorial"}),". Your directory structure will resemble something like this"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Internal Extension File Structure",src:s(9394).A+"",width:"293",height:"379"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"res://src/Extensions/(extension name)/extension.json"})," file and copy the value of the ",(0,i.jsx)(n.code,{children:"name"})," key. Then open ",(0,i.jsx)(n.code,{children:"res://src/HandleExtensions.gd"})," file in pixelorama's source and find the ",(0,i.jsx)(n.code,{children:"_add_internal_extensions()"})," method. Modify and save it as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'func _add_internal_extensions() -> void:\n    _load_extension("Example", true)  # Add this line, and replace `Example` with the value of your `name` key.\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now the extension has become internal. From here you can continue to code in the ",(0,i.jsx)(n.code,{children:"res://src/Extensions/<your extension>"})," folder of pixelorama (just don't create any files in outside your extension folder)."]}),"\n",(0,i.jsx)(n.admonition,{title:"Accessing the API",type:"tip",children:(0,i.jsxs)(n.p,{children:["In an internal extension, prefer using ",(0,i.jsx)(n.code,{children:"ExtensionsApi"})," autoload directly instead of ",(0,i.jsx)(n.code,{children:'get_node_or_null("/root/ExtensionsApi")'})]})}),"\n",(0,i.jsx)(n.h2,{id:"exporting-an-internal-extension",children:"Exporting an Internal Extension"}),"\n",(0,i.jsx)(n.p,{children:"When you are ready to release/distribute your extension to the public, you may choose one of the following ways."}),"\n",(0,i.jsx)(n.h3,{id:"converting-an-internal-extension-into-an-external-one",children:"Converting an Internal Extension into an External one"}),"\n",(0,i.jsx)(n.p,{children:"These steps are basically the reverse of the steps mentioned in the previous section."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Make a new Godot project called "Example" (the ',(0,i.jsx)(n.strong,{children:"project name"})," is irrelevant but for simplicity we'll name it the same as our extension)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Remove/comment the line that was added to ",(0,i.jsx)(n.code,{children:"res://src/HandleExtensions.gd"})," (In step 5 of ",(0,i.jsx)(n.a,{href:"#making-an-extension-internal",children:"Making an Extension, internal"}),"). This step is not compulsory but is mentioned anyway for the sake of completeness."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From Pixelorama, move/cut your extension folder from ",(0,i.jsx)(n.code,{children:"res://src/Extensions/Example"}),", To the ",(0,i.jsx)(n.code,{children:"res://src/Extensions/Example"})," folder of your project (replacing existing files)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Internal Extension File Structure",src:s(925).A+"",width:"1360",height:"929"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now you can safely delete pixelorama's source code if you want (or use it for some other extension)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Export your extension, using steps from ",(0,i.jsx)(n.a,{href:"./extension_basics#exporting-the-extension",children:"this tutorial"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"direct-export-of-internal-extension",children:"Direct export of Internal Extension"}),"\n",(0,i.jsx)(n.p,{children:"Internal extensions can be exported directly instead of first converting it to an external extension."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Form the Godot editor, go to ",(0,i.jsx)(n.code,{children:"Project -> Export..."}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Export dialog, add a new preset (any preset will work) and go to the Resources tab."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Write ",(0,i.jsx)(n.code,{children:"*.json"})," in ",(0,i.jsx)(n.em,{children:"'Filters to export non-resource files/folders'"}),". and in ",(0,i.jsx)(n.strong,{children:"Export Mode"}),", Choose ",(0,i.jsx)(n.em,{children:"'Export selected resources (and dependencies)'"})," and select only your extension files as shown below."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Internal Extension File Structure",src:s(1745).A+"",width:"782",height:"842"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Press the ",(0,i.jsx)(n.code,{children:"Export PCK/ZIP"})," button and export with the ",(0,i.jsx)(n.strong,{children:"same name as your extension"}),"."]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},925:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/copy_extension_folder-a811f13ea72900eeb80d0d16a9e1de2c.png"},1745:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/export_internal_extension-043ee2e4eacd2344c39ec9e46a8b581e.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}},9394:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/internal_extension_structure-5242690c43c93d88ed10d98b6b2a9d1e.png"}}]);