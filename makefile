default:
	zip -r site.zip . -x ".*" -x "*/.*" -x "*node_modules*" -x "makefile"

clean:
	rm -rf site.zip
	@echo "zip deleted"
