// export default function App() {
//   return (
//     <div>
//       <h1>"Hello World inside quotes"</h1>
//       <p>"This is a string with quotation marks inside JSX"</p>
//     </div>
//   );
// }

// const name = "Juan";
// const age = 20;

// export default function App() {
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>You are {age} years old.</p>
//       <p>2 + 2 = {2 + 2}</p>
//       <p>Your age next year: {age + 1}</p>
//     </div>
//   );
// }

// const boxStyle = {
//   backgroundColor: "lightblue",
//   padding: "20px",
//   borderRadius: "10px"
// };

// export default function App() {
//   return (
//     <div>
//       <h2>Styled Box Below:</h2>
//       <div style={boxStyle}>
//         This box is styled using double curlies.
//       </div>

//       <div style={{ marginTop: "20px", color: "red" }}>
//         This uses inline CSS directly inside JSX.
//       </div>
//     </div>
//   );
// }

const student = {
  name: "Maria",
  course: "BSIS",
  year: 3
};

const fruits = ["Apple", "Banana", "Orange"];

function greet(name) {
  return `Good day, ${name}!`;
}

export default function App() {
  return (
    <div>
      <h1>{greet(student.name)}</h1>

      <p>
        {student.name} is taking {student.course}, year {student.year}.
      </p>

      <h3>Fruit List:</h3>
      <ul>
        {fruits.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
