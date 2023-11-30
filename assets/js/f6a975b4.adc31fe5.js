"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[27],{2538:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var a=t(5893),i=t(1151);const n={id:"save_and_export",title:"Save and Export",sidebar_label:"Save and Export",sidebar_position:3},s=void 0,r={id:"user_manual/save_and_export",title:"Save and Export",description:"You can either save or export your projects. Saving a project will create a .pxo file, which is Pixelorama's custom file format, while exporting means that one (or multiple, in case of animations) .png(s), an .apng, or a .gif file will be created.",source:"@site/docs/user_manual/save_and_export.md",sourceDirName:"user_manual",slug:"/user_manual/save_and_export",permalink:"/Pixelorama-Docs/user_manual/save_and_export",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/save_and_export.md",tags:[],version:"current",lastUpdatedBy:"Emmanouil Papadeas",lastUpdatedAt:1701356966,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:3,frontMatter:{id:"save_and_export",title:"Save and Export",sidebar_label:"Save and Export",sidebar_position:3},sidebar:"docs",previous:{title:"The Timeline",permalink:"/Pixelorama-Docs/user_manual/user_interface/timeline"},next:{title:"Palettes",permalink:"/Pixelorama-Docs/user_manual/palettes"}},l={},c=[{value:"Saving",id:"saving",level:2},{value:"Exporting",id:"exporting",level:2},{value:"Export a sequence of images",id:"export-a-sequence-of-images",level:3},{value:"Export a spritesheet",id:"export-a-spritesheet",level:3},{value:"The above project exported as a gif file with Pixelorama",id:"the-above-project-exported-as-a-gif-file-with-pixelorama",level:5}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h5:"h5",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["You can either save or export your projects. Saving a project will create a ",(0,a.jsx)(o.a,{href:"../concepts/project/#pxo-files",children:".pxo file"}),", which is Pixelorama's custom file format, while exporting means that one (or multiple, in case of animations) ",(0,a.jsx)(o.code,{children:".png"}),"(s), an ",(0,a.jsx)(o.code,{children:".apng"}),", or a ",(0,a.jsx)(o.code,{children:".gif"})," file will be created."]}),"\n",(0,a.jsx)(o.admonition,{title:"saving vs exporting",type:"tip",children:(0,a.jsxs)(o.p,{children:["Basically, you should ",(0,a.jsx)(o.strong,{children:"save"})," your project if you intend to use it again on Pixelorama and keep all of your data, such as layers, ",(0,a.jsx)(o.a,{href:"../concepts/brush/#project-brushes",children:"project brushes"}),", animation tags, etc. While, if you want to share your artwork, import it in another software such as a game engine, or view it on an image editor, you should ",(0,a.jsx)(o.strong,{children:"export"})," it. Of course, nothing is stopping you from doing both, which is actually the recommended approach."]})}),"\n",(0,a.jsx)(o.h2,{id:"saving",children:"Saving"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Save Project",src:t(8809).Z+"",width:"207",height:"213"})}),"\n",(0,a.jsxs)(o.p,{children:["To save a project, you can go to the File menu and select ",(0,a.jsx)(o.code,{children:"Save.."}),", or press ",(0,a.jsx)("kbd",{children:"Control + S"}),", and a window will appear. If you are using a Desktop version, you will be able to choose where you want the file to be saved. If you use the Web version, you will be asked for a file name and the ",(0,a.jsx)(o.code,{children:".pxo"})," file will be downloaded by your browser."]}),"\n",(0,a.jsxs)(o.p,{children:["By selecting ",(0,a.jsx)(o.code,{children:"Save..."})," again on a project you have already saved, the file name and path you chose before will still be automatically used, which means that the old file will be replaced with a new one with the changes you have made. If you'd like to save a different file, you have to use the ",(0,a.jsx)(o.code,{children:"Save as..."})," option, or press ",(0,a.jsx)("kbd",{children:"Shift + Control + S"}),"."]}),"\n",(0,a.jsx)(o.h2,{id:"exporting",children:"Exporting"}),"\n",(0,a.jsxs)(o.p,{children:["To export your project, you can go to the File menu and select ",(0,a.jsx)(o.code,{children:"Export..."}),", or press ",(0,a.jsx)("kbd",{children:"Control + E"}),", and a window will appear. If you are using a Desktop version, you will be able to choose where you want the file to be saved. If you use the Web version, you will be asked for a file name and the ",(0,a.jsx)(o.code,{children:".png"}),", ",(0,a.jsx)(o.code,{children:".apng"})," or ",(0,a.jsx)(o.code,{children:".gif"})," file(s) will be downloaded by your browser."]}),"\n",(0,a.jsxs)(o.p,{children:["Just like with save, you have to use the ",(0,a.jsx)(o.code,{children:"Export as..."})," option or ",(0,a.jsx)("kbd",{children:" Shift + Control + E"})," to export to a new directory."]}),"\n",(0,a.jsx)(o.p,{children:"You can choose what you want to export by clicking on one of the tabs on the top of the window."}),"\n",(0,a.jsx)(o.admonition,{title:"resize while exporting",type:"tip",children:(0,a.jsx)(o.p,{children:"If you draw on a small canvas, the exported image will have a relatively slow resolution. Some software and websites tend to blur small images, which can make pixel art look bad. To avoid that, you are also given the option to resize on export, with a chosen interpolation method. This is useful when you want to share your art and make it easier for people to preview it. For most cases, sticking with the default Nearest interpolation should be fine."})}),"\n",(0,a.jsx)(o.p,{children:'You can choose which frames you want to save by changing the "Frame" option below the preview. The default setting is to include all frames, but you can set it to only include the currently selected frame, or select specific tags. Similarly, you can select which layers you want to include by changing the "Layers" option. You are also given the option to select the animation direction from either forward, backward or a ping-pong loop.'}),"\n",(0,a.jsx)(o.h3,{id:"export-a-sequence-of-images",children:"Export a sequence of images"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Export Images",src:t(6879).Z+"",width:"526",height:"629"})}),"\n",(0,a.jsxs)(o.p,{children:["By default, the export window is set to export a sequence of images, one for each frame, either as multiple files, or as a single animated file, if the file format is set to an animated image format, such as ",(0,a.jsx)(o.code,{children:".gif"})," or ",(0,a.jsx)(o.code,{children:".apng"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["If you save your animation as multiple files, then every file will have a number attached to its name. For example, if the name is ",(0,a.jsx)(o.code,{children:"filename.png"}),", the exported file names will be ",(0,a.jsx)(o.code,{children:"filename_0001.png"}),", ",(0,a.jsx)(o.code,{children:"filename_0002.png"}),", ",(0,a.jsx)(o.code,{children:"filename_0003.png"})," and so on. In the advanced options, you can find options to change the separator character(s) (in the above example, the character is the underscore (",(0,a.jsx)(o.code,{children:"_"}),'), which is also the default). If these frames also have a frame tag, the name of the tag can be included in the file name as well, by enabling "Include frame tags in the file name". You can also choose to automatically create a new directory for each frame tag for extra organization, by enabling "Create new folder for each frame tag". This will place all of the frames of the same tag in a different directory.']}),"\n",(0,a.jsxs)(o.p,{children:["Keep in mind that if you are working with a large canvas size and/or multiple frames, the ",(0,a.jsx)(o.code,{children:".gif"})," exporting process can be slow. Until we speed up the process, it is recommended to export to ",(0,a.jsx)(o.code,{children:".apng"})," and use another tool, such as ",(0,a.jsx)(o.a,{href:"https://ezgif.com/apng-to-gif",children:"https://ezgif.com/apng-to-gif"}),", to convert the ",(0,a.jsx)(o.code,{children:".apng"})," file to ",(0,a.jsx)(o.code,{children:".gif"}),"."]}),"\n",(0,a.jsx)(o.h3,{id:"export-a-spritesheet",children:"Export a spritesheet"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Export Spritesheet",src:t(5223).Z+"",width:"528",height:"626"})}),"\n",(0,a.jsxs)(o.p,{children:["You can save the entire animation as a single image containing all of the frames. This is called a ",(0,a.jsx)(o.code,{children:"spritesheet"}),". You can choose how many rows and columns you want your animation to be split into, in the spritesheet. Spritesheets can also be imported into Pixelorama."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Exported Gif",src:t(3574).Z+"",width:"300",height:"300"})}),"\n",(0,a.jsx)(o.h5,{id:"the-above-project-exported-as-a-gif-file-with-pixelorama",children:"The above project exported as a gif file with Pixelorama"})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},6879:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/export_images-d58d0ac969aa0d890ebdc3664178693f.png"},5223:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/export_spritesheet-35aa8f2415b137c77171041922e5d52c.png"},3574:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/exported_gif-2e4cb1af3f1e0fba4fce92f0eb453cc5.gif"},8809:(e,o,t)=>{t.d(o,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADVCAAAAADVp/t+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQflBxAUCjXfF4wbAAANfUlEQVR42u2d/VcTVxrH/Q/27Nm9XgSfSUggIYGEgARJUBEEjCLyEiBAeBnfaxXfalultqi1rWWtL2ittNY3fMEXQA0QAwmvdra7tj11t+3a7ok/7jn7B+zZsz+xP8wdIG/glHQS8T4n53C93rm5n9y5M3e+53meWYDmly2gPJSH8lCeec2zaGJiYmLChpYi9USIhjEcx3FcJUIIZfQjlBq81cqrI/c3k7KSm/3rXSaR4/34bYTQwr6iUAMQeFIRQijp33Ez8CQJxYx+lNAXizrWBjSKd5fFGXuswXmCtBfPU3QfIZQ7sCihL3Z2HoTQC/KEGJ95ACFU/FvyLBowIfTO4VnPt1QCo55AqPrn/4ymheKpeuhq7UdKDg1x3Gv+jeK6jugQQshyZ+gzrZIjBVTWNXxWFaw9cpkye4+7b1vaR2+koYU77w9/loiQzfGoxSUc62+H30ALe3PRZOctr6Gkxyr0+qGA9TNAeAzeZXEt/UHXzw2kG8qXNfUjJRf891YeGri6FmnuLYndclLJkYLBkwsHT4SYn8xxy+LmkRWLPziClI3quMMHkG6kQLbbRY4NOCK3C61wLESTnVva0ca+RtReEHJ+9k1MTEz8K8T82M4ilBGaB6FYq7PYznEc51ByiC80nESIyQvF04+QpQOh6jMIbewe51qR7TxCGS5ybMARCx2ZB95EaLLz2AG4uLY9zhkTkmfvyAzrx9Y2E4+lFiG074Pa82T98IWakwjFqGbgWd2BUHUbyu7LjNnUiqo+RSjDRY4NtLf3PFg6rXP0Sf0VdKuyNfT6yfzvNtmajSF4Ujy5st08z+W6GP9GOYOr43TXN+tHrLC8RMkhvqAbXLl4b1uw9r48hfeTdRdbUfJQvmy3ixwbyJPlvsP/WKRB1cA21OSwznA9qH/2v5/Kgt9/6lGV49ERnqdxeGvAlxXfGHXsx6ioc/RWnpJDfAGV3B1pUwRt78OzsMVz7/iXCFU5XK0u4dhAu7uTXDz5BorHOpQ2Lo/i/UEsQrkP5s9+J6YjU3H2+Dzav5V0e04l/FqeP84vW/CH+WULfj+/bMHv5pctqJxftgDml1EeykN5KA/loTyUJ3w8cm4rALQ0R8GQZHn2+qLEmdsoWKHEsGYAyM8L4PHoo4SnsFQdn2v1r7WmBfAosgGAYesTgvJcOBkdPPGNKgCmUjU7T1IdADBsydqgPCserYOWZoDiu8PtaUd3QupjHexqkZ5HX0sKaVUNpRrQ1BTW23TQwLLLNfZ1NlI7nUdrNwTjSbf3KFqawdBlUmw/s/4L2Na3Cb4okp7HUMX/VTUY4s3Vcg1rlOWuB7CmgaYxI57UKljIY1mWZdMZVpVpkwXjgYv7W5qB5TiO61UMJF4q/ULplEvPk1LD/zUVA4AtRWMHMFTwPPbJWgULjExTJ5MxDKuC0pVBeZZ6Pm+GxgsAAHB64zW4XXsiIusnEYCxqrLWAYAt1Y+H1E4/31SQ1FASjAfe4JrBOFKdsKoS7AM7YG9vNUCO8JHMCkoS43MrQFVvkGfZ5QJPeRajsYNQq2ABIGEt4YGVbFAeRXczQNmd0U4LaB9nQNZ4EmgepfAf6XjkhfV1RYkAhspGazIIPKaGZRo7CLXT7z8qAJktj+53KA/loTyUh/JQHsrzqvHIDzg9p3VRMSZxAgIwufaGIqU/T8slY/KhW7Jo4BEnIEB+qVqxqoLx5UkaywBgetZFAY5IAYFvbjP48qzuBQBo3W12nPR0riQqgtnx/mBPfpQLCPoaAADLCl+eslsAAO8eMI+uU+3rZngVwfy4RnHgfJQLCOkVAACrckPMjxOAGUnlVQSzE6D4ZpQLCMHnJ2nMCMD0FJudALIxA68imJ0AxbeiXECIb1QHWT9w+HKm9lCn3Dy6LnFvD8OrCAKPxBqCOAEBCsrUilWVjP/956Bz6IwezO62odu5REUgPFJrCOIEBGDygt1/iJmd82u/Q3nofpTyUB7KQ3koD+V5Qf1Ay71gf0xGlPDMrB8E8FwvCd4ws+vF2v3WPLPoBy/MAxAdPLPoB1oOmL0PhttTAJqcno/ihzmuCQBIa7OzrQtK7g5fygajmxwLtu7h83rSTnqeWfQDLQfazXrl+4fA6DFqL28kvztpbR6vSsoYWp+49aHS6CYeDEs9qxMOnYz8/ATXD7QcwLaece4EKK51HV4tnEektdkJsOlTAOhZZXQTD4ZNZwBUlgiunxn1Ay0HuX3L5dtOQHxi3g6HbRqPbMxgdgI0ngWAnjVGN/FgaDgNINdFjGdG/QBAy0HRg/SMS59AWU+65uQbcHWDnD/fEvf2MGYnQLp7fcImp9LoJh4MGYOFCfvPwdUNcknlhxfRD8j14Kinq/UywC7X8DkNbB7eASC0NjsBoPj2aEcOGN2CB0PlvdFzWtg8vENS+WFuz6eBrY3ul/l5O6A1U9Q7r3hsw9vpfpTyUB7KQ3kozyvAc9WhC8Yj5zjO+UGi+P4iLRh0PffogvIYILX9HfEPzpEWDJIHnrt1wXmg/su5CwFS80Dy4HN3clAew8Xm6c/+PhqCKMGgyen5KF6SxfOct4dB1w93XDH92d9XQxAhGBCJQQLrIDyOoPPT+pbPs7+vhiBCMCASg1Tnm+v5kC4ozzJ30vRnf18NQYRgQCQGaUzjg+N7Pbiwe/qzv6+GIEIwIBKDVNfroVDXa1jjSpj+7O+jIYgQDIjEII11OPRz2B9En2Awt/1O9AkGYeaJuGBA99eUJ8I8eN4Y5aE8lCcsPKt7f/pqT5QMa/Gxb55e1s/cRu2dLE4NfYon8W92Jnu8Pjp4TnUtURzt96/tKw/gUe3xHfoUT+73GOPK6OBJ/DkN49jBtNl5Mr/zHfoUDzN6Og1jHHPw8Y+dGty2H+Mr23Cp54dOvfQ8lr+QQrnnx24zNv351NPxAvyD17vf9M2VEVI7xUOG7rd+1K3fO6xY/Xoyc+pDXOjCyqdK/UjW4j2Xpecpc/N/034ole/kGNM/G+DoDYz7yrHpl1olqVV78TGv1+v1VpKhB1zfFtd9W4Wbxn/xtmM8krXhPN7i9Xq9X0vPk0e+c/t1jPFYvukJxiWPeJ4nk7VqL46F7O8AFglD9+Ep3YIxbjmX99dlcbvaMX7z3RtFeMutCK2fZ6kYx/YZNl/FGI+vNT3BuMQ1yUNqp843MnRfnsKnJZDm3FP82JDe/TnGyV+NxuAlP9XJV1XjHEw+ktmJTr3yiBMbnpbKt3/DCDwPt8aanmChVu3FGOs+nxq63/lW9ejZ10cWLTr595HPejDG15sxxhXuZwNrEr/V8B/peGSnnn5/SY9x6eA/enOwwPP6j/tMT7BQO+3+ww+d7ncoD+WhPPOfh+o7lIfyUB4fnsKOkQdSSet6a2N1Nmjs/L/UAMrSBvW0/xeZAIHvzpdH47Eps+/XSIITX58h11QbCY+iVgYri+R8PgA+o4G4BAikO1+e3EEAKJeGJ7kOANIFHgAASzYZ7rSMBi+cAIF058uj7D6WASAEKXzYBNC2gfgVgG/owtx55LbVKgDQ1BXW23SgYMHCstYGll0uZDQQlwCBdOe3frQtg9dKhSCFgk5QD6p5vwIAv9CFuZsiv648DUhiAwU7OT8ko4HIBAiku4Drm6L6kZUEKUCXqa6V+BUA+IUuhMNkRns6CTSfxkMyGohMgEC68+VZ3wgAbx0nQQrQtP/8GiGVIviFLszZDFkAsNISyDO5fkQlQCDd+fIUDBYrMm5uJ0EKoH/QzQipFMEvdGHO4Qi6eoNMVZHtx1OexUxmNBCVAIF053e+WW+O9h6QCUEK8Ok+EPwKwDd0IQzhCOkVjTW5jB+PqWHZ5AVDXAIEvju636E8lIfyUB7KQ3koz6vFI+c4juNqo2NQYt/AwLIsm+nPY5jxcEnd+MW+gSEh2PxED4/oNzCE5rF1KZL61glJEPgIBbOzrUvSPAai38CQEGL93AL40/5j7wlRCiRCwTxelSTp/Ih+AwPLshUhzrek+3eUQpQCiVAwOyU+30S/gWGG9ZPi6FIJUQokQkFyHtFvYJiB59yugx8JUQokQsHsBJA2j4HYNzCEWj/cxk035cquSiEJAh+hYHYCSJvHQOwbGFiWZbNm2B+8xEn6KA/dj1IeykN5KA/loTxRoR+E1/8g4vpBmP0PIq4fhNn/YA76QXgcEcLsfzAH/SBMjgjh9T+Yi34QLkeEcPofzEE/CI8jQpj9D361fhAuR4Qw+x/8Wv0AwuaIEF7/A6ofUB66H6U8lIfyUB7K82ryKN51uU9oJ+szIzgmkeELslX2+jUKf56PLqTrjl1hhEfifoX0mQMFE/n+RkuJSllY5sejG9MDxDsLfiPJQJRcIk4+UDYmAMjsOl+eknsAAOe25TwAKLkOWg4kf3XCpJolTj4w2AAAis2+PDWXAQCO753iidj8iJQPjGUAAJac2eYnYjwi5YM0fn78/OP1Y6kA8f2FOQ8jziNSPuDXT63e7/p2vH1JytFrjH7MnPIxz8NLBhEwke9vtJSolIXlAfef91yer6wA+9x9n/A8vGQQARMZviDLr2tglwTbH1hdBS/ptiC9Thdsv2NgXtZ9TgLdj1IeykN5KA/liaD9H3GzBPN9i6DLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA3LTE2VDIwOjEwOjM5KzAwOjAwvkpygwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNy0xNlQyMDoxMDozOSswMDowMM8Xyj8AAAAASUVORK5CYII="},1151:(e,o,t)=>{t.d(o,{Z:()=>r,a:()=>s});var a=t(7294);const i={},n=a.createContext(i);function s(e){const o=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);