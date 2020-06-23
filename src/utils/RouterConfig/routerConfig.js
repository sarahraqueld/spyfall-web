import Home from "../../pages/Home/Home";
import Player from "../../pages/Player/Player";

export const BASIC_ROUTER_CONFIG = [
	{
		path: '/',
		exact: true,
		component: Home,
		auth: []
	},
	{
		path: '/players/:id',
		exact: true,
		component: Player,
		auth: []
	}
];