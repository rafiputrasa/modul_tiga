import { FlatList, Text, View, Image, Button, ButtonText } from '@gluestack-ui/themed';
import { useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
  
  // Dummmy Data (Array of Object) 
  const datas = [
    {
      id: 1,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
      id: 2,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
      id: 3,
      title:
        "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
      id: 4,
      title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
      id: 5,
      title:
        "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
    {
      id: 6,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
      id: 7,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
      id: 8,
      title:
        "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
      id: 9,
      title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
      id: 10,
      title:
        "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
  ];
  
  // Functional Component
  const List = () => {
    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [itemSelect, setItemSelect] = useState('kosong');
    
    // console.log(itemSelect);

    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
      // console.log(item);
      return (
        <TouchableOpacity onPress={() => {setShowModal(true); setItemSelect(item)}}>
          <View mx={15}>
            <Modal
              visible={showModal}
              transparent={true}
            >
              <View
                justifyContent= 'center'
                alignItems= 'center'
                margin= {20}
                backgroundColor= 'white'
                borderRadius= {20}
                padding= {20}
                onRequestClose={() => {setShowModal(!showModal)}} 
              >
              <Image source={{uri: itemSelect.image }} alt='wleo'             
                resizeMode='contain'
                h= {300}
                w= '100%'
              />
              <Text>{itemSelect ? itemSelect.title : 'wleowleo'}</Text>
              <Button my={15} onPress={() => setShowModal(!showModal)}>
                <ButtonText>Close</ButtonText>
              </Button>
              </View>
            </Modal>
            <Image w='100%' h={200} my={10} source={{ uri: item.image }} alt='wleo' />
            <Text fontSize={18}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };
  

  
  export default List;