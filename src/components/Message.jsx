export default function Message() {
  const handleClick = () => {
    alert("Hello world");
  };

  return (
    <>
      <button onClick={handleClick}>Click here to get aler</button>
    </>
  );
}
