import Home from "../../pages/Home/Home";
import Player from "../../pages/Player/Player";
import StartNewGame from "../../pages/StartNewGame/StartNewGame";

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
	},
	{
		path: '/games/new',
		exact: true,
		component: StartNewGame,
		auth: []
	}
];