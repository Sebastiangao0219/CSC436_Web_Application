import React from 'react';

export const ThemeContext = React.createContext({
primaryColor: '#5da2d5',
secondaryColor: '#19181a'
})

export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
})