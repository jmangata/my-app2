
import Colors from '@/constants/Colors';
import Font from '@/constants/Font';
import FontSize from '@/constants/FontSize';
import Spacing from '@/constants/Spacing';
import { tags } from '@/data';
import { Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';

const index = () => {

  const [activeTag, setActiveTag] = useState<number>(tags[0].id); ;

  return (
    <SafeAreaProvider>
    <SafeAreaView>
      <View style={{ paddingHorizontal: Spacing * 2 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => alert('Button Pressed!')}
            style={{
              height: Spacing * 6,
              width: Spacing * 6,
              backgroundColor: Colors.lightBackground,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: Spacing * 3,

            }}>
            <Octicons name="apps" size={24} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Button Pressed!')}
            style={{
              height: Spacing * 5,
              width: Spacing * 5,
              borderRadius: Spacing * 3,
              backgroundColor: Colors.lightBackground,
              alignItems: "center",
              justifyContent: "center",

            }}>
            <Octicons name="search" size={24} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: Spacing * 2 }}>
          <Text
          style={{
            fontSize: FontSize.xxLarge,
            fontFamily: Font["poppins-bold"],
            width: "70%",
          }}
          
          > 
            Find The Perfect Home 
          </Text>
             <Text
          style={{
            fontSize: FontSize.small,
            fontFamily: Font["poppins-bold"],
            width: "70%",
          }}
          
          > 
            Discover the best home for you
          </Text>
        </View>
        <ScrollView style={{
          marginVertical: Spacing * 2,
        }} horizontal showsHorizontalScrollIndicator={false}>
          {tags.map((tag)=> (
            <TouchableOpacity 
            onPress={()=> setActiveTag(tag.id)}
            style={{
            backgroundColor:
             activeTag === tag.id ? Colors.black : Colors.lightBackground,
             paddingVertical: Spacing * 2 ,
             paddingHorizontal: Spacing * 3,
             borderRadius: Spacing * 3,
             marginRight: Spacing,
          }} 
             
             key={tag.id}
          ><Text style={{ 
            fontSize: FontSize.medium,
            fontFamily: activeTag === tag.id 
            ? Font["poppins-bold"] 
            : Font["poppins-regular"],
           
            color: activeTag === tag.id ? Colors.onPrimary: Colors.text,
            }}
            >
              {tag.title}
              </Text>
              </TouchableOpacity>
          ))}
        </ScrollView>
        </View>
            
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default index;

