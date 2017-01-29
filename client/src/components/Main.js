var React = require('react');
var NavContainer = require('../containers/NavContainer');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <NavContainer/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;