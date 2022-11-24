import { View, Text, Image} from 'react-native'
import React from 'react'

import { styles } from './ShoeStyle'

export default function ShoseList() {
  return (
    <View style={styles.container}>
      <Text style={styles.container_text}>Nike</Text>
      <View style={styles.container_content}>

        <View style={styles.container_content_item}>
          <View style={styles.container_content_item_card}>
            <Image 
              style={styles.container_content_item_card_img}
              source={require('../img/5-2-adidas-shoes-transparent.png')}
            />
            <Text >Adidas Shoes Transparent</Text>
            <Text >190$</Text>
          </View>
        </View>

        <View style={styles.container_content_item}>
          <View style={styles.container_content_item_card}>
            <Image 
              style={styles.container_content_item_card_img}
              source={require('../img/6hXqLf-adidas-adipower-sport-boost-golf-shoe.png')}
            />
            <Text>Adipower Sport Boost Golf Shoe</Text>
            <Text>123$</Text>
          </View>
        </View>

        <View style={styles.container_content_item}>
          <View style={styles.container_content_item_card}>
            <Image 
              style={styles.container_content_item_card_img}
              source={require('../img/743874_00.png.png')}
            /> 
            <Text>Sport Boost Golf Shoe</Text>
            <Text>2590$</Text>
          </View>
        </View>

        <View style={styles.container_content_item}>
          <View style={styles.container_content_item_card}>
            <Image 
              style={styles.container_content_item_card_img}
              source={require('../img/Adidas-Shoes-Free-Download-PNG.png')}
            /> 
            <Text>Sport Boost Golf Shoe</Text>
            <Text>2590$</Text>
          </View>
        </View>

        <View style={styles.container_content_item}>
          <View style={styles.container_content_item_card}>
            <Image 
              style={styles.container_content_item_card_img}
              source={require('../img/Adidas-Shoes-PNG-Isolated-Pic (1).png')}
            />
            <Text>Sport Boost Golf Shoe</Text>
            <Text>2590$</Text>
          </View>
        </View>

        <View style={styles.container_content_item}>
          <View style={styles.container_content_item_card}>
            <Image 
              style={styles.container_content_item_card_img}
              source={require('../img/Adidas-Shoes-PNG-Isolated-Pic.png')}
            />
            <Text>Sport Boost Golf Shoe</Text>
            <Text>2590$</Text>
          </View>
        </View>

        <View style={styles.container_content_item}>
          <View style={styles.container_content_item_card}>
            <Image 
              style={styles.container_content_item_card_img}
              source={require('../img/Adidas-Shoes-PNG-Picture.png')}
            />
            <Text>Sport Boost Golf Shoe</Text>
            <Text>2590$</Text>
          </View>
        </View>

        <View style={styles.container_content_item}>
          <View style={styles.container_content_item_card}>
            <Image 
              style={styles.container_content_item_card_img}
              source={require('../img/grLDJo-adidas-tour-golf-shoe-adidas-boost.png')}
            />
            <Text>Sport Boost Golf Shoe</Text>
            <Text>2590$</Text>
          </View>
        </View>

      </View>
    </View>
  )
}