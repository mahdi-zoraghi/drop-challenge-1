import { useQuery } from "react-query"

import { Drinks } from "../../components"

import { allDrinks } from "../../api"

const AllDrinks = () => {
  const { isLoading, data } = useQuery("allDrink", allDrinks)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <Drinks drinks={data?.data} />
}

export default AllDrinks
