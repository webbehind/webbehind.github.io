var React = require('react');

var App = React.createClass({
  render: function() {
    var entries = []
    this.props.episodes.map((episode) => {
      entries.push(
        <div>
          <div>Hello {episode.title}</div>
          <div>{episode.date}</div>
          <div>{episode.author}</div>
          <div>{episode.excerpt}</div>
          <div>{episode.embed}</div>
          <div>{episode.content}</div>
        </div>
      )
    })

    return (
      <div>{entries}</div>
    )
  }
});

module.exports = App;
