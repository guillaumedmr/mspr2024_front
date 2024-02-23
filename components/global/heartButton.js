import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={toggleLike}>
      <Icon
        name={liked ? 'heart' : 'hearto'}
        size={24}
        color={liked ? 'red' : 'black'}
      />
    </TouchableOpacity>
  );
};

export default HeartButton;