import { useState } from "react";

export default function Form() {
  const [text, setText] = useState({ firstName: "", lastName: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text);
  }
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => setText({ ...text, firstName: e.target.value })}
            value={text.firstName}
            placeholder="firstname"
          />
          <input
            type="text"
            onChange={(e) => setText({ ...text, lastName: e.target.value })}
            placeholder="lastName"
            value={text.lastName}
          />
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
}
