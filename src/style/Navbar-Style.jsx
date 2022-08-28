import styled from "styled-components";

const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #e7e7e7;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3rem;
    .navbar-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    .navbar-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 100%;
        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }
    .navbar-search {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 100%;
        @media (max-width: 768px) {
            width: 70%;
           
                
        }
        input {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            border: none;
            border-radius: .5rem 0 0 .5rem;
            padding: 0.5rem;
            background-color: #f5f5f5;
            font-size: 1rem;
            color: #000;
            margin-right: 0rem;
            outline: none;
        }
        button {
            display: flex;
            align-items: center;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            border: none;
            border-radius: 0 .5rem .5rem 0;
            padding: 0.5rem;
            background-color: #f5f5f5;
            font-size: 1rem;
            color: #000;
            margin-right: 3rem;
            outline: none;
            cursor: pointer;
        }
    }
`;
export {NavbarStyle};