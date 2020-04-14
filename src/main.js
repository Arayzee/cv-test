let text = document.querySelector('#text')
let style = document.querySelector('#style')
let html = document.querySelector('#html')

let str = `/*你好，我是Arayzee，一个喜欢画画的新手程序猿*/
/*下面我将用CSS画一只熊猫*/
/*看好咯~*/

/*首先为所有元素添加过渡效果*/
* {
  transition: all 0.5s;
}

/*然后把背景换成渐变的马卡龙色，唤醒写代码时的好心情*/
body::before {
  background: linear-gradient( 135deg, #90d1c3, #e0accc );
}

/*接着给我们的代码区和效果区做区分*/
/*要注意，永远要考虑移动端！所以我会用@media进行媒体查询达到自适应的效果*/
#text {
  background: #000;
  color: #fff;
}
#html {
  height: 45vw;
  width: 45vw;
  background: #fff;
}
@media (max-aspect-ratio: 1/1) {
  #html {
    height: 45vh;
    width: 45vh;
  }
}

/*加上点间距，不然我要窒息了*/
#text {
  padding: 1em;
  margin: 1em;
}
#html {
  margin: 1em;
}

/*emmmm...作为一个有审美的前端，是不能忍受这种辣眼睛的画面效果的，让我再给他们加上点高逼格的透视、半透明、投影效果*/
#main {
  perspective: 1200px;
}
#text {
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  transform: rotateY(10deg) translateZ(-100px);
}
@media (max-aspect-ratio: 1/1) {
  #text {
    transform: rotateX(-10deg) translateZ(-100px);
  }
}
#html {
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
}

/*好了，环境准备就绪，下面我要开始画画咯~*/

/*首先给熊猫加个背景*/
/*画一个天空*/
#sky {
  width: 100%;
  height: 100%;
  background: #7EECCD;
}

/*画个太阳*/
#sun {
  width: 15%;
  height: 15%;
  top: 8%;
  left: 23%;
  background: #F2EE66;
  border-radius: 50%;
}

/*铺一块地面*/
#ground{
  top: 60%;
  width: 100%;
  height: 40%;
  background: #FAB9AC;
}

/*接着画三座山*/
#hill1 {
  top: 35%;
  left: 25%;
  border-style: solid;
  border-width: 0 8vw 16vw 8vw;
  border-color: transparent transparent #96FCB2 transparent;
}
@media (max-aspect-ratio: 1/1) {
  #hill1 {
    border-width: 0 8vh 16vh 8vh;
  }
}
#hill2 {
  top: 22%;
  left: -10%;
  border-style: solid;
  border-width: 0 12vw 24vw 12vw;
  border-color: transparent transparent #AEEF83 transparent;
}
@media (max-aspect-ratio: 1/1) {
  #hill2 {
    border-width: 0 12vh 24vh 12vh;
  }
}
#hill3 {
  top: 10%;
  left: 40%;
  border-style: solid;
  border-width: 0 16vw 32vw 16vw;
  border-color: transparent transparent #A5F046 transparent;
}
@media (max-aspect-ratio: 1/1) {
  #hill3 {
    border-width: 0 16vh 32vh 16vh;
  }
}

/*背景画完了，开始画熊猫*/

/*先画一个身体*/
#pbody {
  top: 58%;
  left: 35%;
  width: 30%;
  height: 30%;
  background: #FAFAFA;
  border-radius: 50%;
}

/*接下来画两个耳朵*/
#pear1, #pear2 {
  top: 42%;
  left: 37%;
  width: 10%;
  height: 10%;
  background: #333;
  border-radius: 50%;
}
#pear2 {
  right: 37%;
  left: unset;
}

/*加上一个脑袋*/
#phead {
  top: 44%;
  left: 38%;
  width: 24%;
  height: 24%;
  background: #fff;
  border-radius: 50%;
}

/*再加上一个四肢*/
#phand1, #phand2 {
  top: 62%;
  left: 34%;
  width: 12%;
  height: 12%;
  background: #333;
  border-radius: 50%;
}
#phand2 {
  right: 34%;
  left: unset;
}
#pleg1, #pleg2 {
  top: 75%;
  left: 34%;
  width: 15%;
  height: 15%;
  background: #333;
  border-radius: 50%;
}
#pleg2 {
  right: 34%;
  left: unset;
}

/*最后加上眼睛*/
#peye1, #peye2 {
  top: 54%;
  left: 42%;
  width: 5%;
  height: 5%;
  background: #333;
  border-radius: 50%;
  border: 0.3vw solid #fff;
  box-shadow: 0 0 0 1vw #333;
}
@media (max-aspect-ratio: 1/1) {
  #peye1, #peye2 {
    border: 0.3vh solid #fff;
    box-shadow: 0 0 0 1vh #333;
  }
}
#peye2 {
  right: 42%;
  left: unset;
}

/*大功告成！*/
`
let str2 = ''
let index = 0

let step = () => {
  setTimeout(() => {
    if (index < str.length - 1) {
      str2 += str[index]
      text.innerHTML = str2
      text.scrollTo(0, 99999)
      style.innerHTML = str2
      index += 1
      step()
    }
  }, 30)
}

step()