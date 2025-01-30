import { registerApplication, start, LifeCycles } from "single-spa";


registerApplication({
	name: '@home-hub/testinho',
	app: () => System.import<LifeCycles>('@home-hub/testinho'),
	activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
