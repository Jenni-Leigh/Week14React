import Sidebar from "./Sidebar"
import ItemList from "./ItemList";


export default function App() {
  return (
    
  <div className="text-center container-fluid">
    <h1>What do I need to do?</h1>
    <Sidebar onClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>
    <ItemList/>

    </div>
    )
}