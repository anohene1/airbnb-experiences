// import star from '../../public/images/star.svg';

function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'sold out';
    } else if (props.location === 'Online') {
        badgeText = 'online'
    }
    return (
        <div className='card'>
            <img src={`../images/${props.coverImg}`} alt="" className="card--image"/>
            <div className="card--stats">
                <img src='../images/star.svg' alt="" className="rating--star"/>
                <span className="rating--number">{props.stats.rating}</span>
                <span className="rating--quantity">({props.stats.reviewCount})</span>
                <span className="rating--location"> • {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="card--price">From ${props.price}</span> / person</p>
            {badgeText && <div className="card--status">
                <p>{badgeText}</p>
            </div>}
        </div>
    );
}

export default Card;