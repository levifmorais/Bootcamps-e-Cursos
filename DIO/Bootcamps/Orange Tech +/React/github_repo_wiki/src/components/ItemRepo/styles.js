import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    

    h3 {
        font-size: 32px;
        color: #FAFAFA;
        display: inline-block;
        margin-right: 10px;
    }

    .sub {
        font-size: 16px;
        color: #FAFAFA60;
    }
    
    .detail {
        margin-top: 10px;
        word-wrap: break-word;
    }

    img {
        border-radius: 50%;
        width: 30px;
        display: inline-block;
        border: 2px solid #FFFFFF;
        vertical-align: sub;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
        display: flex;
    }

    a.see {
        margin-top: 10px;
        color: lightblue;
    }

    a.remove {
        color: #c92c2c;
        margin-top: 5px
    }


    hr {
        color: #FAFAFA60;
        margin: 10px 0 10px 0;
    }
`