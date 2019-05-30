import React, {Component} from 'react';
import {View, TextInput, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {cardOperations} from "../../state/ducks/card";
import {searchOperations} from "../../state/ducks/search";

import SearchList from '../components/SearchList';
import CardList from "../components/CardList";

class Home extends Component {

    handleSearch = (query) => {
        if (typeof query === 'string') {
            this.props.searchBooks(query);
        } else {
            this.props.searchClear()
        }
    };

    handleSearchItemPress = (item) => {
    };

    unfocused = () => {
        Keyboard.dismiss();
        this.props.searchClear();
    };

    handleCardItemPress = (item) => {
    };

    componentWillMount(): void {
        this.props.fetchCards();
    }

    render() {
        const {
            isFetching,
            responses,
            isCardsFetching,
            cards
        } = this.props;

        return (
            <TouchableWithoutFeedback
                style={styles.home}
                onPress={this.unfocused}>
                <View style={styles.home}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            onChangeText={(text) => this.handleSearch(text)}
                            style={styles.input}
                            placeholder={'Search words'}
                            placeholderTextColor={'#949494'}/>
                    </View>
                    <View style={styles.body}>
                        {(!isFetching && responses && responses.length !== 0) ? (
                            <SearchList
                                items={responses}
                                onItemPress={this.handleSearchItemPress}
                                style={styles.list}/>
                        ) : (
                            (!isCardsFetching && cards && cards.length !== 0) ? (
                                <CardList  items={cards} onItemPress={this.handleCardItemPress}/>
                            ) : (
                                // FIXME: display somethings
                                <View />
                            )
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFF'
    },
    searchContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: 42,
        top: 12,
        backgroundColor: '#EEEEEE',
        borderRadius: 21,
        marginLeft: 20,
        marginRight: 20
    },
    input: {
        flex: 1,
        height: 42,
        paddingLeft: 24,
        paddingRight: 24,
        fontSize: 16
    },
    empty: {
        flex: 1
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30
    }
});

function mapStateToProps(state) {
    const {
        isFetching,
        responses
    } = state.searchState;

    const {
        isCardsFetching,
        cards
    } = state.cardState;

    return {
        isFetching,
        responses,
        isCardsFetching,
        cards
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({...searchOperations, ...cardOperations}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
