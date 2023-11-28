import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";


export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  console.log(item);
  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 rounded-full shadow"
          >
            <Icon.ArrowLeft stroke={themeColors.bgColor(1)} strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2  my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.starts}</Text>
                  <Text className="text-gray-700">({item.reviews} review)</Text>
                  <Text className="font-semibold text-gray-700">
                    {item.category}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" height={15} width={15} />
                <Text className="text-gray-700 text-xs">
                  Nearby. {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/**dishes */}
          {item.dishes.map((dish, index) => {
            return <DishRow item={{ ...dish }} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
