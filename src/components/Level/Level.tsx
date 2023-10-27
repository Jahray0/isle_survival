import ProgressBar from "../ProgressBar/ProgressBar";

function Level() {
  return (
    <>
      <div>
        <h3 className="text-center">Niveau</h3>
        <p>Level : 1</p>
        <ProgressBar percentage={50} color="blue" />
      </div>
    </>
  );
}

export default Level;
