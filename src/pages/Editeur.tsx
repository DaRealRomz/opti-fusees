import { BarreCO2 } from "../components/BarreCO2";

export function Editeur() {
  return (
    <div className="w-full h-screen bg-linear-to-b from-[#51B6FF] to-[#92FFFD]">
      <div className="py-4">
        <BarreCO2 limit="8T CO2 MAX" progres={0.5} />
      </div>
    </div>
  );
}
