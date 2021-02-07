import React from 'react';

function Habit({
  onIncrease,
  onDecrease,
  habit,
  //
}) {
  return (
    <li>
      <span>{habit.name}</span>
      <span>{habit.count}</span>
      <button onClick={() => onIncrease(habit.id)}>플러스</button>
      <button onClick={() => onDecrease(habit.id)}>마이너스</button>
    </li>
  );
}

export default Habit;
