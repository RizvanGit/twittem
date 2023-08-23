import { FC } from "react";

import { IButtonPrimeProps } from "@/types";
import { BsTwitter } from "react-icons/bs";

const ButtonPrime: FC<IButtonPrimeProps> = ({
  title,
  className,
  type,
  onClick,
  isTwitterLogo,
}) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`rounded-full flex items-center justify-center bg-primary text-center hover:bg-opacity-80 transition duration-200 ${className}`}
    >
      {isTwitterLogo && <BsTwitter />}
      {!isTwitterLogo && title}
    </button>
  );
};

export default ButtonPrime;
