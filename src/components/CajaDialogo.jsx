const CajaDialogo = ({ dialogo }) => {
  return (
    <div
      className="w-10/12 p-4 mx-auto bg-white border-4 border-black border-double my-7"
      id="caja_dialogo"
    >
      <div>
        <p className="text-xs">{dialogo}</p>
      </div>
      <br />
      <div className="flex justify-end">
        <div className="right-0 animate-bounce">
          <svg viewBox="0 0 10 10" width="24" height="10">
            <polygon points="0,0 10,0 5,10" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CajaDialogo;
