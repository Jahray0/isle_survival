import { useState } from "react";
import { Link } from "react-router-dom";

function InventoryPage() {
  const [numberOfDivs, setNumberOfDivs] = useState(28);
  console.log(setNumberOfDivs);

  const divs = [...Array(numberOfDivs)].map((_, index) => (
    <div
      key={index}
      className="bg-white rounded-lg px-3 py-3 h-28 flex flex-col justify-between"
    >
      <div className="bg-slate-600 h-full">Image</div>
      <div className="text-end ">Qty : 12</div>
    </div>
  ));

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-9/12 px-28">
          <div className="text-4xl font-extrabold text-white py-10">
            <h2 className="text-center">Inventaire</h2>
          </div>
          <div className="container pb-10">
            <div className="grid grid-rows-4 grid-flow-col gap-14">{divs}</div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
            >
              <Link to="/">Retour</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryPage;

/*import { Link } from "react-router-dom";

function InventoryPage() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="  bg-gradient-to-r from-cyan-500 to-blue-500 w-9/12 px-28 ">
          <div className="text-4xl font-extrabold text-white py-10 ">
            <h2 className="text-center">Inventaire</h2>
          </div>
          <div className="container pb-10">
            <div className="grid grid-rows-4 grid-flow-col gap-24 ">
              {/*grid-rows-2 pas mal aussi*
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
              <div className="bg-white rounded-lg px-3 py-3"></div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to="/">Retour</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryPage;
*/
