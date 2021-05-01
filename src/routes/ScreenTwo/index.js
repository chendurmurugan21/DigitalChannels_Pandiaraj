import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SwipeButton from 'rn-swipe-button';

class ScreenTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
        };
    }

    render() {
        const { userName } = this.props;
        const gemIcon = () => <Icon name="gem" color="#FFF" size={20} />;
        return (
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.text}>{userName}</Text>
                <View style={styles.views}>
                    <Text style={styles.variousBtnText}>4 Variations of a button</Text>
                    <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('ScreenThree')}>
                        <Text style={styles.pressme1}>Press Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('ScreenThree')}>
                        <Text style={styles.pressme2}>Press Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.navigate('ScreenThree')}>
                        <Text style={styles.pressme3}>Press Me</Text>
                    </TouchableOpacity>
                    <View style={styles.swipe}>
                        <SwipeButton
                            swipeSuccessThreshold={70}
                            height={45}
                            width={330}
                            shouldResetAfterSuccess={true}
                            title="Slide me to Continue"
                            thumbIconComponent={gemIcon}
                            thumbIconBackgroundColor="#75b4e7"
                            thumbIconBorderColor="#75b4e7"
                            titleColor="#75b4e7"
                            railBackgroundColor="#36474f"
                            railBorderColor="#36474f"
                            railFillBackgroundColor="#36474f"
                            railFillBorderColor="#36474f"
                            onSwipeSuccess={() => {
                                this.props.navigation.navigate('ScreenThree');
                            }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#181826',
    },
    pressme1: {
        color: '#75b4e7',
        textAlign: 'center',
    },
    pressme2: {
        color: '#75b4e7',
        textAlign: 'center',
    },
    pressme3: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    pressme4: {
        color: '#75b4e7',
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        margin: 25,
        color: '#FFF',
    },
    views: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    button1: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        width: '100%',
    },
    button2: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#36474f',
        borderRadius: 10,
        width: '100%',
        borderColor: '#36474f',
    },
    button3: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#73b5ff',
        borderRadius: 10,
        width: '100%',
        borderColor: '#73b5ff',
    },
    button4: {
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 10,
        width: '100%',
        borderColor: '#36474f',
        borderWidth: 1,
    },
    variousBtnText: {
        fontSize: 18,
        color: '#cfdb15',
    },
    swipe: {
        marginTop: 15,
        marginBottom: 15,
    },
});

const mapStateToProps = (state) => {
    const { userName } = state;
    return userName;
};

export default connect(mapStateToProps)(ScreenTwo);
