import { createContext } from 'react'
import AppContextType from '../contracts/AppContextType'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const AppContext = createContext<AppContextType>(null as any)
