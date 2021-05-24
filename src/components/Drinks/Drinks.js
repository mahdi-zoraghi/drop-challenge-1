import { useState } from "react"
import { Button } from "@material-ui/core"
import { v4 as uuIdv4 } from "uuid"
import { ArrowUpward, ArrowDownward } from "@material-ui/icons"

import { Drink, DrinkModal } from "../"

import { Wrapper, ButtonsList } from "./Drinks.styles"

const Drinks = ({ drinks, modal, ...props }) => {
  const [drink, setDrink] = useState({})
  const [activeSorted, setActiveSorted] = useState(0)

  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(prev => !prev)

  const openModalHandler = drink => {
    setDrink(drink)
    toggleModal()
  }

  const sortByAbvDescending = () => {
    drinks.sort((a, b) => b.abv - a.abv)
    setActiveSorted(1)
  }

  const sortByAbvAscending = () => {
    drinks.sort((a, b) => a.abv - b.abv)
    setActiveSorted(2)
  }

  const sortByNameDescending = () => {
    drinks.sort((a, b) => a.name.localeCompare(b.name))
    setActiveSorted(3)
  }

  const sortByNameAscending = () => {
    drinks.sort((a, b) => b.name.localeCompare(a.name))
    setActiveSorted(4)
  }

  return (
    <>
      <ButtonsList>
        <Button
          color={activeSorted === 1 ? "primary" : "default"}
          variant={activeSorted === 1 ? "contained" : "text"}
          onClick={sortByAbvDescending}
        >
          ABV <ArrowUpward />
        </Button>
        <Button
          color={activeSorted === 2 ? "primary" : "default"}
          variant={activeSorted === 2 ? "contained" : "text"}
          onClick={sortByAbvAscending}
        >
          ABV <ArrowDownward />
        </Button>
        <Button
          color={activeSorted === 3 ? "primary" : "default"}
          variant={activeSorted === 3 ? "contained" : "text"}
          onClick={sortByNameDescending}
        >
          Name <ArrowUpward />
        </Button>
        <Button
          color={activeSorted === 4 ? "primary" : "default"}
          variant={activeSorted === 4 ? "contained" : "text"}
          onClick={sortByNameAscending}
        >
          Name <ArrowDownward />
        </Button>
      </ButtonsList>
      <Wrapper>
        {drinks?.map(drink => (
          <Drink
            key={uuIdv4()}
            drink={drink}
            openModal={openModalHandler}
            {...props}
          />
        ))}
      </Wrapper>
      {modal && (
        <DrinkModal open={openModal} onClose={toggleModal} drink={drink} />
      )}
    </>
  )
}

Drinks.defaultProps = {
  modal: true,
}

export default Drinks
