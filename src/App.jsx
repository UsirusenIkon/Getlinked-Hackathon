import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";
import "./App.css"

export default function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
