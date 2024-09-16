/* eslint-disable react/prop-types */
function Intro({ details }) {
  console.log();
  return (
    <div>
      {details.map((user, index) => (
        <div key={index}>
          <h2>{user.user}</h2>
          <p>
            {user.college} <br />
          </p>
          <p>{user.depart}</p>
        </div>
      ))}
    </div>
  );
}

export default Intro;
