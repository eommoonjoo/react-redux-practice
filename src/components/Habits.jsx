import Habit from './Habit';

function Habits({
  habits,
  onIncrease,
  onDecrease,
  //
}) {
  return (
    <>
      {habits.map((habit) => {
        return (
          <Habit
            key={habit.id} //
            habit={habit}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        );
      })}
    </>
  );
}

export default Habits;
