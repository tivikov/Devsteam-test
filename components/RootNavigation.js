import {createStackNavigator, createAppContainer} from 'react-navigation';
import Images from "./Images";
import imageSingle from "./imageSingle";

const MainNavigator = createStackNavigator({
    images: {
        screen: Images,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
        }),
    },
    imageSingle: {
        screen: imageSingle,
        navigationOptions: ({ navigation }) => ({
            title: 'Image',
        }),
    },
},
    {
        initialRouteName: "images"
    });

const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;
