/// <reference path="../types/axios.d.ts" /> 
/// <reference path="../node_modules/vue/types/index.d.ts" />
/// <reference path="../node_modules/@types/lodash/index.d.ts" />
/// <reference path="../node_modules/@types/jquery/index.d.ts" />


// JQUERY
$('#app').append('<h1> This is append from jquery.</h1>');

// LODASH
let cloneDataTmp = {
    a: 1,
};
let cloneData = _.clone(cloneDataTmp);
console.log(cloneData);

// VUE
let target = document.querySelector('#app');
console.log(target);

type VueData = {
    message: string,
    list: number[],
}

type ResponseData = {
    data: number[]
}

let data: VueData = {
    message: 'hello world',
    list: [],
}

new Vue({
    el: '#app',
    data,
    async created() {
        // AXIOS無法直接使用官方提供的定義檔，所以自己拷貝了一份
        // 目前只有發現將export的部分刪除就可以了，還不清楚為什麼
        let response = await axios.get<ResponseData>('/resource/test.json');
        console.log(response.data.data);

        // 該部分的data原先的寫法會是直接使用this，但typescript的關係無法直接這樣子使用
        // 要從外部將資料匯入才可以做使用！
        data.list = response.data.data;
    },
    mounted() {
        console.log(data.message);
    },
    methods: {
        changeMessage() {
            data.message = 'abc';
        },
        addListEle() {
            data.list.push(1);
        }
    }
});
