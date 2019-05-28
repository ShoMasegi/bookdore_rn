import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bookOperations} from "../../state/ducks/book";

class Home extends Component {

    render() {
        const {} = this.props;

        return (
            <View style={styles.home}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AAA',
    }
});

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({...bookOperations}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
