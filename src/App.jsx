
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { decrement } from './redux/actions';
import store from './redux/store';

const App = props => (
  <button onClick={() => store.dispatch(decrement)}>{props.value}</button>
);

const render = () => {
  console.log(store.getState());
  ReactDOM.render(<App value={store.getState().decrement.count} />, document.getElementById('root'));
};

store.subscribe(render);

App.propTypes = {
  value: PropTypes.number,
};

App.defaultProps = {
  value: 0,
};

export default App;
