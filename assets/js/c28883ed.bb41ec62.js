"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[61],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},suggestedProblems:function(){return d},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(78735),s=n(11182),l=["components"],p={title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","two pointers","algorithm"]},m=void 0,c={unversionedId:"basic-topics/two-pointers",id:"basic-topics/two-pointers",title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",source:"@site/tutorials/basic-topics/two-pointers.md",sourceDirName:"basic-topics",slug:"/basic-topics/two-pointers",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/two-pointers",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/two-pointers.md",tags:[],version:"current",frontMatter:{title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","two pointers","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Trie",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/trie"},next:{title:"Graph Theory",permalink:"/leetcode-the-hard-way/tutorials/category/graph-theory"}},u={},h=[{value:"Overview",id:"overview",level:2}],d=[{problemName:"1768 - Merge Strings Alternately",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/merge-strings-alternately/",solutionLink:"../../solutions/1700-1799/merge-strings-alternately-easy"},{problemName:"2108 - Find First Palindromic String in the Array",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",solutionLink:"../../solutions/2100-2199/find-first-palindromic-string-in-the-array-easy"},{problemName:"0283 - Move Zeroes",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/move-zeroes/",solutionLink:"../../solutions/0200-0299/move-zeroes-easy"}],f={toc:h,suggestedProblems:d};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{names:"@heiheihang",mdxType:"TutorialAuthors"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"For some simple iteration problems, we may be able to get away with a simple one-pass iteration. In some special problems, we have to use the technique ",(0,o.kt)("strong",{parentName:"p"},"Two Pointers")," to strategically move around in our input. Let's take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/squares-of-a-sorted-array/"},"this problem"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," sorted in ",(0,o.kt)("strong",{parentName:"p"},"non-decreasing")," order, return ",(0,o.kt)("em",{parentName:"p"},"an array of ",(0,o.kt)("strong",{parentName:"em"},"the squares of each number")," sorted in non-decreasing order"),".")),(0,o.kt)("p",null,"Let's look at this example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nums = [-4,-1,0,3,10] #input\n")),(0,o.kt)("p",null,"From this input, we can generate the following square numbers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"squares = [16, 1, 0, 9, 100]\n")),(0,o.kt)("p",null,"We want to return the following sorted squares:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"answer = [0, 1, 9, 16, 100]\n")),(0,o.kt)("p",null,"You may be thinking, why can't we generate the squares and then sort the result? This approach would take ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"N"),(0,o.kt)("mi",{parentName:"mrow"},"l"),(0,o.kt)("mi",{parentName:"mrow"},"o"),(0,o.kt)("mi",{parentName:"mrow"},"g"),(0,o.kt)("mi",{parentName:"mrow"},"N"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(NlogN)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"Nl"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")"))))),", and we want to do better than this."),(0,o.kt)("p",null,"We can sequentially add the next biggest elements with the two pointer approach. We first set a ",(0,o.kt)("inlineCode",{parentName:"p"},"left_pointer")," at the left of the list and a ",(0,o.kt)("inlineCode",{parentName:"p"},"right_pointer")," at the right of the list. The ",(0,o.kt)("inlineCode",{parentName:"p"},"left_pointer")," should be pointing at the ",(0,o.kt)("strong",{parentName:"p"},"largest")," negative number (most negative), and the ",(0,o.kt)("inlineCode",{parentName:"p"},"right_pointer")," should be pointing at the ",(0,o.kt)("strong",{parentName:"p"},"largest")," positive number. We can move the pointers accordingly to find the next largest squared number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def sortedSquares(self, nums: List[int]) -> List[int]:\n        \n        #initialize two pointers\n        left_pointer = 0\n        right_pointer = len(nums) - 1\n        \n        #initialize result\n        res = []\n        \n        #while left_pointer does not meet right_pointer\n        while(left_pointer <= right_pointer):\n            \n            #if the square of left_pointer and right_pointer \n            if(abs(nums[left_pointer]) > abs(nums[right_pointer])):\n                \n                res.append(nums[left_pointer] ** 2)\n                \n                #we move the left to the right\n                left_pointer += 1\n            else:\n                res.append(nums[right_pointer] ** 2)\n                \n                #we move the right pointer to the left\n                right_pointer -= 1\n        \n        #we need to reverse the result list\n        res.reverse()\n        return res\n")),(0,o.kt)("p",null,"Unfortunately, there is no fixed way to perform two pointers. However, generally, we have a pointer at the start of the list and another pointer at the end of the list. We have to carefully analyze the question and choose the most appropriate approach to operate the two pointers."),(0,o.kt)(s.Z,{title:"Suggested Problems",data:d,mdxType:"Table"}))}g.isMDXComponent=!0},11182:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function a(e){var t=e.names;if(!t)return null;var n=t.split(",");return r.createElement("div",{className:"tag-wrapper"},n.map((function(e,t){return r.createElement("span",{key:t,className:"topic-tag"},e)})))}function o(e){var t=e.title,n=e.collectionLink,o=e.isSorted,i=void 0===o||o,s=e.data,l=s.some((function(e){return e.tags})),p={Easy:0,Medium:1,Hard:2},m=(i?s.sort((function(e,t){return p[e.difficulty]-p[t.difficulty]})):s).map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),r.createElement("td",null,e.difficulty),r.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&r.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&r.createElement("span",null,"N/A")),l&&r.createElement("td",null,r.createElement(a,{names:e.tags})))}));return r.createElement(r.Fragment,null,r.createElement("h3",null,t),n&&r.createElement("h4",null,"Start Practicing: ",r.createElement("a",{href:n,target:"_blank"},n)),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Problem Name"),r.createElement("th",null,"Difficulty"),r.createElement("th",null,"Solution Link"),l&&r.createElement("th",null,"Topic"))),r.createElement("tbody",null,m)))}},78735:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.names.split(",");return r.createElement("div",{className:"tutorial-author-wrapper"},"This tutorial is written by",t.map((function(e,t){return r.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);