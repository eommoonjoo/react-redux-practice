import React from 'react';
import { connect } from 'react-redux';
import Habits from '../components/Habits';
import { onIncrease, onDecrease } from '../modules/habits';

const HabitsContainer = ({
  habits,
  onIncrease,
  onDecrease,
  //
}) => {
  return (
    <Habits
      habits={habits}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      //
    />
  );
};

const mapStateToProps = (state) => ({
  habits: state.habits.habits,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrease: (id) => {
    dispatch(onIncrease(id));
  },
  onDecrease: (id) => {
    dispatch(onDecrease(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer);
