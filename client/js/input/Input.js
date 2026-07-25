const keys = {};
const mouse = {
    x: 0,
    y: 0,
    movementX: 0,
    movementY: 0,
    left: false,
    right: false
};

window.addEventListener("keydown", (event) => {
    keys[event.code] = true;
});

window.addEventListener("keyup", (event) => {
    keys[event.code] = false;
});

window.addEventListener("mousemove", (event) => {
    mouse.movementX = event.movementX;
    mouse.movementY = event.movementY;
});

window.addEventListener("mousedown", (event) => {
    if (event.button === 0) mouse.left = true;
    if (event.button === 2) mouse.right = true;
});

window.addEventListener("mouseup", (event) => {
    if (event.button === 0) mouse.left = false;
    if (event.button === 2) mouse.right = false;
});

export function isKeyPressed(key) {
    return !!keys[key];
}

export function getMouse() {
    return mouse;
}

export function resetMouseDelta() {
    mouse.movementX = 0;
    mouse.movementY = 0;
}
