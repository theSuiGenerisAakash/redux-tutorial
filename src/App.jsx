
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './redux/actions';

const App = props => (
  <div>
    <button onClick={props.dispatchDecrement}>{props.showCountDec}</button>
    <button onClick={props.dispatchIncrement}>{props.showCountInc}</button>
  </div>
);

App.propTypes = {
  showCountInc: PropTypes.number,
  showCountDec: PropTypes.number,
  dispatchDecrement: PropTypes.func.isRequired,
  dispatchIncrement: PropTypes.func.isRequired,
};

App.defaultProps = {
  showCountInc: 0,
  showCountDec: 100,
};

const mapStateToComponent = state => ({
  showCountInc: state.increment.count,
  showCountDec: state.decrement.count,
});

const mapDispatchToComponent = dispatch => ({
  dispatchIncrement: () => dispatch(increment),
  dispatchDecrement: () => dispatch(decrement),
});

const ConnectedComponent = connect(mapStateToComponent, mapDispatchToComponent)(App);

export default ConnectedComponent;
