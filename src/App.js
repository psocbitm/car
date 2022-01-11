import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import VolvoS90 from "./pages/VolvoS90";
import VolvoX360 from "./pages/VolvoX360";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/s90">
						<VolvoS90 />
					</Route>
					<Route path="/x360">
						<VolvoX360 />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
