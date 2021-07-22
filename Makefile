all:
	chrome --headless --print-to-pdf=resume.pdf "file://${PWD}/src/template.html?data=../data.js"