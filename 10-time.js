'use strict';

const e = React.createElement;

class TimeSinceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <div>
            <h3>Time since</h3>
            <p>How many years, months, days, hours, minutes and seconds that have elapsed since the timestamp</p>
            <DateList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-date">
                UNIX timestamp: 
            </label>
            <input
                id="new-date"
                onChange={this.handleChange}
                value={this.state.text}
            />
            <button>
                Add
            </button>
            </form>
        </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.getResult(),
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
  
  getResult() {
    var timeStamp = this.state.text;
    var now = moment(new Date());
    var ts = moment("20080627");
    var diff = moment.duration(now.diff(ts));
    var years = diff.years();
    var months = diff.months();
    var timeSince = years + '/' + months;
    return timeStamp + ': ' + timeSince;
  }
}

class DateList extends React.Component {
  render() {
    return (
        <ul>
            {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(TimeSinceApp), domContainer);
