import React from 'react';
import { View, StyleSheet, Text,Image} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [],
    }
}
componentDidMount() {
  const key ="Your API key goes here"
  const apiUrl = "https://api.unsplash.com/photos?client_id="+key;
  fetch(apiUrl)
          .then((response) => response.json())
          .then((json) =>
              this.setState({
                  data: json,
              })
              //console.log(json)
          )
          .catch( (error) => {
              console.log(error)
          });
}
  render() {
    const result = this.state;
        var images = result.data.map((data) => {
            return {
                "image" : data.urls.regular
            }
        });
    return (
      <View style={styles.background}>
      <Image source={require('./assets/picopedia.png')} style={styles.logo}/>  
      <Text style={styles.headline_text}>PicoPedia</Text>
      <Text style={styles.explore_text}>Unsplash : Beautiful high-quality photos curated by Alik.</Text>
      <GridImageView data={images}/>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 0,
    textAlign:'center',
    marginLeft: 20
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    textAlign:'center',
    fontWeight: '600'
  },
  logo:{
    height:70,
    width:70,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:10,
  }
});
