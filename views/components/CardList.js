import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, TouchableOpacity, SectionList, StyleSheet} from 'react-native';

const CardList = ({items, onItemPress}) => {
    console.log(items);
    const reading = items.filter(item => item.status === 'reading');
    const want = items.filter(item => item.status === 'want');
    const bought = items.filter(item => item.status === 'bought');
    const read = items.filter(item => item.status === 'read');

    return (
        <SectionList
            renderItem={({item, index, section}) => renderItem({item, index, section, onItemPress})}
            renderSectionHeader={({section: {title}}) => renderSectionHeader({section: {title}})}
            sections={[
                {title: 'reading', data: reading},
                {title: 'want', data: want},
                {title: 'bought', data: bought},
                {title: 'read', data: read}
                ]}
        />
    )
};

const thumbnail = (object) => {
    try {
        return object.thumbnail
    } catch {
        return ""
    }
};

function renderItem({item, index, section, onItemPress}) {
    return (
        <TouchableOpacity key={item.id} onPressOut={() => onItemPress(item)}>
            <View style={styles.item}>
                <Image
                    source={{uri: thumbnail(item.book.thumbnail)}}
                    style={styles.thumbnail}/>
                <Text style={styles.title}>{item.book.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

function renderSectionHeader({section: {title}}) {
    return (
        <Text style={styles.header}>{title}</Text>
    )
}

CardList.propTypes = {
    items: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'row',
        marginHorizontal: 20,
        height: 90
    },
    title: {
        marginLeft: 20,
        fontSize: 12,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 30,
        marginHorizontal: 20
    },
    thumbnail: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 50,
        height: 73
    }
});

export default CardList;