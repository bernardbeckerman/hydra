(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{251:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return a?l.a.createElement(u,c(c({ref:t},s),{},{components:a})):l.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),l=a(7),r=(a(0),a(251)),i={id:"defaults_list",title:"The Defaults List"},c={unversionedId:"advanced/defaults_list",id:"advanced/defaults_list",isDocsHomePage:!1,title:"The Defaults List",description:"Introduction",source:"@site/docs/advanced/defaults_list.md",slug:"/advanced/defaults_list",permalink:"/docs/next/advanced/defaults_list",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/defaults_list.md",version:"current",lastUpdatedBy:"Rosario Scalise",lastUpdatedAt:1609733143,sidebar:"docs",previous:{title:"extended",permalink:"/docs/next/advanced/override_grammar/extended"},next:{title:"Packages",permalink:"/docs/next/advanced/overriding_packages"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"An example",id:"an-example",children:[]},{value:"Overriding Config Group options",id:"overriding-config-group-options",children:[]},{value:"Composition order",id:"composition-order",children:[]},{value:"Interpolation in the Defaults List",id:"interpolation-in-the-defaults-list",children:[]},{value:"Debugging the Defaults List",id:"debugging-the-defaults-list",children:[]},{value:"Related topics",id:"related-topics",children:[]}],s={rightToc:o};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Many of the features described in this page are new. Please report any issues."))),Object(r.b)("p",null,"The Defaults List is a list in an input config that instructs Hydra how to build the output config.\nEach input config can have a Defaults List as a top level element. The Defaults List itself\nis not a part of output config."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Defaults List YAML syntax"',title:'"Defaults',List:!0,YAML:!0,'syntax"':!0}),"defaults:\n (- CONFIG|GROUP_DEFAULT)*\n\nCONFIG                 : (CONFIG_GROUP/)?CONFIG_NAME(@PACKAGE)?\nGROUP_DEFAULT          : [optional|override]? CONFIG_GROUP(@PACKAGE)?: OPTION\nOPTION                 : CONFIG_NAME|null\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CONFIG")," : A config to use when creating the output config. e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"db/mysql"),", ",Object(r.b)("inlineCode",{parentName:"p"},"db/mysql@backup"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"GROUP_DEFAULT")," : An ",Object(r.b)("em",{parentName:"p"},"overridable")," config. e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"db: mysql"),", ",Object(r.b)("inlineCode",{parentName:"p"},"db@backup: mysql"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"override"))," : Overrides the option of a previously defined GROUP_DEFAULT."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"optional"))," : By default, an OPTION that do not exist causes an error; optional suppresses the error. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"null"))," : A place-holder for a future override. If it is not overridden the entry is ignored.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CONFIG_NAME"),": The name of a config, without the file system extension. e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"mysql")," and not ",Object(r.b)("inlineCode",{parentName:"p"},"mysql.yaml"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CONFIG_GROUP")," : A path to a set of OPTIONS.",Object(r.b)("br",{parentName:"p"}),"\n","The path is relative to the containing config.\nIt can be made absolute by prefixing it with a ",Object(r.b)("inlineCode",{parentName:"p"},"/"),".",Object(r.b)("br",{parentName:"p"}),"\n","The path separator is ",Object(r.b)("inlineCode",{parentName:"p"},"/")," regardless of the operating system."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"OPTION"),": The currently selected ",Object(r.b)("em",{parentName:"p"},"CONFIG_NAME")," from a ",Object(r.b)("em",{parentName:"p"},"CONFIG_GROUP"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"PACKAGE")," : Where to place the content of the config within the output config.\nIt is relative to the Package of the containing config by default. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/advanced/overriding_packages"}),"Packages"),"."),Object(r.b)("h2",{id:"an-example"},"An example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Config directory structure"',title:'"Config',directory:!0,'structure"':!0}),"\u251c\u2500\u2500 server\n\u2502   \u251c\u2500\u2500 db\n\u2502   \u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2502   \u2514\u2500\u2500 sqlite.yaml\n\u2502   \u2514\u2500\u2500 apache.yaml\n\u2514\u2500\u2500 config.yaml\n")),Object(r.b)("p",null,"Input configs:"),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--4"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - server/apache\n\ndebug: false\n\n\n\n"))),Object(r.b)("div",{className:"col col--4"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="server/apache.yaml"',title:'"server/apache.yaml"'}),"defaults:\n  - db: mysql\n\nname: apache\n\n\n\n"))),Object(r.b)("div",{className:"col col--4"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="server/db/mysql.yaml"',title:'"server/db/mysql.yaml"'}),"name: mysql\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="server/db/sqlite.yaml"',title:'"server/db/sqlite.yaml"'}),"name: sqlite\n")))),Object(r.b)("p",null,"Output config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0}),"server:\n  db:\n    name: mysql\n  name: apache\ndebug: false\n")),Object(r.b)("h2",{id:"overriding-config-group-options"},"Overriding Config Group options"),Object(r.b)("p",null,"A Config Group's option can be overridden using a new ",Object(r.b)("em",{parentName:"p"},"GROUP_DEFAULT")," with the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"override"))," keyword.\nIf a Group Default is overridden more than once, the last one, in depth first order, wins."),Object(r.b)("p",null,"Extending the previous example:"),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml" {3}',title:'"config.yaml"',"{3}":!0}),"defaults:\n  - server/apache\n  - override server/db: sqlite\n\ndebug: false\n"))),Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python my_app.py" {2,3}',title:'"$',python:!0,'my_app.py"':!0,"{2,3}":!0}),"server:\n  db:\n    name: sqlite\n  name: apache\ndebug: false\n")))),Object(r.b)("p",null,"A Config Group's option can also be overridden via the command line. e.g:  "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$ python my_app.py server/db=sqlite\n")),Object(r.b)("h2",{id:"composition-order"},"Composition order"),Object(r.b)("p",null,"The Defaults List is ordered:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If multiple configs define the same value, the last one wins."),Object(r.b)("li",{parentName:"ul"},"If multiple configs contribute to the same dictionary, the result is the combined dictionary.")),Object(r.b)("p",null,"By default, the content of a config is overriding the content of configs in the defaults list."),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml" {5}',title:'"config.yaml"',"{5}":!0}),"defaults:\n  - db: mysql  \n\ndb:\n  host: backup\n"))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Result: db.host from config" {3}',title:'"Result:',"db.host":!0,from:!0,'config"':!0,"{3}":!0}),"db:\n  driver: mysql    # db/mysql.yaml\n  host: backup     # config.yaml\n  port: 3306       # db/mysql.yaml\n\n")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"_self_")," entry determines the relative position of ",Object(r.b)("strong",{parentName:"p"},"this")," config in the Defaults List.\nIf it is not specified, it is added automatically as the last item."),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml" {2,6}',title:'"config.yaml"',"{2,6}":!0}),"defaults:\n  - _self_\n  - db: mysql # Overrides this config \n\ndb:\n  host: backup\n"))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Result: All values from db/mysql" {3}',title:'"Result:',All:!0,values:!0,from:!0,'db/mysql"':!0,"{3}":!0}),"db:\n  driver: mysql    # db/mysql.yaml\n  host: localhost  # db/mysql.yaml\n  port: 3306       # db/mysql.yaml\n\n\n")))),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"_self_")," at the top of the Defaults List, the host field defined in ",Object(r.b)("em",{parentName:"p"},"config.yaml")," now precedes the host field defined\nin ",Object(r.b)("em",{parentName:"p"},"db/mysql.yaml"),", and as a result is overridden."),Object(r.b)("h2",{id:"interpolation-in-the-defaults-list"},"Interpolation in the Defaults List"),Object(r.b)("p",null,"Config Group Options can be selected using interpolation."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - server: apache\n  - db: mysql\n  - combination_specific_config: ${server}_${db}  # apache_mysql\n")),Object(r.b)("p",null,"Interpolation keys can be config groups with any @package overrides.",Object(r.b)("br",{parentName:"p"}),"\n","For example: ",Object(r.b)("inlineCode",{parentName:"p"},"${db/engine}"),", ",Object(r.b)("inlineCode",{parentName:"p"},"${db@backup}")),Object(r.b)("p",null,"The selected option for ",Object(r.b)("em",{parentName:"p"},"combination_specific_config")," depends on the final selected options for ",Object(r.b)("em",{parentName:"p"},"db")," and ",Object(r.b)("em",{parentName:"p"},"server"),".",Object(r.b)("br",{parentName:"p"}),"\n","e.g. If ",Object(r.b)("em",{parentName:"p"},"db")," is overridden to ",Object(r.b)("em",{parentName:"p"},"sqlite"),", ",Object(r.b)("em",{parentName:"p"},"combination_specific_config")," will become ",Object(r.b)("em",{parentName:"p"},"apache_sqlite"),"."),Object(r.b)("h4",{id:"restrictions"},"Restrictions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Defaults List interpolation is only supported in the primary config."),Object(r.b)("li",{parentName:"ul"},"The subtree expanded by an Interpolated Config may not contain overrides."),Object(r.b)("li",{parentName:"ul"},"Interpolation Keys in the Defaults List cannot reference values in the Final Config Object (it does not yet).")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/patterns/specializing_config"}),"Patterns/Specializing Configs")," for more information."),Object(r.b)("h2",{id:"debugging-the-defaults-list"},"Debugging the Defaults List"),Object(r.b)("p",null,"Hydra's config composition process is as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Defaults Tree is created."),Object(r.b)("li",{parentName:"ul"},"The Final Defaults List is created via a DFS walk of the Defaults Tree."),Object(r.b)("li",{parentName:"ul"},"The Output Config is composed from the entries in the Final Defaults List.")),Object(r.b)("p",null,"You can inspect these artifacts via command line flags:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--info defaults-tree")," shows the Defaults Tree."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--info defaults")," Shows the Final Defaults List."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--cfg job|hydra|all")," Shows the Output Config.")),Object(r.b)("p",null,"Example outputs:"),Object(r.b)("details",null,Object(r.b)("summary",null,"python my_app.py ",Object(r.b)("b",null,"--info defaults-tree")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=""',title:'""'}),"<root>:\n  hydra/config:\n    hydra/hydra_logging: default\n    hydra/job_logging: default\n    hydra/launcher: basic\n    hydra/sweeper: basic\n    hydra/output: default\n    hydra/help: default\n    hydra/hydra_help: default\n    _self_\n  config:\n    server/apache:\n      server/db: mysql\n      _self_\n    _self_\n"))),Object(r.b)("details",null,Object(r.b)("summary",null,"python my_app.py ",Object(r.b)("b",null,"--info defaults")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Defaults List\n*************\n| Config path                 | Package             | _self_ | Parent        | \n-------------------------------------------------------------------------------\n| hydra/hydra_logging/default | hydra.hydra_logging | False  | hydra/config  |\n| hydra/job_logging/default   | hydra.job_logging   | False  | hydra/config  |\n| hydra/launcher/basic        | hydra.launcher      | False  | hydra/config  |\n| hydra/sweeper/basic         | hydra.sweeper       | False  | hydra/config  |\n| hydra/output/default        | hydra               | False  | hydra/config  |\n| hydra/help/default          | hydra.help          | False  | hydra/config  |\n| hydra/hydra_help/default    | hydra.hydra_help    | False  | hydra/config  |\n| hydra/config                | hydra               | True   | <root>        |\n| server/db/mysql             | server.db           | False  | server/apache |\n| server/apache               | server              | True   | config        |\n| config                      |                     | True   | <root>        |\n-------------------------------------------------------------------------------\n"))),Object(r.b)("details",null,Object(r.b)("summary",null,"python my_app.py ",Object(r.b)("b",null,"--cfg job")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"server:\n  db:\n    name: mysql\n  name: apache\ndebug: false\n"))),Object(r.b)("h2",{id:"related-topics"},"Related topics"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/advanced/overriding_packages"}),"Packages")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/patterns/extending_configs"}),"Common Patterns/Extending Configs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/patterns/configuring_experiments"}),"Common Patterns/Configuring Experiments"))))}b.isMDXComponent=!0}}]);