import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

export default function RootComponent() {
  return (
    <div>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}
