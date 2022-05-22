"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1090],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function m(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,i=a.parentName,o=m(a,["components","mdxType","originalType","parentName"]),N=l(t),k=s,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(h,p(p({ref:e},o),{},{components:t})):n.createElement(h,p({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,p=new Array(r);p[0]=N;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=a,m.mdxType="string"==typeof a?a:s,p[1]=m;for(var l=2;l<r;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},88317:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return c}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),p=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/smallest-string-with-swaps"},i="1202 - Smallest String With Swaps (Medium)",l={unversionedId:"1200-1299/smallest-string-with-swaps-medium",id:"1200-1299/smallest-string-with-swaps-medium",title:"1202 - Smallest String With Swaps (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/smallest-string-with-swaps",source:"@site/solutions/1200-1299/1202-smallest-string-with-swaps-medium.md",sourceDirName:"1200-1299",slug:"/1200-1299/smallest-string-with-swaps-medium",permalink:"/leetcode-the-hard-way/solutions/1200-1299/smallest-string-with-swaps-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1200-1299/1202-smallest-string-with-swaps-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:1202,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/smallest-string-with-swaps"},sidebar:"tutorialSidebar",previous:{title:"1201 - Ugly Number III (Medium)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/ugly-number-iii-medium"},next:{title:"1232 - Check If It Is a Straight Line (Easy)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/check-if-it-is-a-straight-line-easy"}},o={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DSU",id:"approach-1-dsu",level:2}],N={toc:c};function k(a){var e=a.components,t=(0,s.Z)(a,p);return(0,r.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1202---smallest-string-with-swaps-medium"},"1202 - Smallest String With Swaps (Medium)"),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given a string ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", and an array of pairs of indices in the string ",(0,r.kt)("inlineCode",{parentName:"p"},"pairs")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"pairs[i] = [a, b]")," indicates 2 indices(0-indexed) of the string."),(0,r.kt)("p",null,"You can swap the characters at any pair of indices in the given ",(0,r.kt)("inlineCode",{parentName:"p"},"pairs")," ",(0,r.kt)("strong",{parentName:"p"},"any number of times"),"."),(0,r.kt)("p",null,"Return the lexicographically smallest string that ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," can be changed to after using the swaps."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "dcab", pairs = [[0,3],[1,2]]\nOutput: "bacd"\nExplaination: \nSwap s[0] and s[3], s = "bcad"\nSwap s[1] and s[2], s = "bacd"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]\nOutput: "abcd"\nExplaination: \nSwap s[0] and s[3], s = "bcad"\nSwap s[0] and s[2], s = "acbd"\nSwap s[1] and s[2], s = "abcd"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "cba", pairs = [[0,1],[1,2]]\nOutput: "abc"\nExplaination: \nSwap s[0] and s[1], s = "bca"\nSwap s[1] and s[2], s = "bac"\nSwap s[0] and s[1], s = "abc" \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= pairs.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= pairs[i][0], pairs[i][1] < s.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," only contains lower case English letters.")),(0,r.kt)("h2",{id:"approach-1-dsu"},"Approach 1: DSU"),(0,r.kt)("p",null,"If we have like ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[[0,1],[1,2]]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"[["),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]]"))))),", even ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0")))))," doesn't connect to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"))))),", it can still swap with ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2")))))," as we can first swap ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0")))))," and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"))))),", then swap ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0")))))," with ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"))))),". Therefore, we can use DSU to group all the connected nodes together first, then sort it and replace the character at corresponding indices."," "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"DSU Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) {\n        int n = s.size();\n        dsu d(n);\n        // group all connected nodes together\n        for (auto& p : pairs) d.unite(p[0], p[1]);\n        vector<vector<int>> m(n);\n        // all elements in the same group have the same parent\n        for (int i = 0; i < n; i++) m[d.get(i)].push_back(i);\n        for (int i = 0; i < n; i++) {\n            // build the possible string for group m[i]\n            string t;\n            for (int j = 0; j < m[i].size(); j++) t += s[m[i][j]];\n            // sort the string\n            sort(t.begin(), t.end());\n            // replace each in correponding index\n            for (int j = 0; j < m[i].size(); j++) s[m[i][j]] = t[j];\n        }\n        return s;\n    }\n};\n")))}k.isMDXComponent=!0}}]);