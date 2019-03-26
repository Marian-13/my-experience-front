##### Command used to create this application

`$ npx create-react-app my-experience-front`

##### Command to create build and move to public folder of `core`

```
$ cd ~/Projects/my-experience-front/ && yarn build && cp -r build/ ~/Projects/my-experience-core/public/
```

##### Commands used to allow customization of default configs

```
$ yarn eject
$ rm -rf node_modules
$ yarn
```

[Details](https://github.com/facebook/create-react-app/issues/6099)

##### Command to run specs

```
$ yarn test
```

[Details](https://facebook.github.io/create-react-app/docs/running-tests)

###### TODO
- Configure webpack to simplify imports
- Use CDN in production?
- Fonts?
