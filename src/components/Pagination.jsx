import React from "react";
import styled from "styled-components";

const Paginationn = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;



const Pagination = (props) => {
    const { page, totalPages, onLeftClick, onRightClick } = props
    return (
        <Pagination>
            <button onClick={onLeftClick}>
                <div>
                    ◀️
                </div>
            </button>
            <div>
                {page} of {totalPages}
            </div>
            <button onClick={onRightClick}>
                <div>
                    ▶️
                </div>
            </button>
        </Pagination>
    )
}

export default Pagination;