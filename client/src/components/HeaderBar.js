var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HeaderBar = React.createClass({
  render: function () {
    return (
      <div className='headerbar'>
        <h1>/ Allir tónleikar</h1>
      </div>
    )
  }
});

module.exports = HeaderBar;