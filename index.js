// 在 HTML 中创建一个容器元素
const container = document.createElement('div');
container.style.position = 'relative';
container.style.width = '100%';
container.style.height = '400px'; // 调整高度以适应你的需要
document.body.appendChild(container);

// 创建蝴蝶的函数
function createButterfly() {
    // 创建蝴蝶元素
    const butterfly = document.createElement('div');
    butterfly.innerHTML = '🦋'; // 或者使用图片替代
    butterfly.style.position = 'absolute';
    butterfly.style.fontSize = '24px'; // 或者调整图片大小
    butterfly.style.left = '0';
    butterfly.style.top = Math.random() * (container.clientHeight - 50) + 'px';
    container.appendChild(butterfly);

    // 添加蝴蝶飞动的动画
    const animationDuration = Math.random() * 5 + 5; // 飞行动画的持续时间
    const animationDelay = Math.random() * 5; // 延迟时间
    butterfly.style.animation = `butterfly-fly ${animationDuration}s linear ${animationDelay}s infinite`;

    // 飞行动画结束后删除蝴蝶元素
    setTimeout(() => {
        container.removeChild(butterfly);
    }, (animationDuration + animationDelay) * 1000);
}

// 创建多个蝴蝶
const numberOfButterflies = 5; // 可根据需要调整蝴蝶数量
for (let i = 0; i < numberOfButterflies; i++) {
    createButterfly();
}
