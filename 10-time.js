'use strict';

const e = React.createElement;

class TimeSinceApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        timeStamp: '',
        timeSince: {
            years: '',
            months: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <div>
            <h3>Time since</h3>

            <ol>
                <li>How many years, months, days, hours, minutes and seconds that have elapsed since the timestamp</li>
                <li>The elapsed time should update in real-time</li>
            </ol>

            <TimeSinceResult item={this.state} />
                
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-timestamp">
                    Enter UNIX timestamp: 
                </label>

                <input
                    id="new-timestamp"
                    onChange={this.handleChange}
                    value={this.state.timeStamp}
                />
                
                <button>
                    Add
                </button>
            </form>
        </div>
    );
  }

  handleChange(e) {
      this.setState({ timeStamp: e.target.value });
  }

  handleSubmit(e) {
      e.preventDefault();
      
      if (!this.state.timeStamp.length) {
          return;
      }
      
      this.setState(state => ({
        timeSince: this.getTimeSince()
      }));
  }

  
  // Displays a timestamp.
  getTimeSince() {
    var ts = moment("20080627");
    var now = moment(new Date());
    var diff = moment.duration(now.diff(ts));

    return {
        years: diff.years(),
        months: diff.months(),
        days: diff.days(),
        minutes: diff.minutes(),
        seconds: diff.seconds()
    }
  }
}

class TimeSinceResult extends React.Component {
    render() {
        if ('' !== this.props.item.timeStamp) {
            return (
                <dl>
                    <dt>Timestamp</dt>
                    <dd>{this.props.item.timeStamp}</dd>
                    <dt>Time passed since:</dt>
                    {Object.entries(this.props.item.timeSince).map(item => (
                        <dd>{item[0]} - {item[1]}</dd>
                    ))}
                </dl>
            );
        } else {
            return null;
        }
    }
}
  

const domContainer = document.querySelector('#app');
ReactDOM.render(e(TimeSinceApp), domContainer);
