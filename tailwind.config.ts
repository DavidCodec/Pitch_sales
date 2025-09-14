import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				'slide-out-right': {
					'0%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateX(100%)',
						opacity: '0',
					},
				},
				'slide-out-left': {
					'0%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
				},
				'fade-in-scale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				'fade-out-scale': {
					'0%': {
						opacity: '1',
						transform: 'scale(1)',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(1.05)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-out-right': 'slide-out-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-out-left': 'slide-out-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-in-scale': 'fade-in-scale 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-out-scale': 'fade-out-scale 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
			},
			transitionTimingFunction: {
				'slide-ease': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'spring-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce-ease': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			transitionDuration: {
				slide: '500ms',
				'slide-fast': '300ms',
				'slide-slow': '700ms',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config;
