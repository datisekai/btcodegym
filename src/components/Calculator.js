import React, { useState } from "react";

const Calculator = () => {
  const [soA, setSoA] = useState("");
  const [soB, setSoB] = useState("");
  const [kq, setKq] = useState(0)
  const tong = () => {
    setKq(+soA + +soB);
  }
  const hieu = () => {
     setKq(+soA - +soB);
  }
  const tich = () => {
       setKq(+soA * +soB);
  }
  const thuong = () => {
       setKq(+soA / + soB);
  }
  return (
    <div className="min-h-screen bg-[#222]">
      <div className="w-[500px] mx-auto bg-violet-400">
      <input type="text" value={soA} onChange={(e) => setSoA(e.target.value)} />
      <br />
      <input type="text" className="mt-2" value={soB} onChange={(e) => setSoB(e.target.value)} />
      <h2>Result {kq}</h2>
      <div className="flex items-center justify-center">
        <button className="px-5 py-1 bg-blue-400 ml-1 transition-all hover bg-blue-600" onClick={tong}>+</button>
        <button className="px-5 py-1 bg-blue-400 ml-1 transition-all hover bg-blue-600" onClick={hieu}>-</button>
        <button className="px-5 py-1 bg-blue-400 ml-1 transition-all hover bg-blue-600" onClick={tich}>*</button>
        <button className="px-5 py-1 bg-blue-400 ml-1 transition-all hover bg-blue-600" onClick={thuong}>/</button>
      </div>
      </div>
    </div>
  );
};

export default Calculator;
