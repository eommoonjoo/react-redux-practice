const INCREASE = 'habits/INCREASE';
const DECREASE = 'habits/DECREASE';
//액션 타입 설정

export const onIncrease = (id) => ({
  type: INCREASE,
  id,
});

export const onDecrease = (id) => ({
  type: DECREASE,
  id,
});

//액션 객체 생성 함수

const initialState = {
  habits: [
    { id: 1, name: '축구', count: 0 },
    { id: 2, name: '농구', count: 0 },
  ],
};

//초기 상태 값을 설정

const habits = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.id ? { ...habit, count: habit.count + 1 } : habit
        ),
      };
    case DECREASE:
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.id ? { ...habit, count: habit.count - 1 } : habit
        ),
      };
    default:
      return state;
  }
};

//리듀서를 만들어줍니다.

export default habits;
