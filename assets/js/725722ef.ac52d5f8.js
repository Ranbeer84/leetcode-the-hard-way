"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4877],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/kth-largest-element-in-a-stream/"},s="0703 - Kth Largest Element in a Stream (Easy)",p={unversionedId:"0700-0799/kth-largest-element-in-a-stream-easy",id:"0700-0799/kth-largest-element-in-a-stream-easy",title:"0703 - Kth Largest Element in a Stream (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/kth-largest-element-in-a-stream/",source:"@site/solutions/0700-0799/0703-kth-largest-element-in-a-stream-easy.md",sourceDirName:"0700-0799",slug:"/0700-0799/kth-largest-element-in-a-stream-easy",permalink:"/leetcode-the-hard-way/solutions/0700-0799/kth-largest-element-in-a-stream-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0700-0799/0703-kth-largest-element-in-a-stream-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1653224191,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:703,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/kth-largest-element-in-a-stream/"},sidebar:"tutorialSidebar",previous:{title:"0700 - 0799",permalink:"/leetcode-the-hard-way/solutions/category/0700---0799"},next:{title:"0704 - Binary Search (Easy)",permalink:"/leetcode-the-hard-way/solutions/0700-0799/binary-search-easy"}},u={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Priority Queue",id:"approach-1-priority-queue",level:2}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0703---kth-largest-element-in-a-stream-easy"},"0703 - Kth Largest Element in a Stream (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Design a class to find the ",(0,i.kt)("inlineCode",{parentName:"p"},"kth")," largest element in a stream. Note that it is the ",(0,i.kt)("inlineCode",{parentName:"p"},"kth")," largest element in the sorted order, not the ",(0,i.kt)("inlineCode",{parentName:"p"},"kth")," distinct element."),(0,i.kt)("p",null,"Implement ",(0,i.kt)("inlineCode",{parentName:"p"},"KthLargest")," class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KthLargest(int k, int[] nums)")," Initializes the object with the integer ",(0,i.kt)("inlineCode",{parentName:"li"},"k")," and the stream of integers ",(0,i.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int add(int val)")," Appends the integer ",(0,i.kt)("inlineCode",{parentName:"li"},"val")," to the stream and returns the element representing the ",(0,i.kt)("inlineCode",{parentName:"li"},"kth")," largest element in the stream."," ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input\n["KthLargest", "add", "add", "add", "add", "add"]\n[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]\nOutput\n[null, 4, 5, 5, 8, 8]\n\nExplanation\nKthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);\nkthLargest.add(3);   // return 4\nkthLargest.add(5);   // return 5\nkthLargest.add(10);  // return 5\nkthLargest.add(9);   // return 8\nkthLargest.add(4);   // return 8 \n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= k <= 10^4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= nums.length <= 10^4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-10^4 <= nums[i] <= 10^4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-10^4 <= val <= 10^4")),(0,i.kt)("li",{parentName:"ul"},"At most ",(0,i.kt)("inlineCode",{parentName:"li"},"10^4")," calls will be made to ",(0,i.kt)("inlineCode",{parentName:"li"},"add"),"."),(0,i.kt)("li",{parentName:"ul"},"It is guaranteed that there will be at least ",(0,i.kt)("inlineCode",{parentName:"li"},"k")," elements in the array when you search for the ",(0,i.kt)("inlineCode",{parentName:"li"},"kth")," element.")),(0,i.kt)("h2",{id:"approach-1-priority-queue"},"Approach 1: Priority Queue"),(0,i.kt)("p",null,"We can use priority queue to handle the sort order and only maintain at most k element. Return to the top, which is the k-th element in a stream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class KthLargest {\npublic:\n    KthLargest(int k, vector<int>& nums) {\n        // add val to priority queue\n        for (auto x : nums) pq.push(x);\n        // here the queue is sorted\n        // only keep at most k elements\n        // pop out first pq.size() - k elements\n        while (pq.size() > k) pq.pop();\n        K = k;\n    }\n    \n    int add(int val) {\n        // add val to priority queue\n        pq.push(val);\n        // here the queue is sorted\n        // only keep at most k elements\n        // pop out first pq.size() - k elements\n        while (pq.size() > K) pq.pop();\n        return pq.top();\n    }\nprivate:\n    int K;\n    // smaller first\n    priority_queue<int, vector<int>, greater<int>> pq;\n};\n\n/**\n * Your KthLargest object will be instantiated and called as such:\n * KthLargest* obj = new KthLargest(k, nums);\n * int param_1 = obj->add(val);\n */\n")))}c.isMDXComponent=!0}}]);