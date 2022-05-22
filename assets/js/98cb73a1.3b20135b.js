"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8305],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),N=i(t),u=r,k=N["".concat(l,".").concat(u)]||N[u]||c[u]||s;return t?n.createElement(k,m(m({ref:a},o),{},{components:t})):n.createElement(k,m({ref:a},o))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},74897:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),m=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/largest-perimeter-triangle/"},l="0976 - Largest Perimeter Triangle (Easy)",i={unversionedId:"0900-0999/largest-perimeter-triangle-easy",id:"0900-0999/largest-perimeter-triangle-easy",title:"0976 - Largest Perimeter Triangle (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/largest-perimeter-triangle/",source:"@site/solutions/0900-0999/0976-largest-perimeter-triangle-easy.md",sourceDirName:"0900-0999",slug:"/0900-0999/largest-perimeter-triangle-easy",permalink:"/leetcode-the-hard-way/solutions/0900-0999/largest-perimeter-triangle-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0900-0999/0976-largest-perimeter-triangle-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:976,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/largest-perimeter-triangle/"},sidebar:"tutorialSidebar",previous:{title:"0973 - K Closest Points to Origin (Medium)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/k-closest-points-to-origin-medium"},next:{title:"0991 - Broken Calculator (Medium)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/broken-calculator-medium"}},o={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sort",id:"approach-1-sort",level:2}],N={toc:c};function u(e){var a=e.components,t=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0976---largest-perimeter-triangle-easy"},"0976 - Largest Perimeter Triangle (Easy)"),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given an integer array ",(0,s.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,s.kt)("em",{parentName:"p"},"the largest perimeter of a triangle with a non-zero area, formed from three of these lengths"),". If it is impossible to form any triangle of a non-zero area, return ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [2,1,2]\nOutput: 5\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [1,2,1]\nOutput: 0\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"3 <= nums.length <= 10^4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^6"))),(0,s.kt)("h2",{id:"approach-1-sort"},"Approach 1: Sort"),(0,s.kt)("p",null,"In order to form a valid triangle, the side lengths of the triangle must satisfy ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},">"),(0,s.kt)("mi",{parentName:"mrow"},"c")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a + b > c")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7335em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")))))," where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"c")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\leq b \\leq c")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"))))),". Therefore, we can sort the array and try each ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(a,b,c)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," tuples to see if it is satisfied. If so, return the sum of three lengths. Else return 0 at the end."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int largestPerimeter(vector<int>& nums) {\n        // sort it first\n        sort(nums.begin(), nums.end());\n        // try the largest one\n        for (int i = nums.size() - 1; i >= 2; i--) {\n            // check if a + b > c is satisfied\n            if (nums[i - 2] + nums[i - 1] > nums[i]) {\n                // valid! non-zero area\n                return nums[i] + nums[i - 1] + nums[i - 2];\n            }\n        }\n        return 0;\n    }\n};\n")))}u.isMDXComponent=!0}}]);