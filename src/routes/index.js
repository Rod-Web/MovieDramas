import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home"
import Detalhes from "../screens/Details"
import Search from "../screens/Search";

export default function Routes() {
    
    const stack = createNativeStackNavigator();

    return (

        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name = "Home" component={Home} options={{headerShown: false}}></stack.Screen>
                <stack.Screen name = "Detalhes" component={Detalhes}></stack.Screen>
                <stack.Screen name = "Search" component={Search}></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>

    )
}