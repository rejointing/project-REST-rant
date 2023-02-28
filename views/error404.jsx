const React = require('react')

const Def = require('./layouts/default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry we can't find this page!</p>
                <div>
                <img src="/images/ruh-roh.jpg" alt="Ruh-Roh"/>
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@woooooooooof?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">wooof woof</a> on <a href="https://unsplash.com/s/photos/silly-dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404