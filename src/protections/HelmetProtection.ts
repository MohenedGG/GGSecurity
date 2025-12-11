import helmet from "helmet";

export default class HelmetProtection {
    private options: object;

    constructor(options: object = {}) {
        // Default Helmet options
        this.options = {
            frameguard: { action: "sameorigin" },
            hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
            referrerPolicy: { policy: "no-referrer" },
            noSniff: true,
            ieNoOpen: true,
            hidePoweredBy: true,
            crossOriginResourcePolicy: { policy: "cross-origin" },
            crossOriginOpenerPolicy: { policy: "same-origin" },
            contentSecurityPolicy: {
                directives: {
                    "default-src": ["'self'"],
                    "img-src": ["'self'", "data:", process.env.FRONTEND_URL],
                    "media-src": ["'self'", "data:", process.env.FRONTEND_URL],
                },
            },
            ...options, // If user provides options, they will override defaults
        };
    }

    // Method to update Helmet options
    public setOptions(options: object) {
        this.options = { ...this.options, ...options }; // Merge new options with existing ones
    }

    // Middleware to apply Helmet protection
    public getMiddleware() {
        return helmet(this.options);
    }
}