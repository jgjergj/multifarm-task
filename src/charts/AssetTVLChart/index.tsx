import { AssetAreaChart, Asset } from "../../components";
import { useData } from "../../hooks/useTvlData";

export const AssetTVLChart = () => {
	const { tvlData } = useData();

	return (
		<div>
			<h1>Asset TVL</h1>
			<AssetAreaChart data={tvlData as Asset[]} />
		</div>
	);
};
