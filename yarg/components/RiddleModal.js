import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class RiddleModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={{marginTop: 22}}>
            <View>
              <Text>
                10 paces past the chalkboard.
                Steer yourself towards the projector.
                Open yARg and seek the X.
              </Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>
                  Hide Riddle
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>View me riddle</Text>
        </TouchableHighlight>
      </View>
    );
  }
}