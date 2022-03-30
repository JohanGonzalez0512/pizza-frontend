import { types } from "../types/types";

export const uiSetIsModalOpen = () => ({
    type: types.uiSetIsModalOpen,
});

export const uiStartLoading = () => ({
    type: types.uiStartLoading,
});
export const uiFinishLoading = () => ({
    type: types.uiFinishLoading,
})