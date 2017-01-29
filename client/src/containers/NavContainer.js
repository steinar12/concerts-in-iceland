var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MyteamContainer = require('../containers/MyteamContainer');
var Nav = require('../components/Nav');

var NavContainer = React.createClass({
  render: function () {
    return (
      <div className='nav-container'>
        <Nav/>
      </div>
    )
  }
});

module.exports = NavContainer;