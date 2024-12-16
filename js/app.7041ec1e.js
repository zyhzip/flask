(function(){"use strict";var e={113:function(e,r,t){var n=t(5130),a=t(6768);function o(e,r,t,n,o,l){const i=(0,a.g2)("router-link"),c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",null,[(0,a.bF)(i,{to:"/"},{default:(0,a.k6)((()=>r[0]||(r[0]=[(0,a.eW)("首页")]))),_:1}),r[3]||(r[3]=(0,a.eW)(" | ")),(0,a.bF)(i,{to:"/game"},{default:(0,a.k6)((()=>r[1]||(r[1]=[(0,a.eW)("游戏")]))),_:1}),r[4]||(r[4]=(0,a.eW)(" | ")),(0,a.bF)(i,{to:"/profile"},{default:(0,a.k6)((()=>r[2]||(r[2]=[(0,a.eW)("玩家信息")]))),_:1})]),(0,a.bF)(c)],64)}var l={name:"App"},i=t(1241);const c=(0,i.A)(l,[["render",o]]);var s=c,u=t(1387);const d={class:"home"},m={class:"content"};function p(e,r,t,n,o,l){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",d,[r[2]||(r[2]=(0,a.Lk)("h1",null,"欢迎来到弹球游戏",-1)),(0,a.Lk)("div",m,[r[1]||(r[1]=(0,a.Lk)("p",null,"这是一个使用 Vue.js 和 Flask 开发的弹球游戏",-1)),(0,a.bF)(i,{to:"/game",class:"start-btn"},{default:(0,a.k6)((()=>r[0]||(r[0]=[(0,a.eW)("开始游戏")]))),_:1})])])}var y={name:"HomePage"};const f=(0,i.A)(y,[["render",p],["__scopeId","data-v-cc86f1a2"]]);var h=f;const v={class:"game-page"},g={class:"player-name-input"};function P(e,r,t,o,l,i){return(0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("div",g,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>l.playerName=e),onChange:r[1]||(r[1]=(...e)=>i.updatePlayerName&&i.updatePlayerName(...e)),placeholder:"输入玩家名称"},null,544),[[n.Jo,l.playerName]])]),r[2]||(r[2]=(0,a.Lk)("div",{id:"game1",class:"game-div"},null,-1))])}t(8992),t(3949);var k=t(144);const w=(0,k.Kh)({playerName:"",setPlayerName(e){this.playerName=e}});var b={name:"GamePage",data(){return{playerName:w.playerName||""}},methods:{updatePlayerName(){this.playerName.trim()&&(w.setPlayerName(this.playerName),window.currentPlayerName=this.playerName)}},mounted(){window.currentPlayerName=this.playerName;const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/phaser@2.4.2/build/phaser.min.js",e.onload=()=>{const e=document.createElement("script");e.src="./Phasergame.js",document.body.appendChild(e)},document.body.appendChild(e)},beforeUnmount(){window.game&&window.game.destroy&&window.game.destroy();const e=document.querySelectorAll("script");e.forEach((e=>{(e.src.includes("phaser")||e.src.includes("Phasergame"))&&e.remove()})),delete window.currentPlayerName}};const N=(0,i.A)(b,[["render",P],["__scopeId","data-v-47c64fda"]]);var _=N,E=t(4232);const C={class:"profile-page"},L={class:"user-info"},j={key:0,class:"game-history"},H={key:1,class:"no-records"};function O(e,r,t,o,l,i){return(0,a.uX)(),(0,a.CE)("div",C,[r[3]||(r[3]=(0,a.Lk)("h2",null,"玩家信息",-1)),(0,a.Lk)("div",L,[(0,a.Lk)("p",null,"玩家名称: "+(0,E.v_)(l.currentPlayer),1),(0,a.Lk)("p",null,"玩家id:"+(0,E.v_)(l.currentPlayerId),1),(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>l.currentPlayer=e),onChange:r[1]||(r[1]=(...e)=>i.changePlayer&&i.changePlayer(...e)),placeholder:"输入玩家名称"},null,544),[[n.Jo,l.currentPlayer]])]),l.gameHistory.length?((0,a.uX)(),(0,a.CE)("div",j,[r[2]||(r[2]=(0,a.Lk)("h3",null,"游戏历史记录",-1)),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.gameHistory,((e,r)=>((0,a.uX)(),(0,a.CE)("li",{key:e.id}," 第"+(0,E.v_)(r+1)+"次游戏 | "+(0,E.v_)(e.playDate)+" | 分数: "+(0,E.v_)(e.score)+" | 结果: "+(0,E.v_)("win"===e.result?"胜利":"失败"),1)))),128))])])):((0,a.uX)(),(0,a.CE)("div",H," 暂无游戏记录 "))])}var F={name:"ProfilePage",data(){return{currentPlayer:w.playerName||"zyh",currentPlayerId:"无记录",gameHistory:[]}},methods:{async fetchGameHistory(){try{const e=await fetch(`/api/player/${this.currentPlayer}/history`);if(!e.ok)throw new Error("获取游戏历史失败");this.gameHistory=await e.json(),this.currentPlayerId=this.gameHistory[0].id,this.gameHistory.sort(((e,r)=>new Date(r.playDate)-new Date(e.playDate)))}catch(e){console.error("获取数据失败:",e),this.currentPlayerId="无记录"}},async changePlayer(){this.currentPlayer.trim()&&(w.setPlayerName(this.currentPlayer),await this.fetchGameHistory())}},async created(){await this.fetchGameHistory()}};const I=(0,i.A)(F,[["render",O],["__scopeId","data-v-5713087e"]]);var X=I;const x=[{path:"/",name:"Home",component:h},{path:"/game",name:"Game",component:_},{path:"/profile",name:"Profile",component:X}],A=(0,u.aE)({history:(0,u.Bt)("/flask/"),routes:x});var W=A;const D=(0,n.Ef)(s);D.use(W),D.mount("#app")}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,o){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||l>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=a();void 0!==s&&(r=s)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={524:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,o,l=n[0],i=n[1],c=n[2],s=0;if(l.some((function(r){return 0!==e[r]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(c)var u=c(t)}for(r&&r(n);s<l.length;s++)o=l[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(113)}));n=t.O(n)})();
//# sourceMappingURL=app.7041ec1e.js.map