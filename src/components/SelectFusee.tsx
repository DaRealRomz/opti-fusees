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
        <option value={0}>Fusée 1</option>
        <option value={1}>Fusée 2</option>
        <option value={2}>Fusée 3</option>
      </select>
    </div>
  );
}
