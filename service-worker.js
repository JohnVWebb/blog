if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f2077539.css",revision:"cd1aa59af4439eb61c8bfaa7151da76f"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/39.d61b6147.js",revision:"d3cd9e719b7acc02ebf551ab67990220"},{url:"assets/js/40.c21de967.js",revision:"fa2487a28b70de20b236c9d1ce357a15"},{url:"assets/js/app.c2895556.js",revision:"e21785b4c685515dc5d7498cb70a9b25"},{url:"assets/js/layout-Blog.82dce7ad.js",revision:"4a37940a87e1bf3afe89dc4a06ed8db4"},{url:"assets/js/layout-Layout.2be11ea2.js",revision:"8a417b3ba71d3d56e844f20a7f4a55dd"},{url:"assets/js/layout-NotFound.409c3cda.js",revision:"bed1d2da53d3986ce5c5a8966ef8f6a5"},{url:"assets/js/layout-Slide.fbcce3e0.js",revision:"1f3ec4ce20babc832a87aeb16908ef4d"},{url:"assets/js/page--1f48e18e.37a5d5ca.js",revision:"27744dfbc2b978fb5cf8999ceabd6b50"},{url:"assets/js/page--20a41f24.f94345b3.js",revision:"bbf87586e2e28f137675d1ca6c8b0760"},{url:"assets/js/page--2a5d298a.f6809faf.js",revision:"2dc6496a5b07710c2c938ba065bd5ab9"},{url:"assets/js/page--2aaf2b84.81fbcf1d.js",revision:"3bc69362615633154fc1d97bae074141"},{url:"assets/js/page--2b9e56c2.b23dd69f.js",revision:"b6669e0c97c965456789f52ed66b5790"},{url:"assets/js/page--4c69b3e0.38d424a1.js",revision:"7440da92dd504672a1aa0dfc8f05ca2c"},{url:"assets/js/page--505d12fc.b7b6f6da.js",revision:"353f36decead33c7f29269b897f75049"},{url:"assets/js/page--57b229e2.418f7ade.js",revision:"bbee5e73f87b52e3a2fa845e579e11f4"},{url:"assets/js/page--5c5426e2.1f8ad104.js",revision:"c919a83bc9eeeeb4f9cb2eac3964af44"},{url:"assets/js/page--61bbbe90.5e6bc8b3.js",revision:"2a48693ab874bd89e814a657b0af65cf"},{url:"assets/js/page--681d54a2.00397a33.js",revision:"903f456ab45e3e804e1fe75773936a1e"},{url:"assets/js/page--68aad3e2.07c8ecbe.js",revision:"9eca0c43fd819dcd8fcb5833b1c95947"},{url:"assets/js/page--7024a1db.d4e9ce2e.js",revision:"f0e94d23e047b4eea0a556e32ff03b8a"},{url:"assets/js/page--7fbcad02.3c25c0ff.js",revision:"978fea14e18697ef468c5bf478b83b01"},{url:"assets/js/page--8f591800.3d9cda37.js",revision:"1f79413ede560f7466fe7accee9bf2a8"},{url:"assets/js/page--c78d5c58.6d2cec59.js",revision:"cb29e143da3d001d7fc89278b5623e49"},{url:"assets/js/page--dff2a364.58b63398.js",revision:"60fa3fa4c622f56549f8b36d168f6218"},{url:"assets/js/page--e43235fc.1b204e2e.js",revision:"be5d5a073b2e583254e82237575efda1"},{url:"assets/js/page-AdvancedFront-EndFrameworks--e3bd767c.48b7d945.js",revision:"7832ecdf9641f8c232e27b8c131f8f6c"},{url:"assets/js/page-ApplicationArchitecture,MVCDesignPattern--7376447c.29749880.js",revision:"177b4e13864788092cee99adc73cc9b7"},{url:"assets/js/page-CFundamentals--41c6417c.d41c5191.js",revision:"6d208e5a9f3cb6daa04ae2593ad4b491"},{url:"assets/js/page-DeployingApplications--7fcf42fc.be3dc105.js",revision:"0a20a5e30baed070d26ee3e758ef02f9"},{url:"assets/js/page-FindMoreAboutmehere--0f690267.8af18e06.js",revision:"ce32f67603c8cfcdc795e524218982f3"},{url:"assets/js/page-FoundationsofWebDevelopment--6256aa42.a88da75f.js",revision:"155749288b0eaa52840440f58f4d6dcf"},{url:"assets/js/page-IntrotoJavaScript--d76477fc.58764190.js",revision:"812767c61b805d9b073e2dabed088418"},{url:"assets/js/page-IntrotoServersideconcernswithJavaScript--2a331142.2ce42ca0.js",revision:"897d67355c045f364704eba6c27c793c"},{url:"assets/js/page-UnderStandingAsynchronousCode,andAPI's--0f8810fc.ec2805db.js",revision:"980db65124e7114adc83aa75eeadb580"},{url:"assets/js/page-UnderstandingPersistentRelationalData--5c2a2b02.528ff5b2.js",revision:"797c19d946227643feba34e9ee7e38af"},{url:"assets/js/page-WorkinginaProfessionalEnvironment--1be10f7c.fe8397d9.js",revision:"1c9e2c160b2bc0337ae2d331179d37c3"},{url:"assets/js/vendors~layout-Blog~layout-Layout.60a5b978.js",revision:"667943e234586fa90b70902cb04fc8d4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.022dd1bd.js",revision:"4e78380c045460fc098c93f949d5619c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a6166c07.js",revision:"fbd3678b04a3945e66331259905922af"},{url:"assets/js/vendors~photo-swipe.facbb412.js",revision:"4cde1d898fec52755ee49757707963f1"},{url:"404.html",revision:"7233aa3356d066faf9cdc8e86382f268"},{url:"article/index.html",revision:"3a9a565c837c2244967a17e060d41e30"},{url:"category/index.html",revision:"7ead267894878f0b19fa0e4769c2648e"},{url:"encrypt/index.html",revision:"a4ef9bfaf41fb28350a9367933f3cc87"},{url:"index.html",revision:"9de66f27ee907b6460b63dfa71da4eae"},{url:"reflections/index.html",revision:"0a7ea42d00ea8ee7a70e778b01ab9726"},{url:"reflections/wk1/01-firstdevblog/index.html",revision:"406ebef6397743515ead2de0193bf308"},{url:"reflections/wk1/02-coolsite/index.html",revision:"195694f130a97f2e587ef89e776b0382"},{url:"reflections/wk1/03-Cheatingatdesign/index.html",revision:"3e873dc20836bf4bd8f4e486d8b25f33"},{url:"reflections/wk1/04-wireframing/index.html",revision:"798d7ee8738e8be93b27696867309fa4"},{url:"reflections/wk1/05-weekreflection/index.html",revision:"3e67d583f871ef4bea3924a022800f05"},{url:"reflections/wk1/quiz1/index.html",revision:"cb7b3fb43f63b3ee5eb5d1fa3858b5e4"},{url:"reflections/wk10/quiz10/index.html",revision:"d92a8874fd737ed202b6ca48d9543f87"},{url:"reflections/wk11/placeholder/index.html",revision:"fafe7c1b43daf6af1b18b3f63c05cae6"},{url:"reflections/wk12/placeholder/index.html",revision:"91dfd88f7ae0575c8d786f662e617658"},{url:"reflections/wk2/06-IntroToJavaScript/index.html",revision:"2921e35cb45db63a81dc786d91981d10"},{url:"reflections/wk2/07-JavaScriptFunctions/index.html",revision:"2ad38becb43462bccdfaeaac1da8c794"},{url:"reflections/wk2/08-ChromeDeveloperTools/index.html",revision:"c77be98e6768c89e8a18920fd50b8e23"},{url:"reflections/wk2/09-MistakesIMade/index.html",revision:"fa58edbfe7703d4e539b994300e37ccd"},{url:"reflections/wk2/10-WeekReflection/index.html",revision:"ecd496f40c392fb877b1885bc875c368"},{url:"reflections/wk2/quiz2/index.html",revision:"3f58127754ac05bf19bfffbc400e3a49"},{url:"reflections/wk3/11-ES6modules/index.html",revision:"c24cd58d548b4f2d7a01f99806538bd5"},{url:"reflections/wk3/12-Encapsulation/index.html",revision:"81283462c534e6a72c09a140a8ab4dde"},{url:"reflections/wk3/13-IntrotoJSProxyObjects/index.html",revision:"e71b6e20dc1f6169b7f4a3addfad4636"},{url:"reflections/wk3/14-ObserverPattern/index.html",revision:"d36e85f8da4ba6ae26344c022f6b0c5f"},{url:"reflections/wk3/15-WeekReflection/index.html",revision:"679c2e5d279cd3a3d45aabc2322950a6"},{url:"reflections/wk3/quiz3/index.html",revision:"bb1bf0d5f7d666ed96d5a386fe23c0a2"},{url:"reflections/wk4/quiz4/index.html",revision:"e1456be7e541c054cbe3e840cc314f1f"},{url:"reflections/wk5/quiz5/index.html",revision:"2d3bdb943654ebb7250c18798f6ab164"},{url:"reflections/wk6/quiz6/index.html",revision:"837b81537a560010842b92e8db87b418"},{url:"reflections/wk7/quiz7/index.html",revision:"518a9cb823ed1e22cb3e1dcbb8842af2"},{url:"reflections/wk8/quiz8/index.html",revision:"3fc42e456877c1c50386c1ee29e6b4f8"},{url:"reflections/wk9/quiz9/index.html",revision:"3cc18f9a183569e2b3ca0896596e2774"},{url:"slide/index.html",revision:"eee0bc701219e4dbdf5eedbe3e81d1ab"},{url:"tag/index.html",revision:"7bc0daeb9951559213ba5ff9ee5cf907"},{url:"timeline/index.html",revision:"c1dadc900b278bb73e228081db4e0417"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
