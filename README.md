# rugby-board-node

[![](https://api.travis-ci.org/rugby-board/rugby-board-node.svg?branch=master)](https://travis-ci.org/rugby-board/rugby-board-node)

Node.js UI Server for Rugby Board

## Dev

1. Install with `yarn`

	```
	$ yarn install
	```

2. Serve with Node

	```
	$ yarn server
	```

3. Test the codes

	```
	$ yarn test
	```

## Deployment

Init with heroku-cli and push to Heroku,

```
$ git push heruko master
```

And Heroku will call `yarn heroku-postbuild` automatically.
