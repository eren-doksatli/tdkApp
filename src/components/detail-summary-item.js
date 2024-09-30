import {View, Text} from 'react-native';
import React from 'react';
import Box from './box';
import theme from '../utils/theme';

export default function DetailSummaryItem({children, data, border, ...props}) {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map(_ => _.tam_adi)) || ['isim'];

  return (
    <Box position="relative" bg="white" px={28} py={20} {...props}>
      {border && (
        <Box
          position="absolute"
          left={12}
          right={12}
          top={0}
          height={1}
          bg="light"
        />
      )}

      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text
              style={{
                marginLeft: -14,
                marginRight: 8,
                color: theme.colors.textLight,
              }}>
              {data.anlam_sira}
            </Text>

            <Text style={{color: 'red'}}>{type.join(', ')}</Text>
          </Box>
          <Box mt={8}>
            <Text style={{fontWeight: '600'}}>{data.anlam}</Text>
            {data.orneklerListe &&
              data.orneklerListe.map(ornek => (
                <Box key={ornek.ornek_id}>
                  <Text
                    style={{
                      fontWeight: '500',
                      marginLeft: 10,
                      marginTop: 12,
                      color: theme.colors.textLight,
                    }}>
                    {ornek.ornek}{' '}
                    <Text
                      style={{
                        fontWeight: '700',
                        color: theme.colors.textLight,
                      }}>
                      {ornek.yazar_id !== '0' && `- ${ornek.yazar[0].tam_adi}`}
                    </Text>
                  </Text>
                </Box>
              ))}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}
