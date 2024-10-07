"use client";

import { ChakraProvider } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface ChakraProps {
    children: ReactNode;
}

export default function Provider({ children }: ChakraProps) {
  return (
    <ChakraProvider>
        {children}
    </ChakraProvider>
  )
}