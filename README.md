# rugby-board-node

[![](https://api.travis-ci.org/rugby-board/rugby-board-node.svg?branch=master)](https://travis-ci.org/rugby-board/rugby-board-node)
[![Code Climate](https://codeclimate.com/github/rugby-board/rugby-board-node/badges/gpa.svg)](https://codeclimate.com/github/rugby-board/rugby-board-node)

Node.js UI Server for Rugby Board

## Dev

1. Install with `yarn`

	```
	$ yarn install
	```

2. Build `node-sass`

	```
	$ node node_modules/node-sass/scripts/install.js
	```

3. Serve with Node

	```
	$ yarn server
	```

4. Test the codes

	```
	$ yarn test
	```

## Deployment

Init with heroku-cli and push to Heroku,

```
$ git push heruko master
```

And Heroku will call `yarn heroku-postbuild` automatically.
