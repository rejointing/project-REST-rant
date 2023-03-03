const React = require('react')

const Def = require('../layouts/default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.comment.id}?_method=POST` }>
                    <div className="form-group">
                        <label htmlFor="Author">Author</label>
                        <input className="form-control" id="author" name="author" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Content">Content</label>
                        <input className="form-control" id="content" name="content" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Star Rating">Star Rating</label>
                        <input className="form-control" id="starRating" name="starRating" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Rant">Rant</label>
                        <input className="form-control" id="rant" name="rant" required />
                    </div>
                    <button type="submit" className=" btn btn-comment">
                        Comment
                    </button>
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                    <h2>
                        Description
                    </h2>
                    <h3> 
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                <h1>{ data.place.name }</h1>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE` }>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                </div>
                </div>
                <h2>Comments</h2>
                {comments}
            </main>
        </Def>
    )
}

module.exports = show
