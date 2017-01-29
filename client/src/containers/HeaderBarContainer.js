var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HeaderBar = require('../components/HeaderBar');

var HeaderBarContainer = React.createClass({
  render: function () {
    return (
      <div className='headerbar-container'>
        <HeaderBar/>
      </div>
    )
  }
});

module.exports = HeaderBarContainer;