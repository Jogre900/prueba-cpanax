import { FaSearch } from "react-icons/fa";
import { colors } from "../../../../config/layout/theme";
import "./styles.css";
type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string | undefined;
};

const SearchInput = ({ value, onChange, className }: SearchInputProps): JSX.Element => {
  return (
    <div className={"search-btn " + className}>
      <input type="text" placeholder="Search by name..." value={value} onChange={onChange} />
      <FaSearch color={colors.secondary} />
    </div>
  );
};

export default SearchInput;
