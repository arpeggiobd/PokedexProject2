import React from "react";
import styled from "styled-components";

function Pagination(props) {
    const { page, totalPages, onLeftClick, onRightClick } = props
    return (
        <PaginationDiv>
            <Button onClick={onLeftClick}>
                ◀️
            </Button>
            <div>
                {page} of {totalPages}
            </div>
            <Button onClick={onRightClick}>
                ▶️
            </Button>
        </PaginationDiv>
    )
}

const PaginationDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const Button = styled.button`
background-color: #363636;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Pagination;