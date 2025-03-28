import {View, Text, TouchableOpacity, Animated, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Typography from '../../components/Typography';
import axios from 'axios';
import {
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import styles from './Style';
import colors from '../../assets/colors/Colors';

export default function HomeScreen() {
  const [dataCategories, setDataCategories] = useState({
    categories: [],
    categoryAliases: [],
  });
  const [jokes, setJokes] = useState({});
  const [rotated, setRotated] = useState({});
  const [showJokes, setShowJokes] = useState({});
  const [initialOrder, setInitialOrder] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState({});
  const [isRefresh, setIsRefresh] = useState(false);

  const fetchAllJokes = async categories => {
    try {
      setIsLoading(true);
      let jokesData = {};
      const fetchAllJokes = categories.map(async category => {
        try {
          const response = await axios.get(
            `https://v2.jokeapi.dev/joke/${category}?type=single&amount=10`,
          );
          jokesData[category] = response.data.jokes || [];
        } catch (error) {
          console.log(`Error fetching jokes for ${category}:`, error);
          jokesData[category] = [];
        }
      });
      await Promise.all(fetchAllJokes);
      setJokes(jokesData);
      setInitialOrder(categories);
      setIsLoading(false);
    } catch (error) {
      console.log('Error in fetchAllJokes:', error);
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/categories');
      const categories = response.data.categories || [];
      setDataCategories(response.data || {});
      fetchAllJokes(categories);
      console.log('Categories:', categories);
    } catch (error) {
      console.log('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = category => {
    setIsOpen(prev => ({
      ...prev,
      [category]: !prev[category],
    }));

    if (!rotated[category]) {
      setRotated(prev => ({
        ...prev,
        [category]: new Animated.Value(0),
      }));
    }

    // Animate chevron rotation
    Animated.timing(rotated[category] || new Animated.Value(0), {
      toValue: isOpen[category] ? 0 : 1,
      duration: 120,
      useNativeDriver: true,
    }).start();
  };

  const handleAddJokes = category => {
    setShowJokes(prev => ({
      ...prev,
      [category]: Math.min((prev[category] || 2) + 1, 6),
    }));
  };

  const handleToTop = category => {
    setDataCategories(prev => {
      const {categories} = prev;
      const unselectedCategories = categories.filter(item => item !== category);
      return {
        ...prev,
        categories: [category, ...unselectedCategories],
      };
    });
  };

  const handleRefresh = async () => {
    setIsRefresh(true);
    setShowJokes({});
    setIsOpen(false);
    setRotated({});
    await fetchCategories();
    setIsRefresh(false);
  };

  const handleViewJoke = (joke, category) => {
    Alert.alert(`Category: ${category}`, `${joke.joke}`, [
      {
        text: 'Close',
        style: 'cancel',
      },
    ]);
  };

  const rotation = category =>
    (rotated[category] || new Animated.Value(0)).interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-180deg'],
    });
  return (
    <>
      <View style={styles.titleScreen}>
        <Typography variant="title" color="primary">
          Hi, There! JakMall here.
        </Typography>
      </View>
      <ScrollView
        style={styles.screen}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={handleRefresh} />
        }>
        <View>
          {dataCategories.categories.map((category, index) => (
            <View key={category} style={styles.containerDropdown}>
              <View style={styles.titleDropdown}>
                <Typography variant="bodyL" color="black">
                  {initialOrder.indexOf(category) + 1}. {category}
                </Typography>
                <View style={styles.pinAndOpen}>
                  <Pressable
                    style={
                      index === 0
                        ? styles.buttonToTopDisable
                        : styles.buttonToTopDefault
                    }
                    disabled={index === 0}
                    onPress={() => handleToTop(category)}>
                    <Typography
                      variant="bodyM"
                      color={index === 0 ? 'white' : 'black'}>
                      {index === 0 ? 'Pinned' : 'Pin to top'}
                    </Typography>
                  </Pressable>
                  <Pressable onPress={() => handleClick(category)}>
                    <Animated.View
                      style={{transform: [{rotate: rotation(category)}]}}>
                      <View style={styles.containerIcon}>
                        <FastImage
                          source={require('../../assets/icons/chevron-down.png')}
                          style={styles.iconDropdown}
                          tintColor={colors.primaryDark}
                        />
                      </View>
                    </Animated.View>
                  </Pressable>
                </View>
              </View>
              {isOpen[category] && (
                <View>
                  {isLoading ? (
                    <Typography>Loading...</Typography>
                  ) : jokes[category].error ? (
                    <Typography>
                      {jokes[category].message || 'No jokes found'}
                    </Typography>
                  ) : (
                    <>
                      {jokes[category]
                        .slice(0, showJokes[category] || 2)
                        .map((joke, index) => (
                          <TouchableOpacity
                            key={joke.id}
                            style={styles.containerJokes}
                            onPress={() => handleViewJoke(joke, category)}>
                            <Typography variant="info" color="black">
                              {joke.joke}
                            </Typography>
                          </TouchableOpacity>
                        ))}
                      {jokes[category]?.length > 0 &&
                        (showJokes[category] || 2) < 6 && (
                          <Pressable
                            style={styles.buttonAddJokes}
                            onPress={() => handleAddJokes(category)}>
                            <Typography variant="body" color="white">
                              + Add More Jokes
                            </Typography>
                          </Pressable>
                        )}
                    </>
                  )}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
