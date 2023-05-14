import { Box, Stack, useColorModeValue, Image, Text } from '@chakra-ui/react';
import { ChainCardProps } from '../types';

export const ChainCard = (props: ChainCardProps) => {
  return (
    <Stack
      isInline={true}
      alignItems="center"
      justifyContent={'center'}
      spacing={3}
      overflow="hidden"
      wordBreak="break-word"
      color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
      w="full"
    >
     
      
    </Stack>
  );
};
