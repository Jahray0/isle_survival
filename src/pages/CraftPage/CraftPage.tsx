import { Link } from "react-router-dom";
import image1 from "../../assets/campfire.png";

function CraftPage() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="  bg-gradient-to-r from-cyan-500 to-blue-500 w-9/12 px-28 ">
          <div className="text-4xl font-extrabold text-white py-10 ">
            <h2 className="text-center">Craft</h2>
          </div>
          <div className="container pb-10">
            <div className="grid grid-rows-3 grid-flow-col gap-24 ">
              {/*grid-rows-2 pas mal aussi*/}
              <div className="bg-white rounded-lg px-3 py-3">
                <div>Nom du craft</div>
                <div className="flex justify-between">
                  {/*red*/}
                  <div className="w-6/12">
                    {/*green*/}
                    <img src={image1} className="rounded-md w-28 " />
                  </div>
                  <div className="flex flex-col justify-between">
                    {/*green*/}
                    <div className="objets ">
                      <div>objet 1 : 15/5</div>
                      <div>objet 2 : 23/2 </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Fabriquer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg px-3 py-3">
                <div>Nom du craft</div>
                <div className="flex justify-between">
                  {/*red*/}
                  <div className="w-6/12">
                    {/*green*/}
                    <img src={image1} className="rounded-md w-28 " />
                  </div>
                  <div className="flex flex-col justify-between">
                    {/*green*/}
                    <div className="objets ">
                      <div>objet 1 : 15/5</div>
                      <div>objet 2 : 23/2 </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Fabriquer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg px-3 py-3">
                <div>Nom du craft</div>
                <div className="flex justify-between">
                  {/*red*/}
                  <div className="w-6/12">
                    {/*green*/}
                    <img src={image1} className="rounded-md w-28 " />
                  </div>
                  <div className="flex flex-col justify-between">
                    {/*green*/}
                    <div className="objets">
                      <div>objet 1 : 15/5</div>
                      <div>objet 2 : 23/2 </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Fabriquer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg px-3 py-3">
                <div>Nom du craft</div>
                <div className="flex justify-between">
                  {/*red*/}
                  <div className="w-6/12">
                    {/*green*/}
                    <img src={image1} className="rounded-md w-28 " />
                  </div>
                  <div className="flex flex-col justify-between">
                    {/*green*/}
                    <div className="objets">
                      <div>objet 1 : 15/5</div>
                      <div>objet 2 : 23/2 </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Fabriquer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg px-3 py-3">
                <div>Nom du craft</div>
                <div className="flex justify-between">
                  {/*red*/}
                  <div className="w-6/12">
                    {/*green*/}
                    <img src={image1} className="rounded-md w-28 " />
                  </div>
                  <div className="flex flex-col justify-between">
                    {/*green*/}
                    <div className="objets">
                      <div>objet 1 : 15/5</div>
                      <div>objet 2 : 23/2 </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Fabriquer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg px-3 py-3">
                <div>Nom du craft</div>
                <div className="flex justify-between">
                  {/*red*/}
                  <div className="w-6/12">
                    {/*green*/}
                    <img src={image1} className="rounded-md w-28 " />
                  </div>
                  <div className="flex flex-col justify-between">
                    {/*green*/}
                    <div className="objets">
                      <div>objet 1 : 15/5</div>
                      <div>objet 2 : 23/2 </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Fabriquer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

export default CraftPage;
