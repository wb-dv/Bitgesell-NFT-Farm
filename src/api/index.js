const basePath = 'http://95.217.123.179:8080';

export const getNFTsInfo = async (address) => {
  const res = await fetch(`${basePath}/nft/${address}`);

  if (!res.ok) throw new Error('Cannot get NFTs for address');

  return await res.json();
};

export const getOwners = async () => {
  const res = await fetch(`${basePath}/get_owners`);

  if (!res.ok) throw new Error('Cannot get owners');

  return await res.json();
};

export const getWBGL = async () => {
  const res = await fetch(`${basePath}/get_wbgl`);

  if (!res.ok) throw new Error('Cannot get WBGL');

  return await res.json();
};
