import React from 'react';
import { Text, Stack, Box } from '@chakra-ui/react';
import { ConnectedUserCardType } from '../types';

export const ConnectedUserInfo = ({
  username,
  icon
}: ConnectedUserCardType) => {
  return (
    <Stack spacing={1} alignItems="center">
      {username && (
        <>
          <Box
            
          >
            {icon}
          </Box>
          
        </>
      )}
    </Stack>
  );
};
