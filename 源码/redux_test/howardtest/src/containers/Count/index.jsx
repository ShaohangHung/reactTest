import CountUI from "../../components/Count";
import { connect } from "react-redux";
import { countReducer } from "../../redux/counterSlice";
//引入actionCreator，专门用于创建action object
import {
  createIncrementAction,
  createDecrementAction,
  createAsyncIncrementAction,
} from "../../redux/countAction";

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps", state);
  console.log("mapStateToProps", ownProps);
  return { a: 1, ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(countReducer(createIncrementAction(value))),
    decrement: (value) => dispatch(countReducer(createDecrementAction(value))),
    incrementAsync: (value) =>
      dispatch(countReducer(createAsyncIncrementAction(value), 500)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
