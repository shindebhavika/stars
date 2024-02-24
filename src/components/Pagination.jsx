import React from 'react';

const Pagination = ({ currentPage, hasNextPage, handleNextPage, handlePrevPage }) => {
  return (
    <nav aria-label="Page navigation example" className="w-full flex justify-center mt-5">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={handlePrevPage}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={handlePrevPage}>
            {currentPage - 1}
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#" onClick={handlePrevPage}>
            {currentPage}
          </a>
        </li>
        {hasNextPage && (
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNextPage}>
              {currentPage + 1}
            </a>
          </li>
        )}
        <li className={`page-item ${!hasNextPage ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={handleNextPage} disabled={!hasNextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
