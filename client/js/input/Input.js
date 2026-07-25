const keys = {};

window.addEventListener("keydown", (event) => {
    keys[event.code] = true;
});

window.addEventListener("keyup", (event) => {
    keys[event.code] = false;
});

export function isKeyPressed(key) {
    return !!keys[key];
}

export default keys;
