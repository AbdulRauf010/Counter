import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      toast.error("Counter cannot go below zero!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-5 w-full max-w-sm border-gray-500 rounded-xl text-lg md:text-2xl border-2 shadow-lg gap-4">
        <h1 className="font-semibold select-none">Counter App</h1>
        <div className="mt-3 p-3 w-full text-center">
          <h1 className="border-2 border-gray-600 p-3 rounded-lg">
            Count: {counter}
          </h1>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <button
            onClick={handleAdd}
            className="border-2 border-gray-500 rounded-lg p-3 w-full md:w-auto hover:text-gray-400 transition-all"
          >
            Add
          </button>
          <button
            onClick={handleSubstract}
            className="border-2 border-gray-500 rounded-lg p-3 w-full md:w-auto hover:text-gray-400 transition-all"
          >
            Subtract
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
