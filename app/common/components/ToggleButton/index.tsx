import Button from './styles';
interface ToggleProps {
  handleToggle: () => void;
};

const Toggle = ({ handleToggle }: ToggleProps) => {
  return (
    <Button onClick={() => handleToggle()} ></Button>
  );
};
export default Toggle;
