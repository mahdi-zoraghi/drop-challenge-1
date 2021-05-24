import { Link } from "react-router-dom"
import {
  AppBar as MUIAppBar,
  IconButton,
  Toolbar,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import {
  ShoppingCart as ShoppingCartIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@material-ui/icons"

import { Wrapper, Spacer, useStyles } from "./AppBar.styles"

const AppBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MUIAppBar position="static">
        <Toolbar>
          <Wrapper>
            <ListItem button component={Link} to="/">
              <ListItemText primary="All Drinks" />
            </ListItem>
            <ListItem button component={Link} to="/match-with-pizza">
              <ListItemText primary="With Pizza" />
            </ListItem>
            <ListItem button component={Link} to="/match-with-steak">
              <ListItemText primary="With Steak" />
            </ListItem>
            <Spacer />
            <Link to="/cart">
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Link>
            <Link to="/favorite">
              <IconButton color="inherit">
                <FavoriteBorderIcon />
              </IconButton>
            </Link>
          </Wrapper>
        </Toolbar>
      </MUIAppBar>
    </div>
  )
}

export default AppBar
