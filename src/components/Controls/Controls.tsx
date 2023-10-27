function Controls() {
  return (
    <>
      <div className="flex">
        <div className="flex-col w-1/2 h-40 m-1 ">
          <div className="border w-16">Haut</div>
          <div className="border w-16">Droite</div>
          <div className="border w-16">Gauche</div>
          <div className="border w-16">Bas</div>
        </div>

        <div className="flex-col w-1/2 m-1 bg-black">
          <div className="border w-16 text-white">Valider</div>
          <div className="border w-16 text-white">Annuler</div>
        </div>
      </div>
    </>
  );
}

export default Controls;
