/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './index.html',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
                brand: {
                    charcoal: '#020204',
                    zinc: '#0F0F11',
                    orange: '#FFD60A', // Mapped to Gold
                    cyan: '#06B6D4',
                    purple: '#8B5CF6',
                    green: '#22C55E',
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #020204 0%, #0F0F11 100%)',
                'primary-gradient': 'linear-gradient(135deg, #FFD60A 0%, #F59E0B 100%)',
                'button-hover': 'linear-gradient(135deg, #FFE55C 0%, #FFD60A 100%)',
                'card-gradient': 'linear-gradient(135deg, #0F0F11 0%, #18181B 100%)',
            },
            boxShadow: {
                'orange': '0 4px 16px rgba(255, 214, 10, 0.3)',
                'orange-lg': '0 0 30px rgba(255, 214, 10, 0.4)',
                'orange-glow': '0 0 40px rgba(255, 214, 10, 0.6)',
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
}
