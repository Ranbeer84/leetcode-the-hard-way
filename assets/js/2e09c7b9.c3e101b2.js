"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7958],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},78171:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(92194),["components"]),l={description:"Author: @TBC | https://leetcode.com/problems/maximum-depth-of-binary-tree"},p="0104 - Maximum Depth of Binary Tree (Easy)",u={unversionedId:"0100-0199/maximum-depth-of-binary-tree-easy",id:"0100-0199/maximum-depth-of-binary-tree-easy",title:"0104 - Maximum Depth of Binary Tree (Easy)",description:"Author: @TBC | https://leetcode.com/problems/maximum-depth-of-binary-tree",source:"@site/solutions/0100-0199/0104-maximum-depth-of-binary-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/maximum-depth-of-binary-tree-easy",permalink:"/leetcode-the-hard-way/solutions/0100-0199/maximum-depth-of-binary-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0100-0199/0104-maximum-depth-of-binary-tree-easy.md",tags:[],version:"current",sidebarPosition:104,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/maximum-depth-of-binary-tree"},sidebar:"tutorialSidebar",previous:{title:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium"},next:{title:"0110 - Balanced Binary Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/balanced-binary-tree-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0104---maximum-depth-of-binary-tree-easy"},"0104 - Maximum Depth of Binary Tree (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-depth-of-binary-tree"},"https://leetcode.com/problems/maximum-depth-of-binary-tree")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,o.kt)("em",{parentName:"p"},"its maximum depth"),"."),(0,o.kt)("p",null,"A binary tree's ",(0,o.kt)("strong",{parentName:"p"},"maximum depth")," is the number of nodes along the longest path from the root node down to the farthest leaf node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: 3\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [1,null,2]\nOutput: 2\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[0, 104]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,o.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0},92194:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.names.split(",");return n.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);