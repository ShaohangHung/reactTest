import { useParams } from "react-router-dom";

const data = {
  1: `你好, 訊息1`,
  2: `你好, 訊息2`,
  3: `你好, 訊息3`,
};

export default function Detail() {
  const { id, title } = useParams();
  return (
    <ul>
      <li>ID: {id}</li>
      <li>TITLE: {title}</li>
      <li>CONTENT: {data[id]}</li>
    </ul>
  );
}
