import React from "react";

import NextArrow from "../static/images/page-arrow-right.png";
import PrevArrow from "../static/images/page-arrow-left.png";
import FirstArrow from "../static/images/page-arrow-first.png";
import LastArrow from "../static/images/page-arrow-last.png";

export const PaginationView = ({ totalPages, pageNumber, setPageNumber }) => {
    const pageNumbers = totalPages >= 1 ? [...Array(totalPages + 1)?.keys()]?.slice(1) : 0;

    const nextPage = () => {
        if (pageNumber !== totalPages - 1 && totalPages !== 1) setPageNumber(pageNumber + 1);
    };
    const prevPage = () => {
        if (pageNumber !== 0) setPageNumber(pageNumber - 1);
    };

    return (
        <>
            <nav>
                <ul>
                    <li className={pageNumber === 0 ? "cursor-no-drop" : ""
                    } onClick={() => setPageNumber(0)}   ><img src={FirstArrow} alt="FirstArrow" /></li>

                    <li className={pageNumber === 0 ? "cursor-no-drop" : ""
                    } onClick={prevPage}   ><img src={PrevArrow} alt="PrevArrow" /></li>

                    {pageNumbers?.length >= 0 && pageNumbers?.map((pgNumber) => (
                        <li
                            key={pgNumber}
                            className={pageNumber + 1 === pgNumber ? "active" : ""
                            }
                            onClick={() => setPageNumber(pgNumber - 1)}
                        >
                            {pgNumber}

                        </li>
                    ))}

                    <li className={pageNumber === totalPages - 1 ? "cursor-no-drop" : ""} onClick={nextPage}> <img src={NextArrow} alt="NextArrow" /> </li>

                    <li className={pageNumber === totalPages - 1 ? "cursor-no-drop" : ""} onClick={() => setPageNumber(totalPages - 1)}> <img src={LastArrow} alt="LastArrow" /> </li>
                </ul>

            </nav>
        </>
    );
};
