import { AssetAreaChart, Asset } from "../../components";
import { useData } from "../../hooks/useAprData";

export const AssetAPRChart = () => {
	const { aprData } = useData();

	return (
		<div>
			<h1>Asset APR</h1>
			<AssetAreaChart data={aprData as Asset[]} />
		</div>
	);
};
