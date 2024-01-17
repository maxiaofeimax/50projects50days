const progress = document.getElementById('progress')  // 获取表示进度条的DOM元素
const prev = document.getElementById('prev') // 获取“上一步”按钮的DOM元素
const next = document.getElementById('next') // 获取“下一步”按钮的DOM元素
const circles = document.querySelectorAll('.circle') // 获取所有步骤圆圈的DOM元素的集合

let currentActive = 1 // 表示当前激活的步骤编号

/*
  当点击“下一步”按钮时，currentActive变量递增
  如果currentActive的值超过了圆圈的数量，它会被设置为圆圈的总数
  调用update函数来更新UI
*/
next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

/*
  当点击“上一步”按钮时，currentActive变量递减
  如果currentActive的值小于1，它会被设置为1
  调用update函数来更新UI
*/
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

/*
  遍历所有圆圈，根据currentActive的值来添加或移除active类。如果圆圈的索引小于currentActive，则添加active类，否则移除该类;
  计算当前激活的圆圈所占的比例，并将这个值设置为进度条的宽度;
  根据currentActive的值禁用或启用“上一步”和“下一步”按钮。如果currentActive是1，禁用“上一步”按钮；如果currentActive等于圆圈总数，禁用“下一步”按钮；否则，两个按钮都启用
*/
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
