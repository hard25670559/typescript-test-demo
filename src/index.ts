import Vue from 'vue';
import {clone} from 'lodash-es';

console.log(clone({}));

let target = document.querySelector('#app');
console.log(target);

const vue = new Vue({
    data: () => ({
        message: 'hello world',
    }),
    created() {
        console.log(this);
        console.log(this.message);
    }
})
.$mount('#app');

// console.log(vue)