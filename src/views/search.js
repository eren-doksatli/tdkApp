import React, {useEffect, useState} from 'react';
import Box from '../components/box';
import SafeAreaView from 'react-native-safe-area-view';
import SuggestionCard from '../components/suggestion-card';
import SearchHistoryList from '../components/search-history-list';
import HomeSearch from '../components/home-search';

const DATA = [
  {
    id: 123,
    title: 'Metruk',
    summary: 'aciklama1',
  },
  {
    id: 1234,
    title: 'Mercan Resifi',
    summary: 'aciklama2',
  },
  {
    id: 12345,
    title: 'Kös',
    summary: 'aciklama3',
  },
];

function SearchView({navigation}) {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [homeData, setHomeData] = useState(null);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />

      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir Kelime"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.kelime[0].madde,
                })
              }
            />

            <SuggestionCard
              mt={40}
              data={homeData?.atasoz[0]}
              title="Bir Deyim Atasözü"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.atasoz[0].madde,
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchView;
