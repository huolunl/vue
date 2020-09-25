{
    // -------反引号模版
let name = "haha"
let mystr2 = "${name}"
// 反引号是模版字符串
let mystr3 = `${name}`
console.log(mystr2)
console.log(mystr3)

function target(formats){
    console.log(formats)
}

// 模版可以直接调用函数
target`ni${name}ssss`


}

{
// --------------------symbol
// symbol 类型
let str1 = "hello world"
let str2 = "hello world"
console.log(typeof(str2))
console.log(str1==str2)
console.log(str1===str2)

let s1 = Symbol("mysymbol")
let s2 = Symbol("mysymbol")

console.log(s1==s2) // false   symbol 比较的是hash值 所以都不相等
console.log(s1===s2)  //false
// 作为常量

const java=Symbol()
const php=Symbol()
let lang=java
if (lang===java){ // 不用关心 值是多少
    console.log("java")    
}

//作为属性
let obj={}
s1 = Symbol()
s2 = Symbol()
obj[s1] = "hello"  // key 实际上是不同的
obj[s2] = "world"
}

{
//-------------

//解构赋值
let [a,b,c] = ['1',2,3] // 依次赋值
console.log(a) 
console.log(b)
console.log(c)

let [...other] = [1,2,3,4,5,6,7]
console.log(other)  //[1,2,3,4,5,6,7]

let {name2, age} = {name2:"huolun",age:20}
console.log(name)
console.log(age)

function add(x=1,y=2){
    return x+y
}
// 不限制传参个数
console.log(add())
}
{
    //-----------------数组循环

    let list=['a','b','c']

    for(let l in list){ //循环对象用， 能把属性也遍历出来
        console.log(l) //输出下标
    }
    for(let l of list){
        console.log(l) //输出 a,b,c
    }

}

{
    //--------函数默认值
    function sayhello(name="huolun"){
        console.log(`hello,${name}`)
    }
    sayhello()

    function required(){
        throw new Error("参数未设定")
    }
    // 不传参数时 required会被调用
    function saybuy(name=required()){
        console.log(`by ${name}`)
    }
    // saybuy()// 抛出错误
}

{
    // ------可变长参数-------

    function sum(...sum){
        let result = 0
        for (let sub of sum){
            result += sub;
        }
        return result;
    }
    console.log(sum(1,2,3,4,5)) // 求和为15  
}

    
{
//-----------➡箭头函数------

    let list = [1,2,3,4]
    // function f(value){
    //     console.log(value)
    // }
    // f("huolun")
    // 类似pythoin里的lambda
    let f = vaule =>console.log(vaule)
    
    f("haha")
}


{
    //-------基本对象的定义----------
    let title="es6"
    let price = 25
    let publish = "火轮"

    let book = {
        title,price,publish,
        toString(){
            console.log(`${this.title} is ${price}元`)
        }
    };
    // 添加两个属性一个方法
    book["lang"] = '简体中文'
    book.ssss ="dddddd"
    book["f"] = value=>console.log(value)
    console.log(book)
    book.toString()
    book.f(999)
}


{
//------class--------
    class Player {
        // 构造函数
        constructor(name,gender){
            this.name = name
            this.gender = gender
        }
        // 实例方法
        show(){
            console.log(`我是${name},性别${this.gender}`)
        }
        // 静态方法， 类方法
        static info(){
            console.log("hahahah")
        }
    }

    let player = new Player("火轮","男")

    // player.show()
    // Player.info()
}


{
// ----- getter setter-------
    class Player {
        // 构造函数
        constructor(name,gender){
            this.name = name
            this.gender = gender
        }
        // 实例方法
        show(){
            console.log(`我是${name},性别${this.gender}`)
        }
        // 静态方法， 类方法
        static info(){
            console.log("hahahah")
        }

        get age(){
            return this._age
        }
        set age(val){
            this._age=val
        }
    }

    let player=new Player("火轮","男")
    // 会隐式的调用set age方法
    player.age="dddd"
    player.ddd=2222
    console.log(player)
    console.log(player.age)
}


{
    //------类继承-----------
    class Car {
        constructor(brand){
            this.brand=brand
        }

        show(){
            console.log(`本台车的品牌是${this.brand}`)
        }
    }

    class Lexus extends Car{
        constructor(brand, lineup){
            // super 默认等于调用父类的构造方法
            super(brand)
            this.lineup=lineup
        }
        getPrice(){
            switch(this.lineup){
                case "rx":
                    return 60;
                case "nx":
                    return 40;
                default:
                    throw new Error("未知")
            }
        }
    }

    let mycar= new Lexus("lexus","rx")
    mycar.show()
    console.log(mycar.getPrice())
}


{
    //------ 循环对象--------
    let list = [10,20,30]





}