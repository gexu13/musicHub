import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async () => {
        return await authService.logout();
    }
);

export const registerThunk = createAsyncThunk(
    "auth/register",
    async (user) => {
        // console.log("registerThunk", user);
        return await authService.register(user);
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile",
    async () => {
        return await authService.profile();
    }
);

export const updateUserThunk = createAsyncThunk(
    "auth/update",
    async (user) => {
        return await authService.update(user);
    }
);
