/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */

import { create } from 'zustand';  // create the store
import { produce } from 'immer'; // for update the store
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';


export const useStore = create(
    persist((set, get) => (
        {
            coffeeList: CoffeeData,
            beanList: BeansData,
            FavoritesList: [],
            cartPrice: 0,
            cartList: [],
            orderHistoryList: [],

        }
    ), {
        name: 'coffee-shop',
        storage: createJSONStorage(() => AsyncStorage),
    })
);
