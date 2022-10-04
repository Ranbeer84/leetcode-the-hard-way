"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[44022],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||c[d]||s;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28920:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return N},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],o={description:"Author: @vigneshshiv | https://leetcode.com/problems/reverse-linked-list/"},i="0206 - Reverse Linked List (Easy)",p={unversionedId:"0200-0299/reverse-linked-list-easy",id:"0200-0299/reverse-linked-list-easy",title:"0206 - Reverse Linked List (Easy)",description:"Author: @vigneshshiv | https://leetcode.com/problems/reverse-linked-list/",source:"@site/solutions/0200-0299/0206-reverse-linked-list-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/reverse-linked-list-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/reverse-linked-list-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0206-reverse-linked-list-easy.md",tags:[],version:"current",sidebarPosition:206,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/reverse-linked-list/"},sidebar:"tutorialSidebar",previous:{title:"0205 - Isomorphic Strings (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/isomorphic-strings-easy"},next:{title:"0207 - Course Schedule (Medium)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/course-schedule-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterative",id:"approach-1-iterative",level:2},{value:"Approach 2: Recursive",id:"approach-2-recursive",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},d=u("Tabs"),h=u("TabItem"),k=u("SolutionAuthor"),v={toc:c};function N(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0206---reverse-linked-list-easy"},"0206 - Reverse Linked List (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-linked-list/"},"https://leetcode.com/problems/reverse-linked-list/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given the ",(0,s.kt)("inlineCode",{parentName:"p"},"head")," of a singly linked list, reverse the list, and return the ",(0,s.kt)("em",{parentName:"p"},"reversed list"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg",alt:"Alt text"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg",alt:"Alt text"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: head = [1,2]\nOutput: [2,1]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: head = []\nOutput: []\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of nodes in the list is the range ",(0,s.kt)("inlineCode",{parentName:"li"},"[0, 5000]"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-5000 <= Node.val <= 5000"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Follow up:")," A linked list can be reversed either iteratively or recursively. Could you implement both?"),(0,s.kt)("h2",{id:"approach-1-iterative"},"Approach 1: Iterative"),(0,s.kt)("p",null,"The idea is to have 2 pointers ",(0,s.kt)("strong",{parentName:"p"},"prev")," and ",(0,s.kt)("strong",{parentName:"p"},"next")," while traversing. "),(0,s.kt)("p",null,"Keep the next pointer reference in temp node, and change the ",(0,s.kt)("strong",{parentName:"p"},"current node next ptr")," to ",(0,s.kt)("strong",{parentName:"p"},"prev node"),". Keep continuing the process till last node and return last node as a head reference. "),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode reverseList(ListNode head) {\n        if (head == null) return null;\n        ListNode prev = null;\n        ListNode current = head;\n        //\n        while (current != null) {\n            // Before changing current ptr next node, keep reference copy\n            ListNode next = current.next;\n            // Change the current node next ptr to prev node\n            current.next = prev;\n            // For the next iteration, keep current as previous node\n            prev = current;\n            current = next;\n        }\n        // Return last node as a Head reference\n        return prev;\n    }\n}\n")))),(0,s.kt)("h2",{id:"approach-2-recursive"},"Approach 2: Recursive"),(0,s.kt)("p",null,"In the Recursive call, we never know when the list will end, so keep changing the current node next ptr to previous node and traverse through the list. At last, you have set all your pointer to previous node, then return the ",(0,s.kt)("strong",{parentName:"p"},"Tail")," (prev) as ",(0,s.kt)("strong",{parentName:"p"},"Head")),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - # of nodes in the list"),(0,s.kt)("p",null,"Space complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode reverseList(ListNode head) {\n        if (head == null) return null;\n        return reverseList(head, null);\n    }\n    \n    public ListNode reverseList(ListNode head, ListNode prev) {\n        if (head == null) return prev;\n        // Reference copy of next node\n        ListNode next = head.next;\n        // Set current node next ptr to previous node\n        head.next = prev;\n        // Pass next node as current, and current node as prev to the next recursive call\n        // e.g. 1 -> 2 -> 3 \n        // Current node is 1, and next node is 2\n        // For the next recursive call, passing current node 2 and and previous as 1, so that 1 <- 2\n        return reverseList(next, head);\n    }\n}\n")))))}N.isMDXComponent=!0}}]);