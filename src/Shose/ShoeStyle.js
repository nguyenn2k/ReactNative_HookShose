import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        display:'flex'
    },
    container_text:{
        fontSize: 60,
        fontWeight: '500',
    },
    container_content:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: "100%",
        padding: 20,
    },
    container_content_item:{
        justifyContent: 'center',
        borderRadius: 10,
        background: '#fff',
        padding: 5,
        margin: 5,
        width: '36%',
    },
    container_content_item_card:{
        display: 'flex',
        flexDirection: 'column',
    },
    container_content_item_card_img:{
        width: '100%',
        padding: 10,
    }
});