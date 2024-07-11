import SearchIcon from "@/assets/icons/search";

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput = ({ value, setValue }: SearchInputProps) => {
  return (
    <div className="flex items-center gap-x-6 border border-white rounded-[45px] px-4 py-2">
      <span className="">
        <SearchIcon />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-red-500 w-[248px] h-10 placeholder-white text-white text-lg font-normal border-none bg-transparent outline-none focus:ring-0"
        placeholder="Поиск..."
      />
    </div>
  );
};
