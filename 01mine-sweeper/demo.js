//构造函数
function Mine(tr, td, mineNum) {
    this.tr = tr; //行数
    this.td = td; //列数
    this.mainTntNum = mineNum; //雷的数量
    this.squares = []; //存储方块的信息，二维数组 行与列的信息
    this.tds = []; //存储don对象
    this.surplusMine = mineNum; //剩余雷的数量
    this.allRight = false; //右击标注的小红旗是否全是雷，用   

    this.parent = document.querySelector('.gameBox');
    this.mineNumDom = document.querySelector('.mineNum');
}

//生成n个不重复的数字
Mine.prototype.randomNum = function () {
    var square = new Array(this.td * this.tr) //生成一个空数组，长度为总
    for (var i = 0; i < square.length; i++) {
        square[i] = i;
    }
    //*************给数组随机排序******************
    square.sort(function () {
        return 0.5 - Math.random()
    });
    return square.slice(0, this.mainTntNum);
}

Mine.prototype.init = function () {
    // rn是随机生成的数组，雷的位置
    var rn = this.randomNum();
    var n = 0; //用来找到索引，二维数组对应的编号
    for (var i = 0; i < this.tr; i++) {
        this.squares[i] = [];
        for (var j = 0; j < this.td; j++) {
            if (rn.indexOf(++n) != -1) { //查找数组中有没有n,找到n返回索引，找不到返回-1****************
                //条件成立表示有雷
                this.squares[i][j] = {
                    type: 'mine',
                    x: j,
                    y: i
                };
            } else {
                this.squares[i][j] = {
                    type: 'number',
                    x: j,
                    y: i,
                    value: 0
                };
            }
        }
    }
    //阻止鼠标右击
    this.parent.oncontextmenu = function () {
        return false
    }
    this.updateNum();
    this.createDom();
    mine.mineNumDom.innerHTML = this.mainTntNum;
};


//创建表格
Mine.prototype.createDom = function () {
    var This = this;
    var table = document.createElement('table');

    for (var i = 0; i < this.tr; i++) {
        var domTr = document.createElement('tr');
        this.tds[i] = [];

        for (var j = 0; j < this.td; j++) {
            var domTd = document.createElement('td');

            domTd.pos = [i, j]; //格子对应的行与列存到身上
            domTd.onmousedown = function () {
                This.play(event, this);
            }
            this.tds[i][j] = domTd;

            // if (this.squares[i][j].type == 'mine') {
            //     domTd.className = "mine1";
            // }
            // if (this.squares[i][j].type == 'number') {
            //     domTd.innerHTML = this.squares[i][j].value;
            // }

            domTr.appendChild(domTd);
        }

        table.appendChild(domTr);
    }
    this.parent.innerHTML = ''
    this.parent.appendChild(table);
}


// 找周围的雷
// 传入的参数是对象如{type: "number", x: 9, y: 4, value: 1}
Mine.prototype.getAround = function (square) {
    var x = square.x;
    var y = square.y;
    var result = []; //返回找到的格子的坐标返回出去
    /*
        x-1,y-1     x,y-1    x+1,y-1
        x-1,y       x,y      x+1，y
        x-1,y+1     x,y+1    x+1,y+1
    */
    for (var i = x - 1; i <= x + 1; i++) {
        for (var j = y - 1; j <= y + 1; j++) {
            if (
                i < 0 || //左边格子超出范围
                j < 0 || //上边格子超出范围
                i > this.td - 1 || //右格子超出范围
                j > this.tr - 1 || //下边格子超出范围
                (i == x && j == y) || //排除本身
                this.squares[j][i].type == 'mine' //排除雷
            ) {
                continue;
            }
            result.push([j, i]);
        }
    }
    return result;
}

//添加方法更新数字
Mine.prototype.updateNum = function () {

    for (var i = 0; i < this.tr; i++) {
        for (var j = 0; j < this.td; j++) {
            //只更新雷附近的数量
            if (this.squares[i][j].type == 'number') {
                continue
            } else {
                // 获取附近的雷
                var num = this.getAround(this.squares[i][j])

                for (var k = 0; k < num.length; k++) {
                    //*****************************************
                    this.squares[num[k][0]][num[k][1]].value += 1
                }
            }
        }
    }
}

