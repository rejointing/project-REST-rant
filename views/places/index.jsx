const React = require('react')

const Def = require('../layouts/default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
            )
    })

    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )

    }

//function index (html) {
  //  return (
    //    <Def>
      //      <main>
        //        <h1>INDEX</h1>
          //  </main>
        //</Def>
    //)
//}

module.exports = index