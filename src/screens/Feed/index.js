import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

export default function Feed() {

  const posts = [
    {
      id: '1',
      author: 'viajando_sem_parar',
      picture_url: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/92571378_253793978996978_7131419076941005411_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Wz0KpiMnyAwAX_2duph&oh=812f2d16ccdb47c041dcd172a4c1a64b&oe=5EEC0B54',
      likes: 6.542,
      description: 'O paraíso na terra',
      hashtags: '#Beach #praia #brasil #riodejaneiro #sol #paraíso',
      place: 'Paraty, Rio De Janeiro'
    },
    {
      id: '2',
      author: 'viagemdossonhos',
      picture_url: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/92107234_635163097265859_9148492835260174643_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SQCiygUjoJkAX-yo0Oo&oh=db372d1ae0c0bb6dc798c83c7b83f6be&oe=5EE98F4B',
      likes: 8.886,
      description: 'Curte aqui quem gostaria de acordar amanhã na Baía dos Golfinhos vazia e só pra você!',
      hashtags: '#pipa #viagemdossonhos #paraíso #pipaviagem',
      place: 'Pipa, Rio Grande Do Norte, Brazil'
    },
    {
      id: '3',
      author: 'eunascipraviajar',
      picture_url: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/92637847_1711269555663478_4505844227791430843_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=n-3RtODhLNAAX85oa_a&oh=470729b86fab70a907b2c56d6fcb2544&oe=5EE9EAF7',
      likes: 8.151,
      description: 'Marque quem você chamaria para Jericoacoara',
      hashtags: '#viagem #fortaleza #jeri #paraíso',
      place: 'Jericoacoara'
    },
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>

        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>

      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  description: {
    color: '#000',
    lineHeight: 18
  }
});