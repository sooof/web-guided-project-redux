export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";

export function toggleEditing() {
    return { type: TOGGLE_EDITING };
}

export const updateTitle = newTitle => {
    console.log("2. In our action creator")
    return { type: UPDATE_TITLE, payload: newTitle };
};