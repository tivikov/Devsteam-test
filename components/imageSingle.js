import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');


class ImageSingle extends Component {
    render() {
        const {image, user, thumb, ratio } = this.props.navigation.state.params;

        const image_height = width / ratio;
        return (
            <View >
                <View style={{
                    width,
                    height: image_height
                }}>
                    <Image
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width,
                            height: image_height
                        }}
                        source={{uri: thumb}}
                        resizeMode={'contain'}
                    />
                    <Image
                        style={{
                            width,
                            height: image_height
                        }}
                        source={{uri: image}}
                        resizeMode={'contain'}
                    />
                </View>


                <Text style={styles.user}>Photo by {user}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    user: {
        textAlign: "center"
    }
});

export default ImageSingle;
