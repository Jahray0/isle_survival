import Level from "../../components/Level/Level";
import Stats from "../../components/Stats/Stats";
import Menu from "../../components/Menu/Menu";
import OutputBox from "../../components/OutputBox/OutputBox";
import ActionImage from "../../components/ActionImage/ActionImage";
import Map from "../../components/Map/Map";
import InputBox from "../../components/InputBox/InputBox";
import Controls from "../../components/Controls/Controls";

function HomePage() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className=" flex bg-gradient-to-r from-cyan-500 to-blue-500 w-9/12 flex-row justify-evenly">
          <div className="flex-col w-2/12 flex justify-between mt-16 mb-16">
            <div className="bg-white  p-2 rounded-md ">
              <Level />
            </div>
            <div className="bg-white  p-2 rounded-md ">
              <Stats />
            </div>
            <div className="bg-white  p-2 rounded-md h-3/6 ">
              <Menu />
            </div>
          </div>

          <div className="flex flex-col w-5/12 justify-between mt-16 mb-16">
            <div className="flex  bg-white  p-4 rounded-md justify-center">
              <OutputBox />
            </div>
            <div className="flex  bg-white  rounded-md">
              <ActionImage />
            </div>
          </div>

          <div className="flex-col w-3/12 flex justify-between mt-16 mb-16">
            <div className=" bg-white  rounded-md ">
              <Map />
            </div>
            <div className=" bg-white p-2 rounded-md">
              <InputBox />
            </div>
            <div className=" bg-white p-2 rounded-md">
              <Controls />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
