import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { CssBaseline } from "@material-ui/core"

import MainLayout from "./layouts/MainLayout"
import Router from "./Router"
import GlobalStyle from "./styles/global"

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainLayout>
            <Router />
          </MainLayout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
