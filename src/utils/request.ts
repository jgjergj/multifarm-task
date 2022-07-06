import axios from "axios"

export const getAssets = async () => {
  const res: any = await axios.get('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000');
  return JSON.parse(res.data.replaceAll("Infinity", '""'));
}