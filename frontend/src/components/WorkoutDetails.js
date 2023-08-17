const WorkoutDetails = ({ key, workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p key={key}>
        <strong>Load (kg):</strong>
        {workout.load}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
