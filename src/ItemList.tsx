import ItemListImage from "./assets/laundry.avif"
import ItemListImage2 from "./assets/dishes.jpg"
import ItemListImage3 from "./assets/vacuuming.jpg"


export default function ItemList() {
  
    return (

        <div className="container-sm">
        <div className="border-end bg-light p-3">
            
           
    <>
        <span>1</span>
        <img src={ItemListImage} onClick={() => alert("Laundry")} className="img-thumbnail" ></img>
        <span>2</span>
        <img src={ItemListImage2} onClick={() => alert("Dishes")}className="img-thumbnail" ></img>
        <span>3</span>
        <img src={ItemListImage3} onClick={() => alert("Vacuuming")} className="img-thumbnail"></img>
    </>
    </div>
    </div>
    )
}