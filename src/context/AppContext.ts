import React, { createContext } from 'react'
import AppContextType from '../contracts/AppContextType'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const AppContext = createContext<{
  appContextValue: AppContextType
  setAppContextValue: React.Dispatch<React.SetStateAction<AppContextType>>
}>(null as any)
