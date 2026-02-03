export default function SearchBar({ onSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
