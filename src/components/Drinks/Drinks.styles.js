import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  padding: 30px 15px;
`

export const ButtonsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
`
