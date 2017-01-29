var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var NavContainer = require('../containers/NavContainer');
var HeaderBarContainer = require('../containers/HeaderBarContainer');
var ConcertListContainer = require('../containers/ConcertListContainer');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <HeaderBarContainer/>
        <ConcertListContainer/>
        <div className='footer'></div>
      </div>
    )
  }
});

module.exports = Home;