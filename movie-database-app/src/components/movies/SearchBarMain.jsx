import { FiSearch } from "react-icons/fi";
const SearchBarMain = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center w-full max-w-3xl mx-auto bg-[#3a1f47] rounded-md px-4 py-3 mt-6 justify-center"
    >
      <input
        type="text"
        placeholder="Search to discover movies"
        value={value}
        onChange={onChange}
        className="flex-grow bg-transparent outline-none !text-white placeholder-gray-300"
        style={{ color: "white" }}
      />
      <button type="submit" className="text-gray-300 hover:text-white">
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBarMain;
