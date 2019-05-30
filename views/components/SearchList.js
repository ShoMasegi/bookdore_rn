import React from "react";
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';

const NUMBER_COLUMNS = 3;

// FIXME: Cell size
const cellSize = {
    width: 111, // Dimensions.get('screen').width / NUMBER_COLUMNS - 20 - NUMBER_COLUMNS * 10,
    height: 192 // (Dimensions.get('screen').width / NUMBER_COLUMNS - 20 - NUMBER_COLUMNS * 10) * 190 / 100
};

const SearchList = ({items, onItemPress}) => (
    <FlatList
        data={items}
        extraData={items}
        renderItem={({item, index}) => renderItem({item, onItemPress})}
        numColumns={NUMBER_COLUMNS}
        keyExtractor={(item, index) => index}
        style={styles.list}/>
);

const thumbnail = (object) => {
    try {
        return object.thumbnail
    } catch {
        return ""
    }
};

function renderItem({item, onItemPress}) {
    return (
        <TouchableOpacity
            key={item.id}
            onPressOut={() => onItemPress(item)}
            style={styles.item}>
            <View>
                <Image
                    source={{uri: thumbnail(item.volumeInfo.imageLinks)}}
                    style={styles.thumbnail}/>
                <Text
                    numberOfLines={2}
                    ellipsizeMode={'tail'}
                    style={styles.title}>
                    {item.volumeInfo.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

SearchList.propTypes = {
    items: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginHorizontal: 10,
    },
    item: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10,
        marginHorizontal: 10,
        width: cellSize.width,
        height: cellSize.height
    },
    title: {
        fontSize: 11,
        fontWeight: 'bold',
        marginVertical: 6,
        width: cellSize.width
    },
    thumbnail: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: cellSize.width,
        height: cellSize.width * 140 / 100
    }
});

export default SearchList;