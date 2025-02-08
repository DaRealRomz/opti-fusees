interface SelectCarburantProps {
  setCarburant: (i: number) => void;
}

export const SelectCarburant: React.FC<SelectCarburantProps> = ({setCarburant}) => {
  return (
    <div className="flex gap-5 justify-center">
      <select
        onChange={(value) => setCarburant(value.target.value as unknown as number)}
        className="w-[80vw] rounded-full bg-gray-200 p-1 flex justify-between pr-3"
      >
        <option value={0}>Carburant 1</option>
        <option value={1}>Carburant 2</option>
        <option value={2}>Carburant 3</option>
      </select>
    </div>
  );
}
