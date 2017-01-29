var React = require('react');
var Myteam = require('../components/roster/Myteam');

var player = function(name, img) {
  this.name = name;
  this.img = img;
}

class MyteamContainer extends React.Component {
  constructor (props) {
    super(props);

    this.handlePlayerClick = this.handlePlayerClick.bind(this);

    this.state = {
      players: [
        new player("LeBron James", 'http://static2.businessinsider.com/image/56840c79c08a80ae2f8b4efd/lebron-james-gambled-on-his-future-and-it-is-about-to-pay-off-big-time.jpg'),
        new player("Stephen Curry", 'https://cleantechnica.com/files/2016/05/Stephen-Curry.jpg'),
        new player("Blake Griffin", 'http://wallpapersdsc.net/wp-content/uploads/2015/12/1162.jpg'),
        new player("Russell Westbrook", 'http://sportschump.net/wp-content/uploads/2013/02/Russell-Westbrook-fired-up.jpg'),
        new player("Giannis Antetokounmpo", 'http://behindthebuckpass.com/files/2016/07/giannis-antetokounmpo-nba-washington-wizards-milwaukee-bucks.jpg')
      ],
      activePlayerIndex: null
    }
  }
  handlePlayerClick (i) {
    console.log("HandlePlayerClick called on player number " + i);
    if(i === this.state.activePlayerIndex) i = null;
    this.setState({
      activePlayerIndex: i
    });
  }
  render () {
    return (
      <Myteam 
        players={this.state.players} 
        onPlayerClick={this.handlePlayerClick}
        activePlayerIndex={this.state.activePlayerIndex}/>
    )
  }
}

module.exports = MyteamContainer;