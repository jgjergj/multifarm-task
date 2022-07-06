import "./App.css";
import { AssetAPRChart } from "./charts/AssetAPRChart";
import { AssetTVLChart } from "./charts/AssetTVLChart";

const App = () => {
	return (
		<div className="App">
			<AssetAPRChart />
			<AssetTVLChart />
		</div>
	);
};

export default App;
