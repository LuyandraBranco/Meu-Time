import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface User {
    api_key: string
    country: string
    league: string
    team: string
    season: string
}

const initialState: User = {
    api_key: '',
    country: '',
    league: '',
    team: '',
    season: '22/23',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setApiKey: (state, action: PayloadAction<string>) => {
            state.api_key = action.payload;
        },
        setCountry: (state, action: PayloadAction<string>) => {
            state.country = action.payload;
        },
        setLeague: (state, action: PayloadAction<string>) => {
            state.league = action.payload;
        },
        setTeam: (state, action: PayloadAction<string>) => {
            state.team = action.payload;
        },
        setSeason: (state, action: PayloadAction<string>) => {
            state.season = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setApiKey, setCountry, setLeague, setTeam, setSeason } = userSlice.actions

export default userSlice.reducer