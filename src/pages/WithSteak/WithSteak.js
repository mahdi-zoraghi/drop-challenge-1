import { useQuery } from "react-query"

import { Drinks } from "../../components"

import { matchWithSteak } from "../../api"

const WithSteak = () => {
  const { isLoading, data } = useQuery("withSteak", matchWithSteak)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <Drinks drinks={data?.data} />
}

export default WithSteak
