import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {cardOperations, cardSelectors} from "../../state/ducks/card";

class Card extends Component {

    render() {
        const {selectedCard} = this.props;
        console.log(selectedCard);
        return (
            <View style={styles.root}>
                <Text>ID: {selectedCard.id}</Text>
                {/*<Text>Book title: {card.book.title}</Text>*/}
                {/*<Text>Book description: {card.book.description}</Text>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#1C1C1C'
    }
});

function mapStateToProps(state) {
    return {
        selectedCard: cardSelectors.getCardById(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(cardOperations, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);
