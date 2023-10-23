import { TouchableOpacity } from "react-native";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Image, View } from "@gluestack-ui/themed";

// Functional Component with props
const Header = (props) => {
  return (
    <GluestackUIProvider config={config}>
      <View bg="#AA0002" py="$3" px="$5" style={{flexDirection: "row", justifyContent: "space-between"}}>
        <TouchableOpacity onPress={() => props.drawer.current.openDrawer()}>
          <Image
              source={require("../assets/menu.png")}
              borderRadius="$none"
              size={'2xs'}
              alt="wle"
            />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/facebook.png")}
            alt="wlee"
            size={'2xs'}
            mx={'$3'}
          />
          <Image
            source={require("../assets/youtube.png")}
            alt="wlee"
            size={'2xs'}
            mx={'$3'}
          />
          <Image
            source={require("../assets/twitter.png")}
            alt="wlee"
            size={'2xs'}
            mx={'$3'}
          />
          <Image
            source={require("../assets/search.png")}
            alt="wlee"
            size={'2xs'}
            ml={'$3'}
          />
        </View>
      </View>
    </GluestackUIProvider>
  );
};

export default Header;