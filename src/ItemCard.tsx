export default function ItemCard() {
    let cardHeight=200
    let cardWidth=200
    return <div className="row justify-content-evenly mt-5">
    <div className="card" style={{width: cardWidth, height: cardHeight}}>
        <img src="https://compote.slate.com/images/15998150-bdc4-4888-8a80-413cafcbdee0.jpeg?crop=1560%2C1040%2Cx0%2Cy0" className="card-img-top" alt="..."></img>
        <div className="row justify-content-evenly mt-5">
            <p className="card-text">Laundry</p>
        </div>
</div>     
    </div>
}


