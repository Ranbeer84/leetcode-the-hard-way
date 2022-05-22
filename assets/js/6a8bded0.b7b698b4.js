"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9190],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38856:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/"},c="1502 - Can Make Arithmetic Progression From Sequence (Easy)",l={unversionedId:"1500-1599/can-make-arithmetic-progression-from-sequence-easy",id:"1500-1599/can-make-arithmetic-progression-from-sequence-easy",title:"1502 - Can Make Arithmetic Progression From Sequence (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/",source:"@site/solutions/1500-1599/1502-can-make-arithmetic-progression-from-sequence-easy.md",sourceDirName:"1500-1599",slug:"/1500-1599/can-make-arithmetic-progression-from-sequence-easy",permalink:"/leetcode-the-hard-way/solutions/1500-1599/can-make-arithmetic-progression-from-sequence-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1500-1599/1502-can-make-arithmetic-progression-from-sequence-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:1502,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/"},sidebar:"tutorialSidebar",previous:{title:"1500 - 1599",permalink:"/leetcode-the-hard-way/solutions/category/1500---1599"},next:{title:"1510 - Stone Game IV (Hard)",permalink:"/leetcode-the-hard-way/solutions/1500-1599/stone-game-iv-hard"}},p={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1502---can-make-arithmetic-progression-from-sequence-easy"},"1502 - Can Make Arithmetic Progression From Sequence (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"A sequence of numbers is called an ",(0,o.kt)("strong",{parentName:"p"},"arithmetic progression")," if the difference between any two consecutive elements is the same."),(0,o.kt)("p",null,"Given an array of numbers ",(0,o.kt)("inlineCode",{parentName:"p"},"arr"),", return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," ",(0,o.kt)("em",{parentName:"p"},"if the array can be rearranged to form an ",(0,o.kt)("strong",{parentName:"em"},"arithmetic progression"),". Otherwise, return")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [3,5,1]\nOutput: true\nExplanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [1,2,4]\nOutput: false\nExplanation: There is no way to reorder the elements to obtain an arithmetic progression.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= arr.length <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-106 <= arr[i] <= 10^6"))),(0,o.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,o.kt)("p",null,"We sort the array and calculate the first difference. Iterate the rest of the elements to check if they have the same difference between two elements."," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool canMakeArithmeticProgression(vector<int>& arr) {\n        // reorder first\n        sort(arr.begin(), arr.end());\n        // calculate the first difference\n        int d = arr[1] - arr[0];\n        // check the rest of the differences\n        // if there is a new difference, then it is false\n        // else it is true\n        for (int i = 2; i < arr.size(); i++) {\n            if (arr[i] - arr[i - 1] != d) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n")))}f.isMDXComponent=!0}}]);