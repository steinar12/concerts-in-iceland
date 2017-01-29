var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Player = require('./Player');

class Myteam extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    }
  }
  render () {
    return (
      <div className='my-team'>
        {this.props.players.map( (player, i) => (
      	  <Player 
      	    key={player.name}
      	    name={player.name}
      	    img={player.img} 
      	    handleClick={this.props.onPlayerClick}
      	    index={i}
      	    isActive={i === this.props.activePlayerIndex}
      	    isHidden={i !== this.props.activePlayerIndex && this.props.activePlayerIndex !== null}/>
    	))}
      </div>
    )
  }
}



module.exports = Myteam;