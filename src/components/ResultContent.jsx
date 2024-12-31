const ResultContent = ({ totalResults }) => {
  return (
    <div className="text-sm text-slate-400">
      <label>Menampilkan : {totalResults} hasil pencarian</label>
    </div>
  );
};
export default ResultContent;
