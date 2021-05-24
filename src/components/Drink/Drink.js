import { IconButton } from "@material-ui/core"
import { Close as CloseIcon } from "@material-ui/icons"

import { Wrapper, Image } from "./Drink.styles"

const Drink = ({ drink, openModal, close, closeHandler }) => {
  const description =
    drink.description.length > 264
      ? `${drink.description.slice(1, 260)}...`
      : drink.description

  return (
    <Wrapper onClick={() => openModal(drink)}>
      <Image src={drink.image_url} alt={drink.name} />
      <div>
        <div>
          <h2>{drink.name}</h2>
          {close && (
            <IconButton onClick={() => closeHandler(drink.id)}>
              <CloseIcon />
            </IconButton>
          )}
        </div>
        <p>{description}</p>
      </div>
    </Wrapper>
  )
}

export default Drink
