simple:
	@sh utils/buildlib.sh
	@sh utils/minify.sh

detailed:
	sh utils/buildlib.sh
	sh utils/minify.sh

install-lib:
	npm install -g uglify-js

clean:
	@make erase
	@make

erase:
	@sh utils/erasebuild.sh