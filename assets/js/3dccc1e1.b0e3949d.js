"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[314],{7546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(5893),o=t(1151);const s={id:"extension_examples",title:"Examples",sidebar_label:"Examples",sidebar_position:3},a=void 0,r={id:"extension_system/extension_examples",title:"Examples",description:"The examples below assume you are developing for the latest Pixelorama release",source:"@site/docs/extension_system/extension_examples.md",sourceDirName:"extension_system",slug:"/extension_system/extension_examples",permalink:"/Pixelorama-Docs/extension_system/extension_examples",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/extension_system/extension_examples.md",tags:[],version:"current",lastUpdatedBy:"Emmanouil Papadeas",lastUpdatedAt:1701356966,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:3,frontMatter:{id:"extension_examples",title:"Examples",sidebar_label:"Examples",sidebar_position:3},sidebar:"docs",previous:{title:"ExtensionsApi",permalink:"/Pixelorama-Docs/extension_system/extension_api"},next:{title:"Ways to contribute",permalink:"/Pixelorama-Docs/development_and_contributing"}},d={},l=[{value:"Bare Minimum",id:"bare-minimum",level:3},{value:"Add new Tab",id:"add-new-tab",level:3},{value:"Add Menu Item",id:"add-menu-item",level:3},{value:"Add a Theme",id:"add-a-theme",level:3},{value:"Change Font",id:"change-font",level:3},{value:"Project Manipulation",id:"project-manipulation",level:3},{value:"Custom Exporter",id:"custom-exporter",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"code version",type:"caution",children:(0,i.jsx)(n.p,{children:"The examples below assume you are developing for the latest Pixelorama release"})}),"\n",(0,i.jsxs)(n.p,{children:["Below are some example codes for different basic types of extensions. To use them, ",(0,i.jsx)(n.a,{href:"extension_basics#making-an-extension",children:"create an extension"})," and paste your desired code from here to ",(0,i.jsx)(n.code,{children:"Main.gd"}),";"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#bare-minimum",children:"Bare Minimum"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#add-new-tab",children:"Add new Tab"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#add-menu-item",children:"Add Menu Item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#change-font",children:"Change Font"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#project-manipulation",children:"Project Manipulation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#custom-exporter",children:"Custom Exporter"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bare-minimum",children:"Bare Minimum"}),"\n",(0,i.jsx)(n.p,{children:"The most basic code."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"extends Node\n\n\n# This script acts as a setup for the extension\nfunc _enter_tree() -> void:\n\tpass\n\n\nfunc _exit_tree() -> void:  # Extension is being uninstalled or disabled\n\t# remember to remove things that you added using this extension\n\tpass\n"})}),"\n",(0,i.jsx)(n.h3,{id:"add-new-tab",children:"Add new Tab"}),"\n",(0,i.jsx)(n.p,{children:"Adds a simple Panel as a tab, which will be placed at the same place as the Tools tab by default."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'extends Node\n\nonready var extension_api: Node  # Variable for keeping reference to the Api\n\n# some references to nodes that will be created later\nvar panel\n\n\n# This script acts as a setup for the extension\nfunc _enter_tree() -> void:\n\textension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api\n\n\t# add a test panel as a tab  (this is an example) the tab is located at the same\n\t# place as the (Tools tab) by default\n\tpanel = Panel.new()\n\tpanel.name = "This is a new panel"  # This is optional\n\textension_api.panel.add_node_as_tab(panel)\n\n\nfunc _exit_tree() -> void:  # Extension is being uninstalled or disabled\n\t# remember to remove things that you added using this extension\n\textension_api.panel.remove_node_from_tab(panel)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"add-menu-item",children:"Add Menu Item"}),"\n",(0,i.jsx)(n.p,{children:"Adds a menu item in Help menu, which displays a message when clicked on it."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'extends Node\n\nonready var extension_api: Node  # Variable for keeping reference to the Api\n\nvar item_id: int\n\n# This script acts as a setup for the extension\nfunc _enter_tree() -> void:\n\textension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api\n\tvar type = extension_api.menu.HELP\n\n\titem_id = extension_api.menu.add_menu_item(type, "Show Message", self)\n\t# the 3rd argument (in this case "self") will try to call "menu_item_clicked"\n\t# (if it is present)\n\n\nfunc menu_item_clicked():\n\t# Do some stuff\n\textension_api.dialog.show_error("You Tickled Me :)")\n\n\nfunc _exit_tree() -> void:  # Extension is being uninstalled or disabled\n\t# remember to remove things that you added using this extension\n\textension_api.menu.remove_menu_item(extension_api.menu.HELP, item_id)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"add-a-theme",children:"Add a Theme"}),"\n",(0,i.jsxs)(n.p,{children:["Adds a theme to pixelorama ",(0,i.jsx)(n.strong,{children:"Preferences > Interface > Themes"})," (you need to have a theme resource beforehand and that theme resource must derive from one of the ",(0,i.jsx)(n.a,{href:"https://github.com/Orama-Interactive/Pixelorama/tree/master/assets/themes",children:"main pixelorama themes"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'extends Node\n\nonready var extension_api: Node  # Variable for keeping reference to the Api\n\nvar theme = load("res://path_to_some_theme.tres") # Replace this with your theme resource\n# your theme resource must be a derivative of themes from\n# https://github.com/Orama-Interactive/Pixelorama/tree/master/assets/themes\n# or else a CRASH might occur\n\n\n# if a theme from the extension was set in preferences, then it will be automatically be\n# set when pixelorama is launched again\nfunc _enter_tree() -> void:\n\textension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api\n\tif theme:\n\t\textension_api.theme.add_theme(theme)  # Adds the theme to preferences\n\n\nfunc _exit_tree() -> void:  # Extension is being uninstalled or disabled\n\tif theme:\n\t\textension_api.theme.remove_theme(theme)  # Adds the theme to preferences\n'})}),"\n",(0,i.jsx)(n.h3,{id:"change-font",children:"Change Font"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you only need a different font instead of a different theme. This is much easier to achieve than adding themes.(you need to have a ",(0,i.jsx)(n.code,{children:".ttf"})," font resource beforehand)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'extends Node\n# used If your goal is to only use a different font\n\nonready var extension_api: Node  # Variable for keeping reference to the Api\n\nvar font_res = load("res://path_to_some_font.ttf")  # Replace this with your font resource\nvar old_font\n\n# This script acts as a setup for the extension\nfunc _enter_tree() -> void:\n\textension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api\n\tif font_res:\n\t\told_font = extension_api.general.get_global().control.theme.default_font.font_data\n\t\t#set the new font\n\t\textension_api.general.get_global().control.theme.default_font.font_data = font_res\n\n\nfunc _exit_tree() -> void:\n\tif font_res and old_font:\n\t\t#set the default font back again\n\t\textension_api.general.get_global().control.theme.default_font.font_data = old_font\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"project-manipulation",children:"Project Manipulation"}),"\n",(0,i.jsxs)(n.p,{children:["Wish to automate some project behaviour? this will demonstrate some of the basic functions provided by the project api. This example adds a menu button to the edit menu and on clicking it some project manipulations (instructed in ",(0,i.jsx)(n.code,{children:"menu_item_clicked()"}),") will get carried out."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'extends Node\n\n# I will show you some common stuff to manipulate projects\n# (I will make use of the menu api as well)\n\n# To know the available methods of (timeline) see:\n# https://github.com/Orama-Interactive/Pixelorama/blob/master/src/UI/Timeline/AnimationTimeline.gd\n\n# NOTE: some more advanced methods can be accessed from timeline node (un-comment line below to get them)\n#onready var timeline = ExtensionsApi.general.get_global().animation_timeline\n\nonready var extension_api: Node  # Variable for keeping reference to the Api\n\nvar item_id: int\nvar type: int\n\n\nfunc _enter_tree() -> void:\n\textension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api\n\ttype = extension_api.menu.EDIT\n\titem_id = extension_api.menu.add_menu_item(type, "Click Me 4 times", self)\n\n\nfunc _exit_tree() -> void:  # Extension is being uninstalled or disabled\n\t# remember to remove things that you added using this extension\n\textension_api.menu.remove_menu_item(type, item_id)\n\n\n################## Test Project methods whenever we click the menu button ############\nvar thing_to_do := 0\nvar new_project\nvar dest_img: Image\nfunc menu_item_clicked():\n\t# Do some stuff\n\tif thing_to_do == 0:\n\t\t# get an image (For testing) from the current cel\n\t\tdest_img = extension_api.project.get_current_cel().get_image()\n\t\t# also make a new project\n\t\tnew_project = extension_api.project.new_project([], "Test", Vector2(64, 64))\n\tif thing_to_do == 1:\n\t\t# To change something or get something in a project we must make it our "current_project" first\n\t\textension_api.project.switch_to(new_project)\n\tif thing_to_do == 2:\n\t\t# Add 3 frames (the new_project will now have 4 total frames)\n\t\tfor i in range(3):\n\t\t\textension_api.project.add_new_frame(0)\n\tif thing_to_do == 3:\n\t\t# Add a PixelLayer\n\t\textension_api.project.add_new_layer(0, "I Love Pixelorama")\n\tif thing_to_do == 4:\n\t\t# Now change content at {frame 3, layer 1} of "new_project"\n\t\textension_api.project.set_pixelcel_image(dest_img, 2, 0)  # {frame 3, layer 1}\n\tthing_to_do += 1\n'})}),"\n",(0,i.jsx)(n.h3,{id:"custom-exporter",children:"Custom Exporter"}),"\n",(0,i.jsx)(n.p,{children:"Adds a basic custom exporter that will export only odd frames."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'extends Node\n\nonready var extension_api: Node  # Variable for keeping reference to the Api\n\nvar id: int\n\n\nfunc _enter_tree() -> void:\n\textension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api\n\n\tvar exporter_info := {"extension": ".png", "description": "Only Alternate Frames"}\n\tid = extension_api.exports.add_export_option(\n\t\texporter_info, self, extension_api.exports.ExportTab.IMAGE, false\n\t)  # 2nd argument (in this case "self") must have "override_export()" in it\'s script\n\n\nfunc _exit_tree() -> void:\n\t# remember to remove things that you added using this extension\n\textension_api.exports.remove_export_option(id)\n\n\nfunc override_export(details: Dictionary) -> bool:\n\t# in this function you take control of image processing and saving from pixelorama\n\t# return true for SUCCESS, false for FAILURE\n\n\t# the (details) include everything you could possibly need for exporting\n\t# keys of (details) are:\n\t# "processed_images", "durations", "export_dialog", "export_paths", "project"\n\tfor i in range(0, details["processed_images"].size(), 2):\n\t\tvar image: Image = details["processed_images"][i]\n\t\tvar error = image.save_png(details["export_paths"][i])\n\t\tif error != OK:\n\t\t\treturn false\n\treturn true\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);