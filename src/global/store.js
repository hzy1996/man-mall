import Vue from 'vue'
import Vuex from 'vuex'
import { parse } from 'path';
Vue.use(Vuex)

const store = new Vuex.Store({
    //定义状态
    state: {
        updateGoods:[],
        num: 0,
        x: 0,
        y: 0,
        i: 0,
        show: false,
        Arr: [],
        pageArr: [],
        likeShop:[
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 1, url: ["static/shop/Jeanne1-1.jpg", "static/shop/Jeanne1-2.jpg",  "static/shop/Jeanne1-3.jpg",  "static/shop/Jeanne1-3.jpg",  "static/shop/Jeanne1-4.jpg", "static/shop/Jeanne1-5.jpg"], shopName: "Fate/Grand Order Avenger/贞德・达尔克〔alter〕黑贞德【限定版】",Shorthand:"FGO 黑贞德", nowPrice: "1180.00", oldPrice: 1180.00, type: "手办", proDate: "2017-11-30", producer: "Aniplex", size: "全高约350mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
        ],
        newShop: [
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 1, url: ["static/shop/Jeanne1-1.jpg", "static/shop/Jeanne1-2.jpg",  "static/shop/Jeanne1-3.jpg",  "static/shop/Jeanne1-3.jpg",  "static/shop/Jeanne1-4.jpg", "static/shop/Jeanne1-5.jpg"], shopName: "Fate/Grand Order Avenger/贞德・达尔克〔alter〕黑贞德【限定版】",Shorthand:"FGO 黑贞德", nowPrice: "1180.00", oldPrice: 1180.00, type: "手办", proDate: "2017-11-30", producer: "Aniplex", size: "全高约350mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 0, url: ["static/shop/Miku0.jpg",  "static/shop/Miku1.jpg", "static/shop/Miku1-1.jpg",  "static/shop/Miku1-2.jpg",  "static/shop/Miku1-3.jpg",  "static/shop/Miku1-4.jpg" ], shopName: "初音未来 中秋明月Ver1初音未来 中秋明月Ver1初音未来 中秋明月Ver1",Shorthand:"中秋明月Ver1初音未来", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
        ],
        hotShop: [
            { num: 0, id: 12, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 13, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 14, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 15, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 16, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 17, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 18, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 19, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 20, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 21, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 22, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 23, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },

        ],
        discountShop: [
            { num: 0, id: 24, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 25, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 26, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 27, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 28, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 29, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 30, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 31, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 32, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 33, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 34, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },
            { num: 0, id: 35, url: "static/shop/Miku0.jpg", shopName: "初音未来 中秋明月Ver", nowPrice: "22.20", oldPrice: 22.20, type: "手办", proDate: "2017-11-30", producer: "Goodsmile", size: "全高约220mm" },

        ],
        ppArr: []
    },
    mutations: {
        shopPage(_v, _obj) {
            sessionStorage.n++
            // this.state.num = sessionStorage.n
            _obj.nn = sessionStorage.n
            localStorage.arr = JSON.stringify(_obj)
            console.log(localStorage.arr)
            this.state.pageArr = JSON.parse(localStorage.arr)
            console.log(this.state.pageArr)
            // this.state.Arr.push(_obj)
            // let arr = JSON.stringify(this.state.Arr)
            // localStorage.Arr= arr;  
        },
        emptyCart() {
            window.localStorage.arr = "[{}]"
        }
    },


})
export default store