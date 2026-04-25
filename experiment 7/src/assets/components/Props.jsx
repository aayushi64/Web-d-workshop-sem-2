function Props({ name, course, marks }) {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="info">Course: {course}</div>
      <div className="info">Marks: {marks}</div>
    </div>
  );
}

export default Props;