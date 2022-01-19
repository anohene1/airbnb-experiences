import Card from "./Card";
import data from '../data'
// import katieZaferes from '../../public/images/katie-zaferes.png';


function Cards() {
    const cards = data.map(card => {
        return (
            <Card
                key={card.id}
                {...card}
            />
        );
    })
    return (
        <div className='cards'>
            {cards}
        </div>
    );
}

export default Cards;