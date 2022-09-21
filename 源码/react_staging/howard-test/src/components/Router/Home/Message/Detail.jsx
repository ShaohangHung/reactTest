import { useParams, useLocation } from "react-router-dom";
import qs from "qs";

const data = {
  1: `你好, 訊息1`,
  2: `你好, 訊息2`,
  3: `你好, 訊息3`,
};

export default function Detail() {
  // 接收params
  // const { id, title } = useParams();

  // 接收search
  // const { search } = useLocation();
  // const { id, title } = qs.parse(search.slice(1));

  // 接收state
  const { state } = useLocation();
  const { id, title } = state || {};
  return (
    <ul>
      <li>ID: {id}</li>
      <li>TITLE: {title}</li>
      <li>CONTENT: {data[id]}</li>
    </ul>
  );
}
