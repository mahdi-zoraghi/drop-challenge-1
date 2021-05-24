import { useState, useEffect } from "react"
import Cookies from "js-cookie"

import { Drinks } from "../../components"

import { oneDrink } from "../../api"

const Favorite = () => {
  const [favorites, setFavorites] = useState([])
  const favoritesId = Cookies.get("favorite") || ""

  const closeHandler = drinkId => {
    const favoritesArr = favoritesId.split(" ")
    const index = favoritesId.split(" ").indexOf(drinkId.toString())
    favoritesArr.splice(index, 1)
    const newFavorites = favoritesArr.join(" ")
    Cookies.set("favorite", newFavorites, { expires: 7 })
    setFavorites([])
  }

  useEffect(() => {
    if (favoritesId) {
      const cookieFavoriteList = favoritesId.split(" ")
      cookieFavoriteList.forEach(async cookieFavorite => {
        const favorite = await oneDrink(cookieFavorite)
        setFavorites(prev => [...prev, favorite.data[0]])
      })
    }
  }, [favoritesId])

  if (!favorites || !favorites[0]) return <h1>Favorite is Empty</h1>

  return (
    <Drinks
      drinks={favorites}
      modal={false}
      close={true}
      closeHandler={closeHandler}
    />
  )
}

export default Favorite
