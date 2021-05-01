import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView, NativeModules } from 'react-native';
import { connect } from 'react-redux';

class ScreenThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceInfo: '',
        };
    }

    getDeviceInfo = async () => {
        const { DeviceModule } = NativeModules;
        try {
            const information = await DeviceModule.getDeviceInformation();
            this.setState({ deviceInfo: information });
        } catch (e) {
            console.error(e);
        }

    }

    render() {
        const { userName } = this.props;
        return (
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.text}>{userName}</Text>
                <Text style={styles.deviceInfoText}>{this.state.deviceInfo}</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.getDeviceInfo()}>
                    <Text style={styles.buttonText}>Get Device Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ScreenOne')}>
                    <Text style={styles.buttonText}>Go to Screen1</Text>
                </TouchableOpacity>
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
    deviceInfoText: {
        color: '#FFF',
    },
});

const mapStateToProps = (state) => {
    const { userName } = state;
    return userName;
};

export default connect(mapStateToProps)(ScreenThree);
