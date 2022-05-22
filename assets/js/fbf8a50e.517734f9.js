"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3638],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(t),h=r,N=u["".concat(o,".").concat(h)]||u[h]||c[h]||m;return t?n.createElement(N,s(s({ref:a},l),{},{components:t})):n.createElement(N,s({ref:a},l))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=u;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<m;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52790:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=t(87462),r=t(63366),m=(t(67294),t(3905)),s=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/replace-non-coprime-numbers-in-array/"},o="2197 - Replace Non-Coprime Numbers in Array (Hard)",i={unversionedId:"2100-2199/replace-non-coprime-numbers-in-array-hard",id:"2100-2199/replace-non-coprime-numbers-in-array-hard",title:"2197 - Replace Non-Coprime Numbers in Array (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/replace-non-coprime-numbers-in-array/",source:"@site/solutions/2100-2199/2197-replace-non-coprime-numbers-in-array-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/replace-non-coprime-numbers-in-array-hard",permalink:"/leetcode-the-hard-way/solutions/2100-2199/replace-non-coprime-numbers-in-array-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2197-replace-non-coprime-numbers-in-array-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:2197,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/replace-non-coprime-numbers-in-array/"},sidebar:"tutorialSidebar",previous:{title:"2196 - Create Binary Tree From Descriptions (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/create-binary-tree-from-descriptions-medium"},next:{title:"2200 - Find All K-Distant Indices in an Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-all-k-distant-indices-in-an-array-easy"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],u={toc:c};function h(e){var a=e.components,t=(0,r.Z)(e,s);return(0,m.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"2197---replace-non-coprime-numbers-in-array-hard"},"2197 - Replace Non-Coprime Numbers in Array (Hard)"),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"You are given an array of integers ",(0,m.kt)("inlineCode",{parentName:"p"},"nums"),". Perform the following steps:"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},"Find ",(0,m.kt)("strong",{parentName:"li"},"any")," two ",(0,m.kt)("strong",{parentName:"li"},"adjacent")," numbers in ",(0,m.kt)("inlineCode",{parentName:"li"},"nums")," that are ",(0,m.kt)("strong",{parentName:"li"},"non-coprime"),"."),(0,m.kt)("li",{parentName:"ol"},"If no such numbers are found, ",(0,m.kt)("strong",{parentName:"li"},"stop")," the process."),(0,m.kt)("li",{parentName:"ol"},"Otherwise, delete the two numbers and ",(0,m.kt)("strong",{parentName:"li"},"replace")," them with their ",(0,m.kt)("strong",{parentName:"li"},"LCM (Least Common Multiple)"),"."),(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("strong",{parentName:"li"},"Repeat")," this process as long as you keep finding two adjacent non-coprime numbers.")),(0,m.kt)("p",null,"Return ",(0,m.kt)("em",{parentName:"p"},"the ",(0,m.kt)("strong",{parentName:"em"},"final")," modified array.")," It can be shown that replacing adjacent non-coprime numbers in ",(0,m.kt)("strong",{parentName:"p"},"any")," arbitrary order will lead to the same result."),(0,m.kt)("p",null,"The test cases are generated such that the values in the final array are ",(0,m.kt)("strong",{parentName:"p"},"less than or equal")," to ",(0,m.kt)("inlineCode",{parentName:"p"},"108"),"."),(0,m.kt)("p",null,"Two values ",(0,m.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"y")," are ",(0,m.kt)("strong",{parentName:"p"},"non-coprime")," if ",(0,m.kt)("inlineCode",{parentName:"p"},"GCD(x, y) > 1")," where ",(0,m.kt)("inlineCode",{parentName:"p"},"GCD(x, y)")," is the ",(0,m.kt)("strong",{parentName:"p"},"Greatest Common Divisor")," of ",(0,m.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [6,4,3,2,7,6,2]\nOutput: [12,7,6]\nExplanation: \n- (6, 4) are non-coprime with LCM(6, 4) = 12. Now, nums = [12,3,2,7,6,2].\n- (12, 3) are non-coprime with LCM(12, 3) = 12. Now, nums = [12,2,7,6,2].\n- (12, 2) are non-coprime with LCM(12, 2) = 12. Now, nums = [12,7,6,2].\n- (6, 2) are non-coprime with LCM(6, 2) = 6. Now, nums = [12,7,6].\nThere are no more adjacent non-coprime numbers in nums.\nThus, the final modified array is [12,7,6].\nNote that there are other ways to obtain the same resultant array.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [2,2,1,1,3,3,3]\nOutput: [2,1,1,3]\nExplanation: \n- (3, 3) are non-coprime with LCM(3, 3) = 3. Now, nums = [2,2,1,1,3,3].\n- (3, 3) are non-coprime with LCM(3, 3) = 3. Now, nums = [2,2,1,1,3].\n- (2, 2) are non-coprime with LCM(2, 2) = 2. Now, nums = [2,1,1,3].\nThere are no more adjacent non-coprime numbers in nums.\nThus, the final modified array is [2,1,1,3].\nNote that there are other ways to obtain the same resultant array.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^5")),(0,m.kt)("li",{parentName:"ul"},"The test cases are generated such that the values in the final array are ",(0,m.kt)("strong",{parentName:"li"},"less than or equal")," to ",(0,m.kt)("inlineCode",{parentName:"li"},"108"),".")),(0,m.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,m.kt)("p",null,"We iterate each number and check if the gcd of this number ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and the last element ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," is non co-prime, i.e. ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"y"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},">"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"gcd(x, y) > 1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},">"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),".  If so, replace them with their LCM and keep doing the same process till they are co-prime."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> replaceNonCoprimes(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> ans;\n        for (int i = 0; i < n; i++) {\n            // check if the last element of ans\n            // and nums[i] are non co-prime\n            while (ans.size() && gcd(ans.back(), nums[i]) > 1) {\n                // replace them with their LCM\n                nums[i] = lcm(ans.back(), nums[i]);\n                // delete the last element\n                ans.pop_back();\n            }\n            // insert nums[i] to ans for the next round\n            ans.push_back(nums[i]);\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);