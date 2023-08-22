export interface IButtonPrimeProps {
  className?: string;
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
