import { useRef, useEffect } from "react";

function CanvasMap() {
  const canvasRef = useRef(null);
  const cellMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 2, 3, 3, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 3, 3, 2, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const dessinerCarte = () => {
    const canvas = canvasRef.current;
    console.log(
      "🚀 ~ file: CanvasMap.tsx:19 ~ dessinerCarte ~ canvas:",
      canvas
    );

    //@ts-ignore
    const context = canvas.getContext("2d");
    console.log(
      "🚀 ~ file: CanvasMap.tsx:23 ~ dessinerCarte ~ context:",
      context
    );

    const widthTile = canvas.width / cellMap[0].length;
    console.log(
      "🚀 ~ file: CanvasMap.tsx:27 ~ dessinerCarte ~ widthTile:",
      widthTile
    );

    const heightTile = canvas.height / cellMap.length;
    console.log(
      "🚀 ~ file: CanvasMap.tsx:31 ~ dessinerCarte ~ heightTile:",
      heightTile
    );

    for (let y = 0; y < cellMap.length; y++) {
      for (let x = 0; x < cellMap[y].length; x++) {
        const terrain = cellMap[y][x];
        let couleur = "rgb(21,108,153)"; // Eau

        if (terrain === 1) couleur = "rgb(251,225,175)"; // Plage
        else if (terrain === 2) couleur = "rgb(102,148,42)"; // Plaine
        else if (terrain === 3) couleur = "rgb(0,67,55)"; // Forêt
        else if (terrain === 4) couleur = "rgb(126,112,104)"; // Montagne

        context.fillStyle = couleur;
        context.fillRect(x * widthTile, y * heightTile, widthTile, heightTile);
      }
    }
    console.log(
      "--------------------------------------------------",
      cellMap[0][0]
    );
  };

  useEffect(() => {
    dessinerCarte();
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}
export default CanvasMap;
