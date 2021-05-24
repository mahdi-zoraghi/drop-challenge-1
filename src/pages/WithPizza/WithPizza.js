import { useQuery } from "react-query"

import { Drinks } from "../../components"

import { matchWithPizza } from "../../api"

const WithPizza = () => {
  const { isLoading, data } = useQuery("withPizza", matchWithPizza)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <Drinks drinks={data?.data} />
}

export default WithPizza
