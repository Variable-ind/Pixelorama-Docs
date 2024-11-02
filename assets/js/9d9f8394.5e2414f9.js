"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[13],{4343:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=i(4848),t=i(8453);const o={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},n=void 0,r={id:"troubleshooting",title:"Troubleshooting",description:"This page lists common issues encountered when using Pixelorama and possible solutions. To experience as less issues as possible, make sure you are always using the latest stable version of Pixelorama.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/Pixelorama-Docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1730054331e3,frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Compiling from Source",permalink:"/Pixelorama-Docs/source"}},l={},h=[{value:"Some things stopped working after the update!",id:"some-things-stopped-working-after-the-update",level:2},{value:"Pixelorama crashed while I was working on my project!",id:"pixelorama-crashed-while-i-was-working-on-my-project",level:2},{value:"My images are being saved as pxo files, and not png, jpg, gif, etc",id:"my-images-are-being-saved-as-pxo-files-and-not-png-jpg-gif-etc",level:2},{value:"macOS says that Pixelorama is damaged!",id:"macos-says-that-pixelorama-is-damaged",level:2},{value:"I have performance issues, Pixelorama is very slow on my machine",id:"i-have-performance-issues-pixelorama-is-very-slow-on-my-machine",level:2},{value:"I have a hiDPI monitor and the User Interface is very small!",id:"i-have-a-hidpi-monitor-and-the-user-interface-is-very-small",level:2},{value:"Error code 12 when exporting png files",id:"error-code-12-when-exporting-png-files",level:2},{value:"Drawing is very slow when using a drawing tablet",id:"drawing-is-very-slow-when-using-a-drawing-tablet",level:2},{value:"Guides are not being created",id:"guides-are-not-being-created",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"This page lists common issues encountered when using Pixelorama and possible solutions. To experience as less issues as possible, make sure you are always using the latest stable version of Pixelorama."}),"\n",(0,a.jsx)(s.h2,{id:"some-things-stopped-working-after-the-update",children:"Some things stopped working after the update!"}),"\n",(0,a.jsx)(s.p,{children:"After updating pixelorama, if some things like tools or effects stop working, some extension may be causing this behavior due to some file conflicts, try to update your extensions as soon as possible or uninstall them if there is none (Disabling the extension won't fix it)."}),"\n",(0,a.jsx)(s.h2,{id:"pixelorama-crashed-while-i-was-working-on-my-project",children:"Pixelorama crashed while I was working on my project!"}),"\n",(0,a.jsxs)(s.p,{children:["Crashes are unfortunate, and while we are doing our best to fix them, some issues causing the application to crash may have escaped our grasp. The good news is that you can enable ",(0,a.jsx)(s.strong,{children:"automatic backups"}),', that save your work every a certain time interval. You can enable them from the Edit menu, Preferences, Backup and then by ticking on "Enable autosave".']}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Enable Autosave",src:i(3031).A+"",width:"808",height:"532"})}),"\n",(0,a.jsxs)(s.p,{children:["Besides that, it is ",(0,a.jsx)(s.strong,{children:"strongly recommended"})," that you save often, and keep copies of your files as backups in case something gets lost."]}),"\n",(0,a.jsxs)(s.p,{children:["You can also aid us in our fight against crashes by ",(0,a.jsx)(s.a,{href:"https://github.com/Orama-Interactive/Pixelorama/issues",children:"reporting issues on GitHub"})," and uploading the content of Pixelorama's log files. You can find the log files in ",(0,a.jsx)(s.code,{children:"C:\\Users\\[USERNAME]\\AppData\\Roaming\\Pixelorama\\logs"})," on Windows, ",(0,a.jsx)(s.code,{children:"~/.local/share/Pixelorama/logs"})," on Linux and ",(0,a.jsx)(s.code,{children:"/Users/[USERNAME]/Library/Application Support/Pixelorama/logs"})," for macOS. It is also extremely helpful, if not necessary, to be as specific as possible with the steps that led to the crash. By giving us specific steps to reproduce the issue, we can solve it faster."]}),"\n",(0,a.jsx)(s.h2,{id:"my-images-are-being-saved-as-pxo-files-and-not-png-jpg-gif-etc",children:"My images are being saved as pxo files, and not png, jpg, gif, etc"}),"\n",(0,a.jsxs)(s.p,{children:["You are saving instead of exporting. Saving creates pxo files, which are Pixelorama's custom file format for ",(0,a.jsx)(s.a,{href:"concepts/project",children:"projects"}),". To create image files such as png, you need to go to the File menu and select Export. You can refer to the ",(0,a.jsx)(s.a,{href:"user_manual/save_and_export",children:"Save and Export"})," page for more information."]}),"\n",(0,a.jsx)(s.h2,{id:"macos-says-that-pixelorama-is-damaged",children:"macOS says that Pixelorama is damaged!"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Damaged App",src:i(3540).A+"",width:"830",height:"317"})}),"\n",(0,a.jsx)(s.p,{children:"You may encounter some errors saying that Pixelorama is damaged. This is because the latest versions of MacOS mark the launcher of unknown binaries as a non-executable file. This most likely has to do with the fact that Pixelorama is not signed."}),"\n",(0,a.jsxs)(s.p,{children:["Read this guide for more information: ",(0,a.jsx)(s.a,{href:"https://disable-gatekeeper.github.io/",children:"https://disable-gatekeeper.github.io/"})]}),"\n",(0,a.jsx)(s.h2,{id:"i-have-performance-issues-pixelorama-is-very-slow-on-my-machine",children:"I have performance issues, Pixelorama is very slow on my machine"}),"\n",(0,a.jsx)(s.p,{children:"We are doing our best to optimize the performance. That being said, you can improve the performance of the app significantly by trying the following:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Change the ",(0,a.jsx)(s.strong,{children:"app's"}),' maximum framerate, in order to reduce CPU usage. To do that, you can go to the Edit menu, Preferences and then click the Performance tab. There, you can set a maximum value for the FPS in "Set application FPS limit:". Keep in mind that the lower the number, the lower the CPU usage, but the application gets slower, choppier and unresponsive, so make sure not to set it ',(0,a.jsx)(s.em,{children:"too low"}),". 0 means that there is no limit."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:'If you have any group layers, try setting their blend mode to "Passthrough".'}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["If you have a specific performance issue you'd like us to look at, feel free to ",(0,a.jsx)(s.a,{href:"https://github.com/Orama-Interactive/Pixelorama/issues",children:"open an issue on Pixelorama's GitHub Repository"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"i-have-a-hidpi-monitor-and-the-user-interface-is-very-small",children:"I have a hiDPI monitor and the User Interface is very small!"}),"\n",(0,a.jsx)(s.p,{children:"It is possible to change the scale of the UI, by going to the Edit menu, selecting Preferences and going to the Interface tab. There, you can change the display scale, which goes from 1 (smallest) to 4 (biggest). 4 essentially means that the UI will be 4 times bigger than the default UI. Then, you click Apply to set the changes. Keep in mind that it's best to use integer values, such as 1, 2, 3 and 4, otherwise the UI may appear blurry."}),"\n",(0,a.jsx)(s.h2,{id:"error-code-12-when-exporting-png-files",children:"Error code 12 when exporting png files"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Error code 12",src:i(9713).A+"",width:"215",height:"114"})}),"\n",(0,a.jsxs)(s.p,{children:['This error has only been spotted in the Windows platform. Sometimes, when exporting png files, the process may fail due to "Error code 12". This most likely happens when you try to export in a directory that is protected by ',(0,a.jsx)(s.strong,{children:"anti-virus software"}),". To resolve it, you can try tweaking the settings of your anti-virus to either whitelist Pixelorama or disable folder protection. We can't guarantee that this will work, as it also depends on what anti-virus software you are using. Alternatively, you can export in a directory that is not protected by the anti-virus."]}),"\n",(0,a.jsx)(s.p,{children:"It is also possible that this issue may be solved if you run Pixelorama as an administrator."}),"\n",(0,a.jsx)(s.p,{children:"If neither of these works, you could save your projects as a pxo file, open the Web version, drag and drop the pxo file there, and export the png file from the Web version."}),"\n",(0,a.jsx)(s.h2,{id:"drawing-is-very-slow-when-using-a-drawing-tablet",children:"Drawing is very slow when using a drawing tablet"}),"\n",(0,a.jsx)(s.p,{children:"If you are on Windows, try changing the tablet driver Pixelorama is using, from the Edit menu, Preferences, Drivers."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Tablet Drivers",src:i(7988).A+"",width:"808",height:"532"})}),"\n",(0,a.jsx)(s.h2,{id:"guides-are-not-being-created",children:"Guides are not being created"}),"\n",(0,a.jsx)(s.p,{children:"To create guides, you have to drag them out from the rulers, on the top and the left of the canvas. However, sometimes this doesn't appear to do anything. If that's the case, then it is very likely that you have disabled guide visibility. To make sure that they are visible, go to the View menu and see if \"Show Guides\" is ticked on. If it is not, make sure to tick it."})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3540:(e,s,i)=>{i.d(s,{A:()=>a});const a=i.p+"assets/images/damaged_app-980fefc7b24237fac15eaaa54f22243f.png"},3031:(e,s,i)=>{i.d(s,{A:()=>a});const a=i.p+"assets/images/enable_autosave-d20e152df668161664dbb9d203e3ff1d.png"},9713:(e,s,i)=>{i.d(s,{A:()=>a});const a="data:image/png;base64,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"},7988:(e,s,i)=>{i.d(s,{A:()=>a});const a=i.p+"assets/images/tablet_driver-358c1edcb6b2e2c3c47620347e0758c3.png"},8453:(e,s,i)=>{i.d(s,{R:()=>n,x:()=>r});var a=i(6540);const t={},o=a.createContext(t);function n(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);