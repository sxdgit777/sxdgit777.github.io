const myImage = document.querySelector("img"); //获取页面中第一个img元素，并将其存储在myImage常量中

myImage.onclick = () => {
  //当myImage被点击时，执行以下函数
  const mySrc = myImage.getAttribute("src"); //获取myImage的src属性值，并将其存储在mySrc常量中
  if (mySrc === "images/firefox-icon.jpg") {
    //如果mySrc的值是"images/firefox-icon.jpg"，则执行以下代码
    myImage.setAttribute("src", "images/firefox2.jpg"); //将myImage的src属性值设置为"images/firefox2.jpg"
  } else {
    //否则，执行以下代码
    myImage.setAttribute("src", "images/firefox-icon.jpg"); //将myImage的src属性值设置为"images/firefox-icon.jpg"
  }
};

const myButton = document.querySelector("button"); //获取页面中第一个button元素，并将其存储在myButton常量中
const myHeading = document.querySelector("h1"); //获取页面中第一个h1元素，并将其存储在myHeading常量中

function setUserName() {
  //定义一个名为setUserName的函数
  const myName = prompt("请输入用户名"); //弹出一个提示框，要求用户输入用户名，并将其存储在myName常量中
  if (!myName) {
    //如果myName的值为空或为假，则执行以下代码
    setUserName(); //递归调用setUserName函数，要求用户重新输入用户名
  } else {
    //否则，执行以下代码
    localStorage.setItem("name", myName); //将myName的值存储在localStorage（浏览器提供的本地存储对象）中，键名为"name"
    myHeading.textContent = `欢迎，${myName}`; //将myHeading的文本内容设置为欢迎信息
  }
}

if (!localStorage.getItem("name")) {
  //如果localStorage中没有"name"键，则执行以下代码
  setUserName(); //调用setUserName函数，要求用户输入用户名
} else {
  //否则，执行以下代码
  const storedName = localStorage.getItem("name"); //从localStorage中获取"name"键的值，并将其存储在storedName常量中
  myHeading.textContent = `欢迎，${storedName}`; //将myHeading的文本内容设置为欢迎信息
}

myButton.onclick = function () {
  //当myButton被点击时，执行以下函数
  setUserName(); //调用setUserName函数，要求用户输入用户名
};
