For detecting device orientaition, we shoud install a library from react community, but this was also for 2020 when mosh course released
    npm install @react-native-community/hooks
    https://github.com/react-native-community/hooks

now the react native itself is evolved and no need to use community library
just use
import { useWindowDimensions } from "react-native";


code snips for react native:
rsf : creating a react native stateless function
rnss: creating a react native style sheet


Ios have Shadows API with more contrall than android


with installing this, we have access to some info about device
    npx expo install expo-constants
    import constans from 'expo-constants'

We are going to use a library to handle gestures
    npx expo install react-native-gesture-handler
    you can look to this link for docs of swipeable component
        https://docs.swmansion.com/react-native-gesture-handler/docs/components/swipeable
        the above is no future proof, but the reanimated swipeable at below link is the new way:
        https://docs.swmansion.com/react-native-gesture-handler/docs/components/reanimated_swipeable