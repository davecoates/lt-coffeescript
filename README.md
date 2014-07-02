## CoffeeScript for Light Table

A CoffeeScript plugin for Light Table.

Currently with default connections this won't work well. Unless you pass --bare
CoffeeScript wraps everything in a function - which means when LT eval's some
Javascript it doesn't update existing code it just re-runs the whole thing.
It's certainly possible to do the live code update but I'm not sure how LT is
supposed to handle it. Either it's not doing it properly for me or it's not
currently supported.

This plugin will pass --bare for evaluating individual forms - evaluating the
whole file will result in a closure.

https://github.com/davecoates/lt-chrometools provides LiveEdit functionality 
that works with this plugin. It uses the remove debugger protocol to live 
update scripts in Chrome which gets around the above issues. 

### Usage

1. Clone into plugins directory
2. Install dependencies (coffee-script) with `npm install`
3. For now you'll need to restart LT after step 2 is complete
