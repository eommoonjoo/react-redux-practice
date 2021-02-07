import React from 'react';

function Habit({
  onIncrease,
  onDecrease,
  habit,

  //
}) {
  console.log(habit);
  return (
    <li className='habit'>
      <span className='habit-name'>{habit.name}</span>
      <span className='habit-count'>{habit.count}</span>
      <button
        className='habit-button habit-increase'
        onClick={() => onIncrease(habit.id)}>
        <i className='fas fa-plus-square'></i>
      </button>
      <button
        className='habit-button habit-decrease'
        onClick={() => onDecrease(habit.id)}>
        <i className='fas fa-minus-square'></i>
      </button>
    </li>
  );
}

export default React.memo(Habit);
