hello_world:
	deno run hello_world.ts

web_server:
	deno run --allow-net web_server.ts

test:
	deno test

format:
	deno fmt *.ts
