"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[735],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,h=l["".concat(u,".").concat(d)]||l[d]||s[d]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},87829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/"},u="2260 - Minimum Consecutive Cards to Pick Up (Medium)",p={unversionedId:"2200-2299/minimum-consecutive-cards-to-pick-up-medium",id:"2200-2299/minimum-consecutive-cards-to-pick-up-medium",title:"2260 - Minimum Consecutive Cards to Pick Up (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/",source:"@site/solutions/2200-2299/2260-minimum-consecutive-cards-to-pick-up-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/minimum-consecutive-cards-to-pick-up-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-consecutive-cards-to-pick-up-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2260-minimum-consecutive-cards-to-pick-up-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:2260,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/"},sidebar:"tutorialSidebar",previous:{title:"2259 - Remove Digit From Number to Maximize Result (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/remove-digit-from-number-to-maximize-result-easy"},next:{title:"2261 - K Divisible Elements Subarrays (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/k-divisible-elements-subarrays-medium"}},m={},s=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],l={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2260---minimum-consecutive-cards-to-pick-up-medium"},"2260 - Minimum Consecutive Cards to Pick Up (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"cards")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"cards[i]")," represents the ",(0,i.kt)("strong",{parentName:"p"},"value")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ith")," card. A pair of cards are ",(0,i.kt)("strong",{parentName:"p"},"matching")," if the cards have the ",(0,i.kt)("strong",{parentName:"p"},"same")," value."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"minimum")," number of ",(0,i.kt)("strong",{parentName:"em"},"consecutive")," cards you have to pick up to have a pair of ",(0,i.kt)("strong",{parentName:"em"},"matching")," cards among the picked cards.")," If it is impossible to have matching cards, return ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: cards = [3,4,2,3,4,7]\nOutput: 4\nExplanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: cards = [1,0,5,3]\nOutput: -1\nExplanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= cards.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= cards[i] <= 10^6"))),(0,i.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,i.kt)("p",null,"Store the index for each number, check each element with size > 1 and find out the minimum gap between them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minimumCardPickup(vector<int>& cards) {\n        int n = cards.size(), ans = INT_MAX;\n        unordered_map<int, vector<int>> m;\n        // store the indices for each number\n        for (int i = 0; i < n; i++) m[cards[i]].push_back(i);\n        for (auto& x : m) {\n            // a pair needs to have at least 2 elements with same value\n            for (int i = 1; i < x.second.size(); i++) {\n                // calculate the min gap\n                ans = min(ans, x.second[i] - x.second[i - 1] + 1);\n            }\n        }\n        return ans == INT_MAX ? -1 : ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);