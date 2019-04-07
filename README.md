##### Command used to create this application

`$ npx create-react-app my-experience-front`

##### Command to create build and move to public folder of `core`

```bash
# add the following to ~/.profile
# For some not investigated yet reason `yarn build` creates triple nested build folder
# `rm -rf build/build` is used to delete it

export MY_EXPERIENCE_CORE_PATH="$HOME/Projects/my-experience-core/"
export MY_EXPERIENCE_FRONT_PATH="$HOME/Projects/my-experience-front/"

build-my-experience-front() {
  export MY_EXPERINCE_CURRENT_PWD=`pwd` && \
  cd $MY_EXPERIENCE_FRONT_PATH && \
  yarn build && \
  rm -rf build/build && \
  cp -r build/ "$MY_EXPERIENCE_CORE_PATH/public/" && \
  cd $MY_EXPERINCE_CURRENT_PWD && \
  export MY_EXPERINCE_CURRENT_PWD=''
}
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
- Better error communication
- Class names
