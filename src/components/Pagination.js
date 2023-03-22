const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const col = {
    backgroundColor: "darkgray",
  };
  return (
    <div className="pages">
      {pageNumbers.map((page) => (
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            paginate(page);
          }}
          style={parseInt(page) === parseInt(currentPage) ? col : {}}
          className="page-no"
          key={page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
