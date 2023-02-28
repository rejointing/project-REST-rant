const React = require('react')

const Def = require('../layouts/default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="container">
                <div className="row">
            <div className="col-2">
                <h2>{place.name}</h2>
                <p>
                    {place.cuisines}
                    </p>
                <img src={place.pic} alt={place.name} />
                </div>
                <div className="col-2">
                <p>
                    Located in {place.city}, {place.state}
                </p>
                </div>
                </div>
                </div>
        )
    })
    return ( 
        <Def> 
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                    </div>
                    </main>
                    </Def>
    )
    }


module.exports = index