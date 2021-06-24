/// <reference path="/Users/hardanonymous/Project/typescript/test01/node_modules/axios/index.d.ts" />
/// <reference path="/Users/hardanonymous/Project/typescript/test01/node_modules/vue/types/index.d.ts" />
/// <reference path="/Users/hardanonymous/Project/typescript/test01/node_modules/@types/lodash-es/clone.d.ts" />
/// <reference path="/Users/hardanonymous/Project/typescript/test01/node_modules/@types/jquery/index.d.ts" />

console.log($('#app'));

let target = document.querySelector('#app');
console.log(target);

type optionData = {
    message: string,
    list: number[],
}

let data: optionData = {
    message: 'hello world',
    list: [],
}

new Vue({
    el: '#app',
    data,
    async created() {
        let google = await axios.get('https://google.com.tw');
        let a = new Promise<number[]>((resolve, reject) => {
            setTimeout(() => {
                resolve([1, 2, 3]);
            }, 2000);
        });

        data.list = await a;
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