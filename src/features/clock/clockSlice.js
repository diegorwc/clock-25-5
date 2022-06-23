import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
    name: 'clock',
    initialState: {
        breakLength: 5,
        sessionLength: 25,
        remainingTime: 25,
        timerRunning: false
    },
    reducers: {
        reset: state => {
            state.timerRunning = false
            state.breakLength = 5
            state.sessionLength = 25
            state.remainingTime = 25
        },
        incrementBreak: state => {
            if(state.breakLength < 60) {
                state.breakLength++
            }
        },
        decrementBreak: (state) => {
            if(state.breakLength > 1)  {
                state.breakLength--          
            }
        },
        incrementSession: state => {
            if(state.sessionLength < 60) {
                state.sessionLength++
                state.remainingTime--
            }
        },
        decrementSession: state => {
            if(state.sessionLength > 1) {
                state.sessionLength--
                state.remainingTime--
            } 
        },
        decrementTimer: state => {            
            if(state.remainingTime > 0) {
                state.remainingTime--
            } 
        },
        timerStatus: (state) => {
            state.timerRunning ? state.timerRunning = false : state.timerRunning = true
        }
    }
})

export const { reset, incrementBreak, decrementBreak, incrementSession, decrementSession, decrementTimer, timerStatus } = clockSlice.actions
export default clockSlice.reducer