import { createSlice } from "@reduxjs/toolkit";

// Helper to get initial theme from local storage or default to 'light'
const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: getInitialTheme() }, // 1. Read on load
    reducers: {
        toggleTheme: (state) => {
            const nextTheme = state.value === "light" ? "dark" : "light";
            state.value = nextTheme;
            localStorage.setItem("theme", nextTheme); 
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
