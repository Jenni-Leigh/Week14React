

import ItemListImage from "./assets/laundry.avif"
import ItemListImage2 from "./assets/dishes.jpg"
import ItemListImage3 from "./assets/vacuuming.jpg"


export default function Thumbnails() {
  
    return (

        <div className="container-sm">
        <div className="border-end bg-light p-3">
            
           
    <>
        <span>1</span><br />
        <img src={ItemListImage} onClick={() => alert("Laundry")} className="img-thumbnail w-50" ></img>
        <span>2</span>
        <img src={ItemListImage2} onClick={() => alert("Dishes")}className="img-thumbnail w-50" ></img>
        <span>3</span>
        <img src={ItemListImage3} onClick={() => alert("Vacuuming")} className="img-thumbnail w-50"></img>
    </>
    </div>
    </div>
    )
}