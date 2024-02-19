// create web audio api context
const audioCtx = new window.AudioContext();
const blipDurationSeconds = 0.03;
const timeBetweenBlips = 0.01;
let blipLock = false;
let initialized = false;
export function blipInit() {
    audioCtx.resume();
    initialized = true;
}

export async function blips(durationSeconds: number) {
    if (blipLock || !initialized) return;
    blipLock = true;

    const num = Math.ceil(
        durationSeconds / (blipDurationSeconds + timeBetweenBlips),
    );

    for (let _ = 0; _ < num; _++) {
        blip();
        await new Promise((r) =>
            setTimeout(r, (blipDurationSeconds + timeBetweenBlips) * 1000),
        );
    }

    blipLock = false;
}

export function blip() {
    if (!initialized) return;
    const min = 7040 / 2;
    const max = min * 2;
    // create Oscillator node
    const oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(
        Math.floor(Math.random() * (max - min + 1) + min),
        audioCtx.currentTime,
    );

    const volume = audioCtx.createGain();
    volume.connect(audioCtx.destination);
    volume.gain.value = 0.05;

    oscillator.connect(volume);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.03);
}

export function selectedBlips() {
    blip();
    setTimeout(() => blips(1), 500);
}

export function blipAfter(delay: number) {
    setTimeout(blip, delay * 1000);
}
