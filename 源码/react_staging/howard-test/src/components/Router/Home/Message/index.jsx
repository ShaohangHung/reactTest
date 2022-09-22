import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./Detail";

export default function Message() {
  const state = {
    messageArr: [
      { id: 1, title: "message 1" },
      { id: 2, title: "message 2" },
      { id: 3, title: "message 3" },
    ],
  };
  const navigate = useNavigate();

  const pushShow = (id, title) => {
    navigate(`detail/${id}/${title}`, {
      replace: false,
      // state: { id: id, title: title },
    });
  };

  const replaceShow = (id, title) => {
    navigate(`detail/${id}/${title}`, {
      replace: true,
      // state: { id: id, title: title },
    });
  };

  const { messageArr } = state;
  return (
    <div>
      <ul>
        {messageArr.map((message) => {
          return (
            <li key={message.id}>
              {/* 傳params */}
              <Link to={`detail/${message.id}/${message.title}`}>
                {message.title}詳細資訊
              </Link>
              &nbsp;
              <button onClick={() => pushShow(message.id, message.title)}>
                push查看
              </button>
              &nbsp;
              <button onClick={() => replaceShow(message.id, message.title)}>
                replace查看
              </button>
              {/* 傳search */}
              {/* <Link to={`detail/?id=${message.id}&title=${message.title}`}>
                  {message.title}詳細資訊
                </Link> */}
              {/* 傳state */}
              {/* <Link
                  to={`detail`}
                  state={{ id: message.id, title: message.title }}
                >
                  {message.title}詳細資訊
                </Link> */}
            </li>
          );
        })}
      </ul>
      <hr />
      <Routes>
        {/* 傳params */}
        <Route path="detail/:id/:title" element={<Detail />} />

        {/* search不需宣告接收, 正常註冊即可 */}
        {/* <Route path="detail" element={<Detail />} /> */}

        {/* state不需宣告接收, 正常註冊即可 */}
        {/* <Route path="detail" element={<Detail />} /> */}
      </Routes>
    </div>
  );
}
