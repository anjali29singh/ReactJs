function Fruits() {
  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Icaco",
    "Jujube",
    "Kiwi",
    "Lemon",
    "Mango",
    "Zucchini",
  ];
  return (
    <div>
      <ul>
        {fruits.map((f, k) => (
          <li key={k}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
