import { Modal, IconButton, Button } from "@material-ui/core";
import Cookies from "js-cookie";
import {
  ShoppingCart as ShoppingCartIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from "@material-ui/icons";

import { Paper, Title, Content, Image } from "./DrinkModal.styles";

const DrinkModal = ({ open, onClose, drink }) => {
  const favorite = Cookies.get("favorite") || "";
  const favoriteArr = favorite.split(" ");

  const addDrinkToCart = () => {
    const carts = Cookies.get("carts") || "";
    const newCarts = carts
      ? `${drink.id} ${carts}`.trim()
      : `${drink.id}`.trim();
    Cookies.set("carts", newCarts, { expires: 7 });
  };

  const addDrinkToFavorite = () => {
    const favorite = Cookies.get("favorite") || "";
    if (favorite.split(" ").indexOf(drink.id.toString()) === -1) {
      const newFavorite = favorite
        ? `${drink.id} ${favorite}`.trim()
        : `${drink.id}`.trim();
      Cookies.set("favorite", newFavorite, { expires: 30 });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Paper>
        <Title>
          <div>
            <h1>{drink.name}</h1> <h3>({drink.tagline})</h3>
          </div>
          ABV : {drink.abv}
          <IconButton onClick={addDrinkToFavorite}>
            {favoriteArr.indexOf("" + drink.id) === -1 ? (
              <FavoriteBorderIcon />
            ) : (
              <FavoriteIcon />
            )}
          </IconButton>
        </Title>
        <Content>
          <Image src={drink.image_url} alt={drink.name} />
          <div>
            <p>{drink.description}</p>
            <div>
              <h1>Price: {drink.srm}$</h1>
              <Button
                color="primary"
                variant="contained"
                onClick={addDrinkToCart}
              >
                Add To Cart <ShoppingCartIcon />
              </Button>
            </div>
          </div>
        </Content>
      </Paper>
    </Modal>
  );
};

export default DrinkModal;
