import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
	name: '@home-hub/react-navbar',
	app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
	activeWhen: ['/'],
});
registerApplication({
	name: '@home-hub/react-dashboard',
	app: () => System.import<LifeCycles>('@home-hub/react-dashboard'),
	activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
