import { createSignal } from 'solid-js';

export default function App() {
  const [count, setCount] = createSignal(0);
  const increment = (by = 1) => setCount((prev) => (prev += by));
  const decrement = (by = 2) => setCount((prev) => (prev -= by));

  return (
    <div className="h-screen w-screen flex flex-1 items-center justify-center">
      <button
        onClick={() => decrement(2)}
        className="bg-red-500 p-4 text-white text-xl mr-4"
      >
        -
      </button>
      <span className="text-2xl text-bold">{count()}</span>
      <button
        onClick={() => increment(1)}
        className="bg-green-500 p-4 text-white text-xl ml-4"
      >
        +
      </button>
    </div>
  );
}
