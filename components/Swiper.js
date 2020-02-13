import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements';

function Swiper(props) {
    const renderCardItem = (job, i) => {
        return (
          <Card title={job.jobtitle} titleStyle={{ fontSize: 14 }} key={i}>
            <View style={{ height: 200 }}>
              <Image
                source={require('../assets/images/avatar.jpg')}
                style={{ width: '100%', height: 200 }}
              />
            </View>
            <View style={styles.detailWrapper}>
              <Text>{job.company}</Text>
              <Text>{job.formattedRelativeTime}</Text>
            </View>
            <Text numberOfLines={4}>
              {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
            </Text>
          </Card>
        );
      };
    
    const renderCards = () => {
        return props.data.map((job, index) => renderCardItem(job, index));
      };
    
      
        return <View>{renderCards()}</View>;
      
    }
    
    const styles = {
      detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
      }
    };


export default Swiper;
