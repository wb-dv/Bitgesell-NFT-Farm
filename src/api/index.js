const baseURL = location.origin;

// для локальной разработки нужно использовать оригинальный урл бэка:
// const baseURL = 'http://185.105.88.18:8080';

export const baseRefetchInterval = 3 * 60 * 1000;

export const baseLimit = 15;

export const getNFTsInfo = async (address) => {
    const res = await fetch(`${baseURL}/nft/${address}`);

    if (!res.ok) throw new Error('Cannot get NFTs for address');

    return await res.json();
};

export const getOwners = async (page) => {
    const res = await fetch(
        `${baseURL}/get_owners?limit=${baseLimit}&page=${page}`
    );

    if (!res.ok) throw new Error('Cannot get owners');

    return await res.json();
};

export const getWBGL = async () => {
    const res = await fetch(`${baseURL}/get_wbgl`);

    if (!res.ok) throw new Error('Cannot get WBGL');

    return await res.json();
};

export const getLastPayment = async () => {
    const res = await fetch(`${baseURL}/get_last_trade`);

    if (!res.ok) throw new Error('Cannot get last payment');

    return await res.json();
};

export const getPagesCount = async () => {
    const res = await fetch(`${baseURL}/get_pages/${baseLimit}`);

    if (!res.ok) throw new Error('Cannot get pages count');

    return await res.json();
};

export const searchOwner = async (address) => {
    const res = await fetch(`${baseURL}/get_owners?search=${address}`);

    if (!res.ok) throw new Error('Cannot get owners');

    return await res.json();
};
