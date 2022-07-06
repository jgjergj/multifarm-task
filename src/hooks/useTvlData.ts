import { useEffect, useState } from "react";
import { Asset } from "../components";
import { getAssets, getDateFriendlyName } from "../utils";

const getTvlHistoryData = (response: any): Asset[] => {
  const tvlHistory: Asset[] = response?.data[0]?.selected_farm[0].tvlStakedHistory.map(
    (item: any) => {
      return {
        name: getDateFriendlyName(item.date),
        value: item.value,
      };
    }
  );

  return tvlHistory;
}

export const useData = () => {
  const [tvlData, setTvlData] = useState<Asset[]>();

  useEffect(() => {
    getAssets().then((response: any) => {
      const tvlHistory = getTvlHistoryData(response);
      setTvlData(tvlHistory);
    });
  }, []);

  return {
    tvlData
  };
};
