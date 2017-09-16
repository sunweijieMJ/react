import fillzero from './fillzero';

const date = time => {
    let now = new Date(time);

    let y = now.getFullYear();
    let m = now.getMonth() + 1;
    let d = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    return `${y}年${fillzero(m)}月${fillzero(d)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`;
}

export default date;