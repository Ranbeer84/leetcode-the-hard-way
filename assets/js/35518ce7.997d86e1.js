"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5041],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99133:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/n-ary-tree-preorder-traversal/"},s="0589 - N-ary Tree Preorder Traversal (Easy)",i={unversionedId:"0500-0599/n-ary-tree-preorder-traversal-easy",id:"0500-0599/n-ary-tree-preorder-traversal-easy",title:"0589 - N-ary Tree Preorder Traversal (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/n-ary-tree-preorder-traversal/",source:"@site/solutions/0500-0599/0589-n-ary-tree-preorder-traversal-easy.md",sourceDirName:"0500-0599",slug:"/0500-0599/n-ary-tree-preorder-traversal-easy",permalink:"/leetcode-the-hard-way/solutions/0500-0599/n-ary-tree-preorder-traversal-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0500-0599/0589-n-ary-tree-preorder-traversal-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:589,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/n-ary-tree-preorder-traversal/"},sidebar:"tutorialSidebar",previous:{title:"0581 - Shortest Unsorted Continuous Subarray (Medium)",permalink:"/leetcode-the-hard-way/solutions/0500-0599/shortest-unsorted-continuous-subarray-medium"},next:{title:"0600 - 0699",permalink:"/leetcode-the-hard-way/solutions/category/0600---0699"}},u={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}],d={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0589---n-ary-tree-preorder-traversal-easy"},"0589 - N-ary Tree Preorder Traversal (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," of an n-ary tree, return ",(0,o.kt)("em",{parentName:"p"},"the preorder traversal of its nodes' values"),"."),(0,o.kt)("p",null,"Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [1,null,3,2,4,null,5,6]\nOutput: [1,3,5,6,2,4]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\nOutput: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[0, 10^4]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 10^4")),(0,o.kt)("li",{parentName:"ul"},"The height of the n-ary tree is less than or equal to ",(0,o.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,o.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,o.kt)("p",null,"Straightforward preorder traversal."," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> ans;\n    void dfs(Node* node) {\n        if (!node) return;\n        ans.push_back(node->val);\n        for (auto x : node->children) dfs(x);\n    }\n    vector<int> preorder(Node* root) {\n        dfs(root);\n        return ans;\n    }\n};\n")))}m.isMDXComponent=!0}}]);