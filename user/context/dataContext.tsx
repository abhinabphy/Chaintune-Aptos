'use client'
import React, {  } from 'react'
import { song, artist, album } from '@types'
import { createContext, useContext } from 'react';

type data = {
  songs: song[];
  albums: album[];
  artists: artist[];
}

// Create the context with a default value
const DataContext = createContext<data>({songs: [] as song[], artists: [] as artist[], albums: [] as album[]});

// Custom hook for using the context
export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a SongContextProvider');
  }
  return context;
}

export default DataContext;
