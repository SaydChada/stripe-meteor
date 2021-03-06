Package.describe({
	summary: "Stripe.js and Node-Stripe brought to Meteor. This a fork of mrgalaxy:stripe package, all thanks to him.",
	version: "2.2.4",
	name: "schada:stripe",
	git: "https://github.com/SaydChada/stripe-meteor.git"
});

Npm.depends({ "stripe": "4.22.0" });

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	if (api.export) api.export('STRIPEMETEOR');
	api.use(['templating'], 'client');
	api.addFiles('stripe_client.html', 'client');
	api.addFiles('stripe_server.js', 'server');
});

Package.on_test(function(api) {
	api.use(['tinytest','schada:stripe']);
	api.add_files([ "tests/client.js", "tests/checkout.js" ], 'client');
	api.add_files([ "tests/server.js" ], 'server');
});