// 开始游戏(⭐⭐⭐⭐⭐)
Mine.prototype.play = function (ev, obj) {
    This = this;
    // 获取被点击的td的值格式： {type: "bumber", x: 2, y: 3, valve: 2}
    var curSquere = this.squares[obj.pos[0]][obj.pos[1]];
    //判断鼠标右击事件
    if (ev.which === 3) {
        // 判断右击区域是没有被打开的区域
        if (obj.className && obj.className != 'flag') {
            return;
        }
        // 反转状态♥
        obj.className = (obj.className == 'flag' ? '' : 'flag');
        if (curSquere.type === "mine") {
            this.allRight = true;
        } else {
            // 有一个插的旗子不是雷就false
            this.allRight = false;
        }
        // 处理剩余雷数
        if (obj.className == 'flag') {
            mine.mineNumDom.innerHTML = --this.surplusMine
        } else {
            mine.mineNumDom.innerHTML = ++this.surplusMine
        }
        if (mine.surplusMine === 0) {
            // 剩余的雷数为零时判断
            if (this.allRight) {
                // 游戏胜利
                alert('恭喜你！！使用' + time + "s赢得了游戏")
            } else {
                // gameOver
                this.gameOver()
            }
        }
    }
    // 判断鼠标左击事件
    if (ev.which === 1 && obj.className !== "flag") {
        var color = ['zero', 'one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight'];
        //判断点击的是雷还是数字
        if (curSquere.type === "number") {
            obj.innerHTML = curSquere.value
            obj.className = color[curSquere.value];
            //用户第一次点击的是
            if (curSquere.value === 0) {
                obj.innerHTML = ''

                //1.用递归实现找周围的0⭐⭐⭐⭐⭐
                function getAllZero(square) {
                    // around获取值为0点的周围格子的坐标：二维数组
                    var around = This.getAround(square)
                    for (var c = 0; c < around.length; c++) {
                        var x = around[c][0]; //周围的x坐标
                        var y = around[c][1];

                        This.tds[x][y].className = color[This.squares[x][y].value]

                        if (This.squares[x][y].value === 0) {
                            // 判断属性设否被访问到
                            if (!This.tds[x][y].ckeck) {
                                // 这属性决定各自是否被找过找过值为true
                                This.tds[x][y].ckeck = true;
                                getAllZero(This.squares[x][y])
                            }
                        } else {
                            // 如果以某个格子为中心找到的四周各自的值不为0， 显示对应的数字
                            This.tds[x][y].innerHTML = This.squares[x][y].value;
                        }
                    }

                }
                getAllZero(curSquere)
            }
        } else {
            this.gameOver(obj);
            alert('很遗憾游戏结束🔚');
        }
    }

}

// 游戏失败
Mine.prototype.gameOver = function (obj) {
    // 1. 显示所有的雷
    for (var i = 0; i < this.tr; i++) {
        for (var j = 0; j < this.td; j++) {
            if (this.squares[i][j].type == 'mine') {
                this.tds[i][j].className = "mine1";
                // obj.className = 
            }
            this.tds[i][j].onmousedown = null;
        }
    }
    // 2. 当前雷的背景变红
    obj.style.backgroundColor = "red";
    // 3. 取消所有格子的点击事件 
    obj.className = "mine1";
}




// 上边button的功能
var btns = document.querySelectorAll('.level button');
var timeNode = document.querySelector('.time')
// 存储实例
var time = 0;
var startTime = setInterval(function () {
    time++;
    timeNode.innerHTML = "游戏开始" + time + 's';
}, 1000)
var mine = null;
var ln = 0; // 存放当前选中的状态
var arr = [
    [9, 9, 10],
    [16, 16, 40],
    [28, 28, 99]
]

for (let i = 0; i < btns.length - 1; i++) {
    btns[i].onclick = function () {
        btns[ln].className = '';
        this.className = 'active';
        mine = new Mine(...arr[i])
        mine.init()
        time = 0;
        ln = i;
    }
}
timeNode.innerHTML = '开始游戏🚀'
btns[0].onclick()
btns[3].onclick = function () {
    mine.init();
    time = 0;
}
/*
1. 创建表格
2. 随机数生成
3. 在主函数init里将随机数映射到各个点，赋点的坐标
4. 处理雷周围的数字
5. 添加方法更新数字
6. 添加play
7. 难点：点击0时出现一大片空白；使用递归
*/