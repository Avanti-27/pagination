const Pagination = ({ totalData, dataPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="text-center text-xl">
      {pages.map((page, index) => (
        <button
          className="px-4 py-2 border-2 border-black m-2 bg-black text-white"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
