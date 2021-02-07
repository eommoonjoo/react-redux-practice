const INCREASE = 'habits/INCREASE';
const DECREASE = 'habits/DECREASE';

export const onIncrease = (id) => ({
  type: INCREASE,
  id,
});

export const onDecrease = (id) => ({
  type: DECREASE,
  id,
});

const initialState = {
  habits: [
    { id: 1, name: '축구', count: 0 },
    { id: 2, name: '농구', count: 0 },
  ],
};

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

export default habits;
