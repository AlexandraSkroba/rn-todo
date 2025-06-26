import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useShakeAnimation = (
  amplitude: number = 5,
  duration: number = 70
) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const shake = () => {
    shakeAnimation.setValue(0);

    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 1,
        duration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -1,
        duration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [
      {
        translateX: shakeAnimation.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [-amplitude, 0, amplitude],
        }),
      },
    ],
  };

  return { animatedStyle, shake };
};
