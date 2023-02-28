const React = require('react')

const Def = require('./layouts/default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
                <div>
                    <img src="/images/ftoast.jpg" alt="Yummy French Toast"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}


module.exports = home

