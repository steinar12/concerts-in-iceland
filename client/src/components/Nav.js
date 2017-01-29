var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MyteamContainer = require('../containers/MyteamContainer');

var Nav = React.createClass({
  render: function () {
    return (
      <div className='nav'>
        <div className='title'>
          <p>Tónleikar á íslandi  -  React</p>
        </div>
        <div className='buttons'>
          <Link to='/'>
            <button type='button' className='btn'>
              <i className='fa fa-search fa-2x' aria-hidden='true'></i>
            </button>
          </Link>
          <Link to='/'>
            <button type='button' className='btn'>
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </button>
          </Link>
        </div>
      </div>
    )
  }
});

module.exports = Nav;