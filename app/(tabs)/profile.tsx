import {StyleSheet, Text, View} from "react-native";
import React from "react";
import type {SliderProps} from 'tamagui'
import {Slider, XStack} from 'tamagui'


const Profile = () => {
    function SimpleSlider({children, ...props}: SliderProps) {
        return (
            <Slider defaultValue={[50]} max={100} step={1} {...props}>
                <Slider.Track>
                    <Slider.TrackActive/>
                </Slider.Track>
                <Slider.Thumb size="$2" index={0} circular/>
                {children}
            </Slider>
        )
    }

    return (
        <View style={styles.container}>

            <XStack height={200} alignItems="center" gap="$8">
                <SimpleSlider width={200}/>
            </XStack>

        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        color: 'white',
        fontSize: 24,
    }
})
