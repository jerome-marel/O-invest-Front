interface NumberDisplayProps {
  value: number;
}

const NumberDisplay = ({ value }: NumberDisplayProps) => {
  const textColorClass = value >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <p className={`text-lg ${textColorClass}`}>
      {value >= 0 ? `$${value}` : `-$${Math.abs(value)}`}
    </p>
  );
};

export default NumberDisplay;