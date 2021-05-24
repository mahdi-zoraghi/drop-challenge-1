import styled from "styled-components"
import { makeStyles } from "@material-ui/core"

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const Spacer = styled.div`
  flex-grow: 1;
`

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))
