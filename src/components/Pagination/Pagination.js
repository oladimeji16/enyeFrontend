import React from "react";

const Pagination = ({ profilesPerPage, totalProfiles, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
          {pageNumber.map(no => (
              <li className="page__item">
                  <a href="" onClick={() => paginate(no)} className="link">
                      {no}
                  </a>
              </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
