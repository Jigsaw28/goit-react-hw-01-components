import styled from "styled-components";

export const TableTransactions = styled.table`
width: 450px;
text-align: center;
border-radius: 10px;
box-shadow: 2px 5px 5px silver;
`

export const HeadTransactions = styled.thead`
   background-color: skyblue;
`

export const ColHead = styled.th`
    padding: 10px 0;
    font-size: 13px;
    color: #fff;
    text-transform: uppercase;
`
export const ColBody = styled.tr`
    text-transform: capitalize;
    color: #919191;

    &:nth-child(even) {
        background-color: #c5e2e2
    }
`
export const RowBody = styled.td`
    padding: 10px 0;
`
