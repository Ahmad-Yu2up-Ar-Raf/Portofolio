

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	safelist: [
		{pattern: /(bg|text|border|fill)-./}
	  ],
  theme: {
  	extend: {
		
  		colors: {
  			background: 'hsl(var(--background))',
  			customGray: 'rgb(153, 153, 153)',
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
  		},

		  fontFamily: {
			montserrat: ["var(--font-montserrat)"],
		
			ppmedium: ["var(--font-ppmedium)"],
			ppregular: ["var(--font-ppregular)"],
			ppbook: ["var(--font-ppre)"],
		    SixCaps: ["var(--Six-Cap)"],
			degular: ["var(--font-degular)"],
			 inter: ["var(--font-inter)"],
			 oufit: ["var(--font-outfit)"]
			},

		
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
			"shiny-text": "shiny-text 8s infinite",
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			'line-shadow': 'line-shadow 15s linear infinite',
  			shine: 'shine var(--duration) infinite linear',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
									        'star-movement-top': 'star-movement-top linear infinite alternate',
											  gradient: 'gradient 8s linear infinite',
											  float: 'floation 3s infinite ease-in-out',
											  glow: "texx 3s ease-out infinite",
											  shine: "shine 5s ease infinite"
  		},
  		keyframes: {
			
			floation : {
				'0%' : { transform: 'translate(-50%,-50%)' },
			 '50%' : { transform: 'translate(-50%,-60%)' },
			 '100%' : { transform: 'translate(-50%, -50%)' },
			  },
			  shine : {
				to : {
					backgroundPosition :"200%",
					opacity: "0"
				}
			},
			  texx: {
				"0%, 100%" : {
				   color: "#525252",
				   "text-shadow":  "0 0px 14px #525252"
				},
				"50%" :{
				  color: "#ffffff",
				  "text-shadow":  "0 0px 20px #ffff"
				},
			  },
			"shiny-text": {
				"0%, 90%, 100%": {
				  "background-position": "calc(-100% - var(--shiny-width)) 0",
				},
				"30%, 60%": {
				  "background-position": "calc(100% + var(--shiny-width)) 0",
				},
			  },
			gradient: {
				          '0%': { backgroundPosition: '0% 50%' },
				          '50%': { backgroundPosition: '100% 50%' },
				          '100%': { backgroundPosition: '0% 50%' },
				        },
			shine: {
				          '0%': { 'background-position': '100%' },
				          '100%': { 'background-position': '-100%' },
				        },
						animation: {
							        shine: 'shine 5s linear infinite',
								
							      },
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			},
  			'line-shadow': {
  				'0%': {
  					'background-position': '0 0'
  				},
  				'100%': {
  					'background-position': '100% -100%'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
			  'star-movement-bottom': {
				          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
				          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
				        },
				        'star-movement-top': {
				          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
				          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
				        },
  		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	
	


  ],
}


