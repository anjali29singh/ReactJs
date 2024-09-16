function Greet(props) {
  return (
    <>
      <div>Hello There My Name is {props.names}</div>
    </>
  );
}

Greet.propTypes = {
  names: String,
};

export default Greet;
