import styled from 'styled-components';

export const TableStyle = styled.table`
    @font-face {
    font-family: heebofont;
    src: url('./heebo.regular.ttf');
    }

    border: 1px solid #CFD2D4;
    border-collapse: collapse;
    width: 100%;
    /* border-radius: 10px; */
    

    thead{
        height: 60px;
        background-color: #CFD2D4;
    }

    th{
        font-family: heebofont;
        &:nth-child(2), &:nth-child(3){
            text-align: left;
        }
    }
`

export const RowStyle = styled.tr`
    @font-face {
    font-family: heebofont;
    src: url('./heebo.regular.ttf');
    }

    td{
        border-bottom: 1px solid #C7CBCD;
        font-family: heebofont;
        color: #121E2A;
        font-weight: bold;
        padding: 20px 0px;
    

        &:first-child, &:last-child{
        text-align: center;
        }
    }
    
    

    button{
        border: none;
        margin-right: 5px;
        padding: 10px 20px;
        border-radius: 2px;
    }

    input{
        height: 24px;
        width: 24px;
    }
`
export const Screen = styled.div`
    width: calc(100% - 250px);
    margin-left: 170px;
`