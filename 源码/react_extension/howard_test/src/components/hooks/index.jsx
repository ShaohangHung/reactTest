import React, { useState, useRef, useEffect } from "react";

export default function Demo() {
  console.log(`Demo`);
  const myRef = useRef();
  const [count, setCount] = useState(0);
  const [name, setName] = useState(`Jack`);

  //加的回调
  const add = () => {
    //setCount(count+1) //第一种写法
    setCount((count) => count + 1);
  };

  //提示输入的回调
  const show = () => {
    console.log(myRef);
    alert(myRef.current.value);
  };

  const changeName = () => {
    setName(myRef.current.value);
  };

  useEffect(() => {
    /* componentDidMount */
    console.log(`useEffect`, count);
    let timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      /* componentWillUnmount */
      clearInterval(timer);
    };
  });

  //卸载组件的回调
  const unmount = () => {
    const root = document.getElementById("root");
    root.remove();
  };

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{count}</h2>
      <h2>名字：{name}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
      <button onClick={changeName}>change Name</button>
    </div>
  );
}
