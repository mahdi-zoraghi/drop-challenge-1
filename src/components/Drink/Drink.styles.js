import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: #ffffff;
  border: 2px solid rgba(255, 255, 250, 0.7);
  height: 250px;
  /* height: max-content; */
  display: flex;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    border: 2px solid rgba(255, 255, 250, 0.3);
    /* background-color: rgba(255,255,255,); */
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3);
  }

  div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    h2 {
      margin: 0;
      padding: 0;
      margin-top: 20px;
    }

    p {
      padding: 10px;
    }
  }
`

export const Image = styled.img`
  width: 50%;
  height: 100%;
  padding: 10px;
  object-fit: contain;
  background-position: center;
  background-size: cover;
`
