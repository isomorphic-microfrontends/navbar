# navbar

The navbar microfrontend

## Local development

First, start up the [root config](https://github.com/isomorphic-microfrontends/root-config).

Secondly, start up the navbar. This project may only work properly when the `yarn.lock` file is respected when installing dependencies. To do so, you may [install yarn](https://classic.yarnpkg.com/lang/en/) or use [npm@>=7](https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/).

```sh
yarn install
yarn start
```

Note the HTTP Port number that is shown in the output from webpack in the terminal. By default, this is `8080`.

Now, open up the root config in a browser, at http://localhost:9000. Run the following in the browser console:

```sh
localStorage.setItem('devtools');
window.location.reload();
```

You should now see the [import-map-overrides](https://github.com/joeldenning/import-map-overrides) UI, which is a yellowish rectangle at the bottom right of the web page. Click on the rectangle, then click on `@isomorphic-mf/navbar`. Set the URL to be the port number (`8080`) that was noted earlier. Now do the same for `@isomorphic-mf/navbar/`, except set the URL to http://localhost:8080/

Reload the page.

Now your local version of the navbar will be executed both on the server side and in the browser! Note that stacktraces for server-side errors will appear **in the terminal for the root config**, not the terminal for the navbar.
