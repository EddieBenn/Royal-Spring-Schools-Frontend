interface Secrets {
	apiHost: string;
}

interface Config {
	secrets: Secrets;
}

let cache: Config | null = null;

const environment = import.meta.env.VITE_APP_ENVIRONMENT || "development";

const config = (): Config => {
	if (!cache) {
		cache = Object.freeze({
			secrets: {
				apiHost:
					environment === "development"
						? "https://royal-spring-schools-backend.onrender.com/"
						: "https://royal-spring-schools-backend.onrender.com/"
			},
		});
	}
	return cache;
};

export default config;

//https://royal-spring-schools-backend.onrender.com/
//http://localhost:3000