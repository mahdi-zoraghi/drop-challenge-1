import { AppBar } from "../components"

const MainLayout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  )
}

export default MainLayout
