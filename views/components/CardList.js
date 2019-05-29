import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CardList = ({items, onItemPress}) => (
    <View>
        {items.map((item) => (
            <TouchableOpacity key={item.id} onPressOut={() => onItemPress(item)}>
                <View style={styles.item}>
                    <Text>{item.book.title}</Text>
                    <Text>{item.book.description}</Text>
                </View>
            </TouchableOpacity>
        ))}
    </View>
);

CardList.propTypes = {
    items: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    item: {
        marginBottom: 16,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default CardList;