"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4145],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36392:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/permutations/"},u="0046 - Permutations (Medium)",c={unversionedId:"0000-0099/permutations-medium",id:"0000-0099/permutations-medium",title:"0046 - Permutations (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/permutations/",source:"@site/solutions/0000-0099/0046-permutations-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/permutations-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/permutations-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0000-0099/0046-permutations-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:46,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/permutations/"},sidebar:"tutorialSidebar",previous:{title:"0040 - Combination Sum II (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/combination-sum-ii-medium"},next:{title:"0050 - Pow(x, n) (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/pow-x-n-medium"}},l={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: STL",id:"approach-1-stl",level:2},{value:"Approach 2: Backtracking",id:"approach-2-backtracking",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0046---permutations-medium"},"0046 - Permutations (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," of distinct integers, return ",(0,o.kt)("em",{parentName:"p"},"all the possible permutations"),". You can return the answer in ",(0,o.kt)("strong",{parentName:"p"},"any order"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3]\nOutput: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [0,1]\nOutput: [[0,1],[1,0]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1]\nOutput: [[1]] \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10 <= nums[i] <= 10")),(0,o.kt)("li",{parentName:"ul"},"All the integers of ",(0,o.kt)("inlineCode",{parentName:"li"},"nums")," are ",(0,o.kt)("strong",{parentName:"li"},"unique"),".")),(0,o.kt)("h2",{id:"approach-1-stl"},"Approach 1: STL"),(0,o.kt)("p",null,"Use C++ STL ",(0,o.kt)("inlineCode",{parentName:"p"},"next_permutation")," to generate all possible permutations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        vector<vector<int>> ans;\n        sort(nums.begin(), nums.end());\n        do {\n            ans.push_back(nums);\n        } while(next_permutation(nums.begin(), nums.end()));\n        return ans;\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-2-backtracking"},"Approach 2: Backtracking"),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/backtracking"},"Backtracking")," section for the detailed explanation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void backtrack(vector<int>& nums, vector<vector<int>>& ans, vector<int>& tmp) {\n        if ((int) tmp.size() == (int) nums.size()) {\n            ans.push_back(tmp);\n            return;\n        }\n        for (auto x : nums) {\n            if (find(tmp.begin(), tmp.end(), x) != tmp.end()) continue;\n            tmp.push_back(x);\n            backtrack(nums, ans, tmp);\n            tmp.pop_back();   \n        }\n    }\n    \n    vector<vector<int>> permute(vector<int>& nums) {\n        // sort(nums.begin(), nums.end());\n        vector<vector<int>> ans;\n        vector<int> tmp;\n        backtrack(nums, ans, tmp);\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);