"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2644],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},81506:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/longest-palindromic-substring/",tags:["String","Dynamic Programming"]},s="0005 - Longest Palindromic Substring (Medium)",c={unversionedId:"0000-0099/longest-palindromic-substring-medium",id:"0000-0099/longest-palindromic-substring-medium",title:"0005 - Longest Palindromic Substring (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/longest-palindromic-substring/",source:"@site/solutions/0000-0099/0005-longest-palindromic-substring-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/longest-palindromic-substring-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-palindromic-substring-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0000-0099/0005-longest-palindromic-substring-medium.md",tags:[{label:"String",permalink:"/leetcode-the-hard-way/solutions/tags/string"},{label:"Dynamic Programming",permalink:"/leetcode-the-hard-way/solutions/tags/dynamic-programming"}],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:5,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/longest-palindromic-substring/",tags:["String","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0003 - Longest Substring Without Repeating Characters (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-substring-without-repeating-characters-medium"},next:{title:"0009 - Palindrome Number (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/palindrome-number-easy"}},u={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Manacher&#39;s Algorithm",id:"approach-1-manachers-algorithm",level:2},{value:"C++",id:"c",level:3}],p={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0005---longest-palindromic-substring-medium"},"0005 - Longest Palindromic Substring (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a string ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),", return ",(0,a.kt)("em",{parentName:"p"},"the longest palindromic substring")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "babad"\nOutput: "bab"\nExplanation: "aba" is also a valid answer.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "cbbd"\nOutput: "bb"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," consist of only digits and English letters.")),(0,a.kt)("h2",{id:"approach-1-manachers-algorithm"},"Approach 1: Manacher's Algorithm"),(0,a.kt)("p",null,"The most efficient solution is using Manacher's Algorithm to solve it in O(n). It is faster than other solutions because it exploits when a palindrome happens inside another palindrome."," "),(0,a.kt)("h3",{id:"c"},"C++"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string manacher(string s) {\n      int n = (int) s.size();\n      // d1[i]: the number of palindromes accordingly with odd lengths with centers in the position i.\n      // d2[i]: the number of palindromes accordingly with even lengths with centers in the position i. \n      vector<int> d1(n), d2(n);\n      int l1 = 0, r1 = -1, l2 = 0, r2 = -1, mx_len = 0, start = 0;\n      for (int i = 0; i < n; i++) {\n          // ----------------------\n          // calculate d1[i]\n          // ----------------------\n          int k = (i > r1) ? 1 : min(d1[l1 + r1 - i], r1 - i + 1);\n          while (0 <= i - k && i + k < n && s[i - k] == s[i + k]) k++;\n          d1[i] = k--;\n          if (i + k > r1) l1 = i - k, r1 = i + k;\n          if(d1[i] * 2 > mx_len) start = i - k, mx_len = d1[i] * 2 - 1;\n          // ----------------------\n          // calculate d2[i] \n          // ----------------------\n          k = (i > r2) ? 0 : min(d2[l2 + r2 - i + 1], r2 - i + 1);\n          while (0 <= i - k - 1 && i + k < n && s[i - k - 1] == s[i + k]) k++;\n          d2[i] = k--;\n          if (i + k > r2) l2 = i - k - 1, r2 = i + k;\n          if(d2[i] * 2 > mx_len) start = i - k - 1, mx_len = d2[i] * 2;\n      }\n      // return the longest palindrome\n      return s.substr(start, mx_len);\n    }\n    \n    string longestPalindrome(string s) {\n        // Using Manacher's algorithm \n        return manacher(s);\n    }\n};\n\n")))}d.isMDXComponent=!0}}]);