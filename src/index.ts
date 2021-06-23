import Vue from 'vue';
import {clone} from 'lodash-es';

console.log(clone({}));

let target = document.querySelector('#app');
console.log(target);

const vue = new Vue({
    el: target!,
    data: () => ({
        message: 'hello world',
    }),
    created() {
        console.log(this, vue);
        console.log(this.message);
    },
    mounted() {
        console.log(this, vue);
    },
});

console.log(vue);