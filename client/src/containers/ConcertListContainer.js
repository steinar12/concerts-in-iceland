var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ConcertList = require('../components/ConcertList');
var apiHelpers = require('../utils/apiHelpers');

class ConcertListContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      concerts: [

        ]
    };
  }

  componentDidMount () {
  	apiHelpers.getSomeData("something")
      .then(function (data) {
        this.setState({
          concerts: data.data.results
        })
      }.bind(this));
  }

  render () {
    return (
      <div className='concertlist-container'>
        <ConcertList concerts={this.state.concerts}/>
      </div>
    )
  }
};

module.exports = ConcertListContainer;