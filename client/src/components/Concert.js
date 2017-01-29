var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Concert = React.createClass({
  render: function () {

  	var date = new Date(this.props.date).toString().substring(0,21);

    return (
      <div className='concert-wrapper'>
        <div className='concert-spacing'>
        </div>
        <div className='concert'>
          <div className='concert-img-wrapper'>
            <img src={this.props.img}/>
          </div>
          <div className='concert-info-wrapper'>
            <div>
              <p className='concert-performer'>{this.props.eventName}</p>
              <p className='concert-venue'>{this.props.venue}</p>
            </div>
            <p className='concert-date'>{date}</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Concert;