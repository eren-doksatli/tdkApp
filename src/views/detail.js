import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Box from '../components/box';
import SafeAreaView from 'react-native-safe-area-view';
import theme from '../utils/theme';
import ActionButton, {ActionButtonTitle} from '../components/action-button';
import {Archive, ArrowCircleUp2, VolumeHigh} from 'iconsax-react-native';
import DetailSummaryItem from '../components/detail-summary-item';
import {LoaderText} from '../components/loader-text';

function DetailView({route}) {
  const keyword = route.params?.keyword;
  const [data, setData] = useState(null);

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const data = await response.json();
    setData(data[0]);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>{keyword}</Text>
          <Text style={{color: theme.colors.textLight, marginTop: 6}}>
            {data?.telaffuz ? data.telaffuz : null}{' '}
            {data?.lisan ? data.lisan : null}
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <VolumeHigh size="26" color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml={12}>
            <Archive size="26" color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml="auto">
            <ArrowCircleUp2 size="26" color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box mt={32}>
          {data
            ? data.anlamlarListe.map(item => (
                <DetailSummaryItem
                  key={item.anlam_sira}
                  data={item}
                  border={item.anlam_sira !== 1}
                />
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItem key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItem>
              ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DetailView;
