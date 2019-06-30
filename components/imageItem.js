import React, {Component} from 'react';
import {Image, StyleSheet, Dimensions, View, TouchableHighlight} from "react-native";

const {width} = Dimensions.get('window');
const itemWidth = (width) / 3;

class ImageItem extends Component {


    render() {
        const imageHeight = this.props.image.height;
        const imageWidth = this.props.image.width;
        const ratio = imageWidth / imageHeight;
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigate('imageSingle', {
                    image: this.props.image.urls.regular,
                    user: this.props.image.user.name,
                    thumb: this.props.image.urls.thumb,
                    ratio
                    }
                    )} >
                    <Image
                        style={styles.singleImage}
                        source={{uri: this.props.image.urls.small}}
                    />
                </TouchableHighlight>
            </View>

        );
    }
}

const styles = StyleSheet.create({
   singleImage: {
       width: itemWidth,
       height: itemWidth,
   }
});


export default ImageItem;
