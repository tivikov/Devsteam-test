import React, {Component} from 'react';
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchImages } from "../actions/imageActions";
import ImageItem from "./imageItem";


class Images extends Component {
    componentWillMount() {
        this.props.fetchImages();

    }
    _keyExtractor = (item, index) => item.id;
    render() {
        const {navigate} = this.props.navigation;
        return (
            <FlatList
                data={this.props.images}
                contentContainerStyle={styles.container}
                numColumns="3"
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => <ImageItem image={item} navigate={navigate}/> }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
    }
});

const mapStateToProps = state => ({
    images: state.images.images,
});

export default connect(mapStateToProps, { fetchImages })(Images);
