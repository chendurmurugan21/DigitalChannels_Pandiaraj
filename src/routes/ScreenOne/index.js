import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { changeUserName } from '../../common/actions/user';

class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
    }

    goToScreenTwo = () => {
        const { navigation, dispatch } = this.props;
        dispatch(changeUserName(this.state.userName));
        navigation.navigate('ScreenTwo');
    }
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.text}>{this.state.userName}</Text>
                <View style={styles.views}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({ userName: text })}
                        value={this.state.userName}
                        placeholder="Enter Name"
                    />
                    <TouchableOpacity style={styles.button} onPress={() => this.goToScreenTwo()}>
                        <Text style={styles.buttonText}>Go to Screen2</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#181826',
    },
    text: {
        fontSize: 20,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        margin: 25,
        color: '#FFF',
    },
    views: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        margin: 12,
        width: '90%',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFF',
        backgroundColor: '#FFF',
    },
    button: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#75b4e7',
        borderRadius: 10,
        width: '80%',
        borderColor: '#75b4e7',
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

const mapStateToProps = (state) => {
    const { userName } = state;
    return userName;
};

export default connect(mapStateToProps)(ScreenOne);
