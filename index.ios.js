/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var { TouchableWithoutFeedback } = React;

class clickfast extends Component {
  constructor() {
    super();
    this.state = { clicks: 0, time: 5 };
  }

  componentDidMount() {
    var id = setInterval(function() {
      var newTime = this.state.time - 1;

      if (newTime < 0) {
        clearInterval(id);
      } else {
        this.setState({ time: newTime });
      }
    }.bind(this), 1000);
  }

  addClick() {
    if (this.state.time > 0) {
      var newCount = this.state.clicks + 1;
      this.setState({ clicks: newCount });
    }
  }

  render() {
    var addClick = this.addClick.bind(this);

    return (
      <TouchableWithoutFeedback onPress={addClick}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Time remaining:
          </Text>
          <Text style={styles.welcome}>
            {this.state.time}
          </Text>
          <Text style={styles.welcome}>
          </Text>
          <Text style={styles.welcome}>
            Clicks:
          </Text>
          <Text style={styles.welcome}>
            {this.state.clicks}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('clickfast', () => clickfast);
