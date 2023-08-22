import { FC } from "react";

const Tweet: FC = () => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="px-4 border-y-1"></div>
      ))}
    </div>
  );
};

export default Tweet;
