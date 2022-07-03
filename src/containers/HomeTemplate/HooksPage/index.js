import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";
import Cart from "./cart";
import DemoUseReducer from "./demoUseReducer";
import CustomHook from "./custom-hook";

export default function HooksPage() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);

  const listCart = [
    { id: 1, productName: "Samsung" },
    { id: 2, productName: "Iphone" },
  ];

  const listCartMemo = useMemo(() => listCart, []);

  useEffect(() => {
    console.log("use Effect -- giong componentDidMount ben class");
  }, []);

  useEffect(() => {
    console.log("use Effect -- giong componentDidUpdate ben class");
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hello cybersoft");
    }, 90000000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderNoti = () => {
    return `So like la: ${like}`;
  };

  const renderNotiCallback = useCallback(renderNoti, [like]);

  return (
    <div className="container text-center">
      <div>
        <h1>Hooks</h1>
        <h3>Number: {number}</h3>
        <button
          className="btn btn-success"
          onClick={() => setNumber(number + 1)}
        >
          Click
        </button>
      </div>

      <div className="mt-5">
        <h3>Like: {like}</h3>
        <button className="btn btn-info" onClick={() => setLike(like + 30)}>
          Like
        </button>
      </div>
      <Child renderNoti={renderNotiCallback} />
      <hr />
      <Cart listCart={listCartMemo} />
      <hr />
      <DemoUseReducer />
      <hr />
      <CustomHook />
    </div>
  );
}
