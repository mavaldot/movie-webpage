import Card from 'react-bootstrap/Card'

const MovieCard = () => {
    return (
        <div className='card align-items-center'>
            <img src='https://www.simplyrecipes.com/thmb/MucVOpCgEUn7raPqkMVoMtr129g=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Perfect-Popcorn-LEAD-31-3af0091610534688987ea45b0efa472a.JPG' style={{ width: '60%', height: '50%'}} alt='popcorn'></img>
            <div className='card-body'>
                <div className='card-title'>Test</div>
                <p className='card-text'>Hello sirs</p>
            </div>
        </div>
    )
}

export default MovieCard