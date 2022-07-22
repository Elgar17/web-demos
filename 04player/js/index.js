// 赞
var heart = document.getElementsByClassName("collection")

var audio = document.getElementById("audio")
var playBTN = document.getElementById("play-mu")
var flag = false; // 保存播放状态
var like = true;

// 进度条处理
var jindutiao1 = document.getElementById("jindutiao1")
var jindutiao = document.getElementById("jindutiao")
var startTime = document.getElementsByClassName("start-time")[0]
var endTime = document.getElementsByClassName("end-time")[0]


// 控制进度条和时间
function jindu() {
    //用秒数来显示当前播放进度
    var timeDisplay = Math.floor(audio.currentTime); //获取实时时间
    // 总长的处理
    var totalTime = Math.floor(audio.duration)
    var totalMinute = totalTime / 60;
    var totalMinutes = parseInt(totalMinute)
    if(totalMinutes < 10){
        totalMinutes = "0" + totalMinutes
    }
    // 秒
    var tSecond = totalTime % 60;
    var tSeconds = Math.round(tSecond);
    if (tSeconds < 10) {
        tSeconds = "0" + tSeconds;
    }


    //处理开始时间
    //分钟
    let minute = timeDisplay / 60;
    let minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //秒
    let second = timeDisplay % 60;
    let seconds = Math.round(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // 进度条
    // 更新开始时间
    startTime.innerHTML = `${minutes}:${seconds}`
    endTime.innerHTML = `${totalMinutes}:${tSecond}`
    jindutiao1.style.width = `${ parseInt(jindutiao.offsetWidth * (timeDisplay/totalTime)).toFixed(1)}px`


}
//监听音频播放的实时时间事件
audio.addEventListener("timeupdate", throttle(jindu, 1000));

function start() {
    if (flag) {
        playBTN.className = "play-mu"
        audio.pause()
        flag = false
    } else {
        playBTN.className = "stop-mu"
        audio.play()
        flag = true
    }
}

playBTN.onclick = function () {
    start()
}

heart[0].onclick = function () {
    if (like) {
        heart[0].className += " liked"
        like = false
        console.log(heart[0].className)
    } else {
        heart[0].className = "collection"
        like = true
    }
}





// 节流函数
function throttle(func, delay) {
    var prev = Date.now();
    return function () {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}