if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const b=e=>d(e,s),n={module:{uri:s},exports:a,require:b};i[s]=Promise.all(r.map((e=>n[e]||b(e)))).then((e=>(c(...e),a)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2020/07/20/2020-07-20-dockerfile/index.html",revision:"4b29e46be4607fb5008c9162b83aa1b0"},{url:"2021/08/17/2021-08-17-github-to-gitee/index.html",revision:"6eb43f2d8a6ee0fd0094799032fed06a"},{url:"2021/11/08/2021-11-08-redis-acl/index.html",revision:"b11df6941ccb3b6c5b923e65436737e4"},{url:"2021/12/23/2021-12-23-k8s-gitlabci-layer/index.html",revision:"ebe85d69e9a4633deded6179b766ad88"},{url:"2022/02/06/2022-02-06-githubactions-pull-images/index.html",revision:"b0b1e7d4a0dd4221d4e7d77ca47d084e"},{url:"404.html",revision:"e10b33d8411c16ed28b1c103abdcb380"},{url:"about/index.html",revision:"f731107696f56808018c2f3604288588"},{url:"archives/2020/07/index.html",revision:"a0e89a541f00fdd43e6cd8f36d3c2897"},{url:"archives/2020/index.html",revision:"9f46506006816726ad97dd8d1eb6cbc9"},{url:"archives/2021/08/index.html",revision:"231af392396369fa8747cc42688db1f7"},{url:"archives/2021/11/index.html",revision:"fcef23c8f363fb43f1aaeb1e9d175b94"},{url:"archives/2021/12/index.html",revision:"7f651987d8fb49b17ef91d2e532c59d1"},{url:"archives/2021/index.html",revision:"d75f4dc560a96e5fb913872b68be5821"},{url:"archives/2022/02/index.html",revision:"e32c09443535a7804020d8c116769bf1"},{url:"archives/2022/index.html",revision:"015d44cc4ba1bdd56b2bdcd63990a0a8"},{url:"archives/index.html",revision:"5f43b06a8c2e07b91b4233352f7d5557"},{url:"categories/CI-CD/index.html",revision:"718bad20586521af5274870e04e1cb44"},{url:"categories/Github/index.html",revision:"7d48560bb15e5e889f6dba59bd8d5ce2"},{url:"categories/index.html",revision:"fa398488343d2170cce583a8dd9f760b"},{url:"categories/Redis/index.html",revision:"b0da5c1545caac7de0757a6f55745d00"},{url:"categories/容器/index.html",revision:"156def476378eae0c8d8124b2970b958"},{url:"css/color@v1.css",revision:"9d37f9172e4ad2fd701e173cc952c583"},{url:"css/custom@v1.css",revision:"f553dcbf3f6c27bd8d98851edfc65682"},{url:"css/fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"css/fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"css/fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"css/fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"css/fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"css/images/banner.jpg",revision:"0394d7ba5b310b5037d2a139bef63fa4"},{url:"css/index.css",revision:"023212624676c9172532988ed87431ee"},{url:"css/style.css",revision:"5c470460c3777a634bb2b0dd57553491"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fancybox/jquery.fancybox.min.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"fancybox/jquery.fancybox.min.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/background.png",revision:"6cda26a61cdb305df784756ed2e90b56"},{url:"img/background/backend.jpg",revision:"8b844eb1fa9bf826509aab2dc7d100d3"},{url:"img/background/header-background.png",revision:"221475716471603bc99da7fb8cfb55ea"},{url:"img/background/header-background.webp",revision:"69bb1f672091c351d2628ac176f14752"},{url:"img/darkmode.webp",revision:"dc204dd94eb028ef410e16db0f9b8db6"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/load.gif",revision:"57e8fd3528b8b4699b6cf415b01153ef"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/loading2.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/wechat-friend.jpg",revision:"025ec2114389a96c88e324b33b1b123e"},{url:"index.html",revision:"122498bd11c6d93e489b5ccf6cfdf685"},{url:"js/jquery-3.4.1.min.js",revision:"220afd743d9e9643852e31a135a9f3ae"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/script.js",revision:"899039a2fd4a5c7a164d7ae5bfc78073"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/twopeople.js",revision:"2d56efec4a1fa49ee3f6d64d1eda2267"},{url:"js/twopeople1.js",revision:"b502913b917b200a02b600a79b504c8e"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/zdog.dist.js",revision:"ae88c9b5e2c0b05333be89330d891263"},{url:"link/index.html",revision:"186419c5fe556c6137d9be967c54f261"},{url:"tags/CI-CD/index.html",revision:"2ef7020fe67edbca41b6b6ecd377f714"},{url:"tags/Docker/index.html",revision:"c1c2bbcc535bf66d555a5f5cf6aa51f3"},{url:"tags/Dockerfile/index.html",revision:"0b8c197dd0d1584053a78c538262d0ec"},{url:"tags/Gitee/index.html",revision:"6f1767b094acd2ce94b612916f24011e"},{url:"tags/Github/index.html",revision:"a50f15d585738a6a767ad9f0b8a5f1b7"},{url:"tags/index.html",revision:"ebcf1c8cb3be7ae6a357efb5ab3f39de"},{url:"tags/Kubernetes/index.html",revision:"feb2ebc57aef34d45d0c08102b6a711d"},{url:"tags/Redis/index.html",revision:"3519a3fd71d0be38937c163ae75090b6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
