import Home from "../../pages/Home/Home";
import Player from "../../pages/Player/Player";
import StartNewGame from "../../pages/StartNewGame/StartNewGame";
import JoinGame from "../../pages/JoinGame/JoinGame";

export const BASIC_ROUTER_CONFIG = [
	{
		path: '/',
		exact: true,
		component: Home,
		auth: []
	},
	{
		path: '/games/:gameId/players/:id',
		exact: true,
		component: Player,
		auth: []
	},
	{
		path: '/games/new',
		exact: true,
		component: StartNewGame,
		auth: []
	},
	{
		path: '/games/join',
		exact: true,
		component: JoinGame,
		auth: []
	}
];