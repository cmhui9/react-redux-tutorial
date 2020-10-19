import React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  )
};

/* Type. mapStateToProps, mapDispatchToProps 미리 선언
const mapStateToProps = state => ({
  number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
  // 임시 함수
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
*/

/*
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => ({
    increase: () => dispatch(increase());
    decrease: () => dispatch(decrease());
  }),
)(CounterContainer);
*/

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  /* 아래와 같음 (두번째 파라미터를 객체형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신해줌)
  dispatch =>
    bindActionCreators(
      {
        increase,
        decrease
      },
      dispatch
    )*/
  {
    increase,
    decrease,
  },
)(CounterContainer);