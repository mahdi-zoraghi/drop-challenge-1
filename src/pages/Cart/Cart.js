import { useEffect, useState } from "react"
import Cookies from "js-cookie"

import { Drinks } from "../../components"

import { PriceBox } from "./Cart.styles"

import { oneDrink } from "../../api"

const Cart = () => {
  const [carts, setCarts] = useState([])
  const cartsId = Cookies.get("carts") || ""
  // const cartsId = cartsIdCookie.split(",");

  const getPrice = () => {
    const price = carts.reduce((prev, current) => {
      return prev + current.srm
    }, 0)
    return price
  }

  const closeHandler = drinkId => {
    const cartsArr = cartsId.split(" ")
    const index = cartsId.split(" ").indexOf(drinkId.toString())
    cartsArr.splice(index, 1)
    const newCarts = cartsArr.join(" ")
    Cookies.set("carts", newCarts, { expires: 7 })
    setCarts([])
  }

  useEffect(() => {
    if (cartsId) {
      const cookieCartList = cartsId.split(" ")
      cookieCartList.forEach(async cookieCart => {
        const cart = await oneDrink(cookieCart)
        setCarts(prev => [...prev, cart.data[0]])
      })
    }
  }, [cartsId])

  if (!carts || !carts[0]) return <h1>Cart is Empty</h1>

  return (
    <>
      <PriceBox>
        <h2>{getPrice()}$</h2>
      </PriceBox>
      <Drinks
        drinks={carts}
        modal={false}
        close={true}
        closeHandler={closeHandler}
      />
    </>
  )
}

export default Cart
