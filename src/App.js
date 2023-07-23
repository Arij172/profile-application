import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Cristiano Ronaldo',
        bio: 'football ',
        imgSrc: 'https://assets-fr.imgfoot.com/media/cache/1200x1200/cristiano-ronaldo-al-nassr.jpg',
        profession: 'football player',
      },
      shows: false,
      mountedTime: 0,
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.startTimeInterval();
  }

  componentWillUnmount() {
    this.clearStartTimeInterval();
  }

  startTimeInterval = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  };

  clearStartTimeInterval = () => {
    clearInterval(this.interval);
  };
  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since  this component was mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;

