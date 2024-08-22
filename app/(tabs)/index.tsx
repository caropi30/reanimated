import { Button, View, SafeAreaView } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

export default function App() {
    const width = useSharedValue(100)

    const handlePress = () => {
        width.value = withSpring(width.value + 50)
    }

    return (
        <>
            <SafeAreaView />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Animated.View
                    style={{
                        width,
                        height: 100,
                        backgroundColor: 'violet',
                    }}
                />
            </View>
            <Button onPress={handlePress} title="Click me" />
        </>
    )
}
