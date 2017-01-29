var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class Player extends React.Component {
  constructor (props) {
    super(props);

    this.setActive = this.setActive.bind(this);

    this.state = {
      isActive: this.props.isActive,
      isHidden: this.props.isHidden
    }
  }
  setActive () {
    this.props.handleClick(this.props.index);
  }
  render () {

    console.log(this.props);
    var styles;
    this.props.isActive ? styles = 'player player-active' : styles = 'player';
    if(this.props.isHidden) styles += ' player-hidden';

    return (
      <div className={styles} onClick={this.setActive}>
        <div className='player-img-wrapper'>
          <img src={this.props.img} />
        </div>
        <div className='player-stats'></div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

module.exports = Player;