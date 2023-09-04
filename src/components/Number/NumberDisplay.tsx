interface NumberDisplayProps {
  value: number;
}

const NumberDisplay = ({ value }: NumberDisplayProps) => {
  const textColorClass = value >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <span className={`text-lg ${textColorClass}`}>
  {value >= 0 ? `$${value}` : `-$${Math.abs(value)}`}
</span>

  );
};

export default NumberDisplay;