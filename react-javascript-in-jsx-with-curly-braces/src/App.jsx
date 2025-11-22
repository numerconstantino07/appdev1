// export default function App() {
//   return (
//     <div>
//       <h1>"Hello World inside quotes"</h1>
//       <p>"This is a string with quotation marks inside JSX"</p>
//     </div>
//   );
// }

const name = "Juan";
const age = 20;

export default function App() {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>2 + 2 = {2 + 2}</p>
      <p>Your age next year: {age + 1}</p>
    </div>
  );
}
