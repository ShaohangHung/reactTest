import React from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPersonAction } from "../../redux/personSlice";

export function Person(props) {
  console.log("PersonProps", props);
  let nameNode, ageNode;
  const { personArray, count } = props;
  const addPerson = () => {
    const name = nameNode.value;
    const age = ageNode.value;
    const personObj = { id: nanoid(), name, age };
    props.addPerson(personObj);
    nameNode.value = "";
    ageNode.value = "";
  };

  return (
    <div>
      <h1>我是Person组件,上方组件總和为:{count}</h1>
      <input ref={(c) => (nameNode = c)} type="text" placeholder="输入名字" />
      <input ref={(c) => (ageNode = c)} type="text" placeholder="输入年龄" />
      <button onClick={addPerson}>新增</button>
      <ul>
        {personArray.map((p) => {
          return (
            <li key={p.id}>
              {p.name}--{p.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({ personArray: state.personObj, count: state.countObj.count }),
  (dispatch) => ({
    addPerson: (data) => dispatch(addPersonAction(data)),
  })
)(Person);
