// 加入游戏元素界面
var joinGame = document.getElementById('joinGame')

//进入房间元素界面
var enterRoom = document.getElementById('enterRoom')
//倒计时秒数
var enterRoomCount = document.getElementById('countImg')
var countImg1 = document.getElementById('countImg1')
var countImg2 = document.getElementById('countImg2')
//倒计时图片
var countImgs = ['./img/2-进入房间/0.png',
    './img/2-进入房间/1.png', './img/2-进入房间/2.png',
    './img/2-进入房间/3.png', './img/2-进入房间/4.png',
    './img/2-进入房间/5.png', './img/2-进入房间/6.png',
    './img/2-进入房间/7.png', './img/2-进入房间/8.png',
    './img/2-进入房间/9.png',]
var locationImgs = ['./img/2-进入房间/0.png',
    './img/2-进入房间/1.png', './img/2-进入房间/2.png',
    './img/2-进入房间/3.png', './img/2-进入房间/4.png',
    './img/2-进入房间/5.png', './img/2-进入房间/6.png',
    './img/2-进入房间/7.png', './img/2-进入房间/8.png',
    './img/2-进入房间/9.png',]
//进入房间 x号位
var enterRoomLocation = document.getElementById('location')

//开始游戏倒计时界面
var playGame = document.getElementById('playGame')
//倒计时innerHtml元素
var gameCount = document.getElementById('gameCount')
var gameCountImg = document.getElementById('gameCountImg')
//开始游戏倒计时图片
var roomCountDownImgs = ['./img/3-开始游戏倒计时/0.png',
    './img/3-开始游戏倒计时/1.png', './img/3-开始游戏倒计时/2.png',
    './img/3-开始游戏倒计时/3.png', './img/3-开始游戏倒计时/4.png',
    './img/3-开始游戏倒计时/5.png', './img/3-开始游戏倒计时/6.png',
    './img/3-开始游戏倒计时/7.png', './img/3-开始游戏倒计时/8.png',
    './img/3-开始游戏倒计时/9.png',]

//蓄能界面
var charge = document.getElementById('charge')

//胜利界面
var win = document.getElementById('win')
// 失败
var fail = document.getElementById('fail')

//点亮
var lit = document.getElementById('lit')

//等待大厅
var gameOver = document.getElementById('with')

//音频
var countDownAudio = document.getElementById('countDownAudio')
var filAudio = document.getElementById('filAudio')
var btnClickAudio = document.getElementById('btnClickAudio')
var bgAudioOneAudio = document.getElementById('bgAudioOneAudio')
var bgAudioTwoAudio = document.getElementById('bgAudioTwoAudio')
var winAudio = document.getElementById('winAudio')
var playAudioBg = document.getElementById('bgPlayAudio')
var stopAudioBg = document.getElementById('bgStopAudio')


var couss = '1';
//关闭所有元素
function closeAll() {
    joinGame.style.display = 'none'
    enterRoom.style.display = 'none'
    playGame.style.display = 'none'
    charge.style.display = 'none'
    win.style.display = 'none'
    fail.style.display = 'none'
    lit.style.display = 'none'
    gameOver.style.display = 'none'
}


function bgAudioPlay() {
    playAudioBg.style.display = 'block'
    stopAudioBg.style.display = 'none'
    bgAudioOneAudio.play()

}
bgAudioOneAudio.addEventListener('ended', function(){
    bgAudioTwoAudio.play()
    
})
bgAudioTwoAudio.addEventListener('ended', function(){
    bgAudioOneAudio.play()
})

function bgAudioStop() {
    playAudioBg.style.display = 'none'
    stopAudioBg.style.display = 'block'
    bgAudioOneAudio.pause()
    bgAudioTwoAudio.pause()
}
//加入游戏
function jumpWeb(params) {
    if (params == 'enterRoom') {
        joinGame.style.display = "none"
        enterRoom.style.display = "block"
        // enterRoomCountGo()
    }
}
// 进入房间的跳转
function enterRoomCountGo() {
    //绑定服务器倒计时 然后到0了就跳转  绑在 请求服务器
    if (enterRoomCount.innerHTML == '') {
        enterRoom.style.display = 'none'
        playGame.style.display = 'block'
    }
}
//第二个界面的倒计时
function findCountImg(count) {
    for (var i = 0; i < countImgs.length; i++) {
        if (count > 9) {
            countImg1.src = countImgs[count.charAt(0)]
            countImg2.src = countImgs[count.charAt(1)]
        }
        else if (count == i) {
            countImg1.src = countImgs[i]
        }
    }
    if (count.charAt(1) != '') {
        countImg2.style.display = 'inline-block'
    } else if (count.charAt(1) == '') {
        countImg2.style.display = 'none'
    }
}
//玩家人数
function findLocation(location) {
    for (var i = 0; i < locationImgs.length; i++) {
        if (location == i) {
            enterRoomLocation.src = locationImgs[i]
        }
    }
}


//开始游戏的倒计时跳转
function playGameCount() {
    if (gameCount.innerHTML == '') {
        playGame.style.display = 'none'
        charge.style.display = 'block'
    }
}
function findroomCountDown(countDown) {
    for (var i = 0; i < roomCountDownImgs.length; i++) {
        if (countDown == i) {
            gameCountImg.src = roomCountDownImgs[i]
        }
    }
}

//胜利界面跳转
function toWin() {
    win.style.display = 'block'
    charge.style.display = 'none'
}
//失败界面跳转
function toFail() {
    fail.style.display = 'block'
    charge.style.display = 'none'
}
//点亮界面跳转
function toLit() {
    lit.style.display = 'block'
    charge.style.display = 'none'
}
function toJoin() {
    joinGame.style.display = 'block'
    lit.style.display = 'none'
}

//如果房间倒计时有大于0的消息就一直跳转房间倒计时界面
function countsDown(count, countFive) {
    if (count >= 0) {
        closeAll();
        enterRoom.style.display = "block"
    } else if (countFive < 0) {

    }
}
