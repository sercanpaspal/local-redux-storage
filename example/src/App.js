import { connect } from "react-redux";
import { DECREMENT, INCREMENT, TOGGLE_THEME } from "./actionTypes";

function App({ state, dispatch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <hr />
      <div>
        <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>{" "}
        <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      </div>
      <hr />
      <div>
        <button onClick={() => dispatch({ type: TOGGLE_THEME })}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default connect((state) => ({ state }), {
  dispatch: (dispatch) => dispatch,
})(App);
