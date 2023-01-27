import { FaSearch } from "react-icons/fa";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ value, onChange }: SearchInputProps): JSX.Element => {
  return (
    <div>
      <input type="text" placeholder="search by name..." value={value} onChange={onChange} />
      <FaSearch color="#09f" />
    </div>
  );
};

export default SearchInput;
