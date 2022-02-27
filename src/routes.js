import Vue from "vue";
import Router from "vue-router";

import ViewHome from "@/views/Home";
import ViewAbout from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: ViewHome,
		},
		{
			path: "/about",
			name: "about",
			component: ViewAbout,
		},
		{
			path: "/coin/:id",
			name: "coin-detail",
			component: CoinDetail,
		},
		{
			path: "*",
			name: "Error",
			component: Error,
		},
	],
});
