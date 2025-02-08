import imageCO2 from "./images/co2.svg";

interface BarreCO2Props {
  utilise: number;
  limite: number;
}

export function BarreCO2({ utilise, limite }: BarreCO2Props) {
  return (
    <div className="flex gap-5 justify-center">
      <img src={imageCO2} alt="CO2" className="w-12" />
      <div className="w-[80vw] rounded-full bg-gray-200 p-1 flex justify-between pr-3">
        <div style={{ width: (utilise / limite) * 100 + "%" }} className="bg-[#910000] h-full rounded-full mr-3">
          <p className="pl-3 text-white whitespace-nowrap">{utilise}T CO2</p>
        </div>
        <p className="pl-3 text-[#910000] border-l-3 whitespace-nowrap">{limite}T CO2 MAX</p>
      </div>
    </div>
  );
}
