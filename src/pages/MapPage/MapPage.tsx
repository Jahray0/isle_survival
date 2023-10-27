import { Link } from "react-router-dom";
import CanvasMap from "../../components/Map/CanvasMap";
function MapPage() {
  return (
    <>
      <h1>MapPage</h1>
      <div className="mb-10">Juste la page</div>
      <h1>MapPage</h1>
      <CanvasMap />
      <Link to="/">Retour</Link>
    </>
  );
}

export default MapPage;
