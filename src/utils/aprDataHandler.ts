import { Asset } from "../components";

export const getAprData = (initialApr: number, dates: string[]): Asset[] => {
    const assetAprData: Asset[] = [];
    let tempApr = initialApr;

    dates.forEach(date => {
        const tempAsset: Asset = {
            name: date,
            value: tempApr
        }
        assetAprData.push(tempAsset);

        tempApr = tempApr * 1.05
    });

    return assetAprData;
}