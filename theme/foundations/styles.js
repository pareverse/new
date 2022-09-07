export default {
	global: {
		'*, *::before, &::after': {
			borderColor: 'border'
		},

		html: {
			lineHeight: '1.5',

			scrollBehavior: 'smooth'
		},

		body: {
			bg: 'bg-surface',
			color: 'default'
		},

		'*::placeholder': {
			opacity: 1,
			color: 'muted'
		}
	}
}
