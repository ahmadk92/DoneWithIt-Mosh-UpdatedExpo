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

"ItemSeparatorComponent", look at this naming, all capitalized; it means you need to give this a function component

In this commit, I do the old way using swipeable, althow there is a diffrent from mosh code, u muse wrap the swipeable component inside a GestureHandlerRootView

Now we want to use the modern way of ReanimatedSwipeable, instead of deprecated Swipeable component
    enable Reanimated in your babel.config.js if it isn’t already:
        module.exports = function (api) {
            api.cache(true);
            return {
        presets: ["babel-preset-expo"],
        plugins: ["react-native-reanimated/plugin"],
        };
        };
Whenever you add or edit Babel config, you must clear the Metro cache so the plugin loads properly:
    npx expo start -c

If you recieve error about babel-preset-expo then reinstall babel-preset-expo
    Run this in your terminal:  
    npm install babel-preset-expo --save-dev
We still going to keep with old version of Swipeable component to follow mosh course properly

Mosh’s example (recorded on iOS simulator) shows the list physically bouncing down — Android simply doesn’t do that by default.

Mosh had issue with for applying padding to the Screen component for rendering ListingScreen.js, the problem was for past at the time of mosh recording course, but now there is no issue and works fine, no need extra work

note: import defaultStyles from "../config/styles" is equivalent to: import anyNameYouWant from "../config/styles"; You could literally write: import banana from "../config/styles";
        You are importing the default export (the object) from that file.
        You can name it anything you want — the name defaultStyles is just a local variable name chosen by Mosh.

@react-native-picker/picker:
    In mosh video time recording, was not available, but now it can be:
    npx expo install @react-native-picker/picker

Formik to build forms easily:
    npm install formik --save

Yup is a library for handling validation:
    npm i yup

____________________
for image picker can use third party lib or expo itself, with expo is easier with less effort
    npx expo install expo-image-picker
    import * as ImagePicker from 'expo-image-picker';

Note about API changing
    requestCameraPermissionsAsync() → asks for permission to use the device camera. (still exist, no change)

    requestCameraRollPermissionsAsync() → asked for permission to access the photo library / gallery.
        this one is renamed to:
        ImagePicker.requestMediaLibraryPermissionsAsync() (only worked on real mobile, the emulator automatically give access and don't show pop up)

As of Expo SDK 41+, expo-permissions has been deprecated and replaced by specific permission methods inside each individual package (like expo-image-picker, expo-location, etc.).
    so don't expo install expo-permissions , use import * as ImagePicker from "expo-image-picker";

Starting from Expo SDK 41, the ImagePicker API was redesigned to match the native Android & iOS media
    const result = await ImagePicker.launchImageLibraryAsync();
    the result is now changed to:
        {
            canceled: false,
            assets: [
                 { uri: "file:///photo1.jpg" },
                 { uri: "file:///photo2.jpg" },
                 { uri: "file:///photo3.jpg" }
              ]
        }
scrollToEnd:
    If this is a vertical ScrollView scrolls to the bottom. If this is a horizontal ScrollView scrolls to the right.
    Use scrollToEnd({animated: true}) for smooth animated scrolling, scrollToEnd({animated: false}) for immediate scrolling. If no options are passed, animated defaults to true.

npx expo install expo-location
    Location.requestPermissionsAsync() is now deprecated, use:
        Location.requestForegroundPermissionsAsync()

Navigation:
        Installation
            npm install @react-navigation/native
            npx expo install react-native-screens react-native-safe-area-context
    
        Navigator types:
            Stack Navigator : from one page to another page ; install with: npm install @react-navigation/native-stack
            Tab Navigator: switch between tabs; install with :npm install @react-navigation/bottom-tabs
            Drawer Navigator: navigate with a draw effect or gesture

navigation object all methods:(mosh said navigation prop)
    https://reactnavigation.org/docs/navigation-object

tabBarOptions={{ ... }} ❌ was removed.
    use screenOptions={{ ... }}

the mode prop has been removed and replaced by a new API.Now, you define the presentation style inside screenOptions:
    screenOptions={{
    presentation: "modal", // 👈 this replaces mode="modal"
  }}


Netwroking section:
    setting-up-the-backend: to do so, just run npm install in backend folder project and change the ip to your machine, don't worry about error or warnings, their just because the depencendy are outdated, which is not important to use

calling-apis-using-apisauce:
    install with: npx expo install apisauce or npm install apisauce
    In mosh video, he didn't set the  timeout:2000, for apiClient, you must set because the default timeout now is different from time mosh recorded his course. apisauce default timeout is about 60 sec, and you set it to shorter like 2000(2sec)

Lottie
    npx expo install lottie-react-native    

Progress Bar
    https://github.com/oblador/react-native-progress
    npm install react-native-progress 
    also install this for depencendy: npx expo install react-native-svg
    then import * as Progress from 'react-native-progress'

Offline Support:
@react-native-community/netinfo allows you to get information about connection type and connection quality.
A cross-platform API that provides access to network information.
    npx expo install @react-native-community/netinfo
    npx expo install @react-native-async-storage/async-storage

    npm i moment

Recommended modern alternative for caching images chapter
Expo now ships an official expo-image component that natively supports caching, progressive loading, transitions, and placeholders — everything you needed from react-native-expo-image-cache.
✅ You can use it directly:
    npx expo install expo-image
    import { Image } from "expo-image"; // import Image from here, instead of 'react-navive'

 🔍 Feature comparison
Feature	               react-native-expo-image-cache	                        expo-image (modern)
Cached loading	                 ✅ Yes	                                ✅ Yes (cachePolicy="disk")
Low-res preview	               ✅ (preview={{uri:...}})	                    ✅ (placeholder={{uri:...}})
Tint (blur effect overlay)	      ✅ (tint="light")	               ⚙️ No direct prop, but can replicate with blurRadius or overlay style
Works in Expo Go	                  ✅	                                           ✅
Maintained / recommended	          ❌	                                       ✅ ✅ ✅