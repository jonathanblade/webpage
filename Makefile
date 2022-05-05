SRCDIR = ./src
PRETTIERBIN = ./node_modules/prettier/bin-prettier.js

astro2html:
	find ${SRCDIR} -name "*.astro" -exec sh -c 'mv "$$0" "$${0%.astro}.html"' {} \;

html2astro:
	find ${SRCDIR} -name "*.html" -exec sh -c 'mv "$$0" "$${0%.html}.astro"' {} \;

# prettier-plugin-tailwindcss not work properly with astrojs.
format:
	make astro2html
	${PRETTIERBIN} --write .
	make html2astro
