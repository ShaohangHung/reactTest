import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Message() {
  // const navigate = useNavigate();
  // let timer = null;

  // useEffect(() => {
  //   /* componentDidMount */
  //   timer = setInterval(() => {
  //     navigate(`/home/message`);
  //   }, 2000);
  //   return () => {
  //     /* componentWillUnmount */
  //     clearInterval(timer);
  //   };
  // });

  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  );
}
