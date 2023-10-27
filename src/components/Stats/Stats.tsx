import ProgressBar from "../ProgressBar/ProgressBar";

function Stats() {
  return (
    <>
      <div className=" ">
        <h3 className="text-center">Stats</h3>
        <div>
          <p>Santé : </p>
          <ProgressBar percentage={100} color="red" />
        </div>
        <div>
          <p>Faim : </p>
          <ProgressBar percentage={75} color="green" />
        </div>
        <div>
          <p>Soif : </p>
          <ProgressBar percentage={50} color="rgb(248,214,163)" />
        </div>
        <div>
          <p>Energie : </p>
          <ProgressBar percentage={25} color="yellow" />
        </div>
      </div>
    </>
  );
}

export default Stats;
