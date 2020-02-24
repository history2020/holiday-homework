//节流
//点击后开启一个定时器事件  只要在规定时间内继续点击就会清空计时器 直到最后一次开启定时器开始执行
let btn = document.querySelector('.btn');
function debounce(fn, wait) {
    let timer; //设置定时器的变量
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    };
}
console.log(btn);
function fn(e) {
    console.log('节流！！！');
}
// thorrtle 执行需要返回一个函数
btn.addEventListener('click', debounce(fn, 2000));


// 防抖
// 常见用户注册时候的手机号码验证和邮箱验证
// 等用户输入完毕后，前端才需要检查格式是否正确，如果不正确，再弹出提示语
var timer = false;
document.getElementById("debounce").onscroll = function () {
    clearTimeout(timer); // 清除未执行的代码，重置回初始化状态

    timer = setTimeout(function () {
        console.log("函数防抖");
    }, 300);
};