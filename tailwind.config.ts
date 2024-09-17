import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		'bg-warning',
		'text-warning',
		'border-warning',
		'bg-attention',
		'text-attention',
		'border-attention',
		'bg-accept',
		'text-accept',
		'border-accept',
		'bg-highlight',
		'text-highlight',
		'border-highlight',
	],
	theme: {
		fontFamily: {
			sans: ['Roboto']
		},
		extend: {
			backgroundColor: {
				primary: 'rgb(var(--primary))',
				disabled: 'rgb(var(--disabled))',
				hover: 'rgb(var(--hover))',
				gray: 'rgb(var(--gray))',
				highlight: 'rgb(var(--highlight))',
				warning: 'rgb(var(--warning))',
				attention: 'rgb(var(--attention))',
				accept: 'rgb(var(--accept))'
			},
			textColor: {
				primary: 'rgb(var(--text))',
				secondary: '#fff',
				highlight: 'rgb(var(--highlight))',
				warning: 'rgb(var(--warning))',
				attention: 'rgb(var(--attention))',
				accept: 'rgb(var(--accept))'
			},
			borderColor: {
				primary: 'rgb(var(--primary))',
				highlight: 'rgb(var(--highlight))',
				warning: 'rgb(var(--warning))',
				attention: 'rgb(var(--attention))',
				accept: 'rgb(var(--accept))'
			},
			keyframes: {
				'fade-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'fade-left-enter': 'fade-left .5s ease-in-out'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;