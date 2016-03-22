var React = require('react');

var App = React.createClass({
  render: function() {
    var entries = []
    this.props.episodes.map((episode) => {
      entries.push(
        <article>
          <h1>Hello {episode.title}</h1>
          <span>{episode.date}</span>
          <span>{episode.author}</span>
          <div>{episode.excerpt}</div>
          <iframe width='100%' height='166' scrolling='no' frameBorder='no' src={episode.embed}></iframe>
          <div>{episode.content}</div>
          <h2>Show Notes:</h2>
          <ul>
            <li>{episode.notes}</li>
          </ul>
        </article>
      )
    })

    return (
      <div>{entries}</div>
    )
  }
});

module.exports = App;
