import imageCO2 from "./images/co2.svg";

interface BarreCO2Props {
  progres: number;
  limit: string;
}

export function BarreCO2({ progres, limit }: BarreCO2Props) {
  return (
    <div className="w-full flex gap-5">
      <img src={imageCO2} alt="CO2" className="w-12" />
      <div className="w-[80vw] rounded-full bg-gray-200 p-1 flex justify-between pr-3">
        <div style={{ width: progres * 100 + "%" }} className="bg-[#910000] h-full rounded-full mr-3"></div>
        <p className="pl-3 text-[#910000] border-l-3 whitespace-nowrap">{limit}</p>
      </div>
    </div>
  );
}
