import styled from "styled-components"
import { Paper as MUIPaper } from "@material-ui/core"

export const Paper = styled(MUIPaper)`
  width: 80%;
  height: 90vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  /* padding: 10px; */
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  div {
    flex-grow: 1;
    display: flex;
    align-items: baseline;
  }
  h3 {
    color: rgba(0, 0, 0, 0.7);
  }
`

export const Content = styled.div`
  display: flex;
  /* position: relative; */

  & > div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 16px;
    }
  }
`

export const Image = styled.img`
  padding: 10px;
  /* width: 30%; */
  width: 130px;
  /* height: 100%; */
  object-fit: contain;
  background-position: center;
  background-size: cover;
`
