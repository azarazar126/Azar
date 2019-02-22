import axios from 'axios';

export const FETCH_BARS = 'FETCH_BARS';
export const FETCH_BAR_DATA = 'FETCH_BAR_DATA';

export function fetchBars() {
    const url = `https://gist.githubusercontent.com/vitalybe/cd3d6f939d37294727f8e83329b4afcb/raw/59ba6e5f1ae06429fceb407fc0cc0a13e9f3ef35/data.json`;
    const request = axios.get(url);
    
    return {
        type: FETCH_BARS,
        payload: request
    };
}

export function fetchBarData(title, total, bps, percentage) {
    const barData = {title, total, bps, percentage};
    
    return {
        type: FETCH_BAR_DATA,
        payload: barData
    };
}

