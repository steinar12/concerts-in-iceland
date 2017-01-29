var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Concert = require('./Concert');

var ConcertList = React.createClass({
  render: function () {
    console.log("props concerts");
    console.log(this.props.concerts);
    return (
      <div className='concertlist'>
        {this.props.concerts.map( (concert, i) => (
          <Concert 
            key={i}
            eventName={concert.eventDateName}
            date={concert.dateOfShow}
            venue={concert.eventHallName}
            img={concert.imageSource} />
        ))}
      </div>
    )
  }
});

module.exports = ConcertList;