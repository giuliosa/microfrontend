import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
	name: '@home-hub/react-navbar',
	app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
	activeWhen: ['/'],
});

registerApplication({
	name: '@home-hub/testinho',
	app: () => System.import<LifeCycles>('@home-hub/testinho'),
	activeWhen: ['/teste'],
});


start({
  urlRerouteOnly: true,
});
