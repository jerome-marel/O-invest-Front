// Dans NumberPourcentDisplay.js
interface NumberPourcentDisplayProps {
  value: number;
}

const NumberPourcentDisplay = ({ value }: NumberPourcentDisplayProps) => {
  const textColorClass = value >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <span className={`text-lg ${textColorClass}`}>
      {value >= 0 ? `${value}%` : `-${Math.abs(value)}%`}
    </span>
  );
};

export default NumberPourcentDisplay;