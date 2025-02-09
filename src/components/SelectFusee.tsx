interface SelectFuseeProps {
  setFusee: (i: number) => void;
}

export const SelectFusee: React.FC<SelectFuseeProps> = ({setFusee}) => {
  return (
    <div className="flex gap-5 justify-center">
      <select
        onChange={(value) => setFusee(value.target.value as unknown as number)}
        className="w-[80vw] rounded-full bg-gray-200 p-1 flex justify-between pr-3"
      >
        <option value={0}>Artemis</option>
        <option value={1}>Starship</option>
        <option value={2}>Atlas V</option>
        <option value={3}>Falcon 9</option>
      </select>
    </div>
  );
}
