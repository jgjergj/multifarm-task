import { useEffect, useState } from "react";
import { Asset } from "../components";
import { getAssets, getAprData, getDateFriendlyName } from "../utils";

const getAprHistoryData = (response: any): Asset[] => {
  const arp = response?.data[0]?.aprYearly;

  const datesSimilarToTvlHistory = response?.data[0]?.selected_farm[0].tvlStakedHistory.map(
    (item: any) => {
      return getDateFriendlyName(item.date);
    }
  )

  const aprHistory: Asset[] = getAprData(arp, datesSimilarToTvlHistory);

  return aprHistory;
}

export const useData = () => {
  const [aprData, setAprData] = useState<Asset[]>();

  useEffect(() => {
    getAssets().then((response: any) => {
      const aprHistory = getAprHistoryData(response)
      setAprData(aprHistory);
    });
  }, []);

  return {
    aprData
  };
};
