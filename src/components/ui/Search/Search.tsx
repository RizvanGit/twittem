import { ISearchProps } from "@/types";
import { FC } from "react";
import { BsSearch } from "react-icons/bs";

const Search: FC<ISearchProps> = ({ className }) => {
  return (
    <div className={`${className} rounded-xl`}>
      <input
        id="searchTwittem"
        type="text"
        placeholder="Search Twittem"
        className="w-full h-full peer rounded-3xl py-3 px-10 outline-none bg-neutral-900 border-2 focus:border-primary/90 focus:shadow-b focus:bg-black border-transparent"
      />
      <label
        htmlFor="searchTwittem"
        className="absolute top-0 left-0 text-gray-400 peer-focus:text-primary h-full flex items-center pl-3 justify-center"
      >
        <BsSearch className="w-5 h-5" />
      </label>
    </div>
  );
};

export default Search;
