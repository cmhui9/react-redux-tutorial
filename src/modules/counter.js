import { createAction, handleActions } from 'redux-actions';

// step1. 액션 타입과 액션 생성 함수 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/*
export const increase = () => ({ type: INCREASE }); // export 는 이 함수를 다른파일에서 불러와 사용하기 위함
export const decrease = () => ({ type: DECREASE });
*/

// redux actions 사용
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);


// step2. 리듀서
const initialState = {
  number: 0 // counter 모듈의 초기상태 (초깃값 설정)
};

/*
function counter(state = initialState, action) { // 리듀서 함수 정의
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
*/

// redux actions 사용
const counter = handleActions(
  {
    [increase]: (state, action) => ({ number: state.number + 1 }),
    [decrease]: (state, action) => ({ number: state.number - 1 })
  },
  initialState
)
export default counter;