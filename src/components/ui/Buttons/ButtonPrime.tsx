import { FC } from "react";

import { IButtonPrimeProps } from "@/types";

const ButtonPrime: FC<IButtonPrimeProps> = ({
  title,
  className,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`rounded-full bg-primary text-center hover:bg-opacity-80 transition duration-200 ${className}`}
    >
      {title}
    </button>
  );
};

export default ButtonPrime;
