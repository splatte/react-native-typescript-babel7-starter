react-native-typescript-babel7-starter
======================================

A starter for React Native with TypeScript transpiled by Babel 7 and jest for tests.

Since React Native 0.56.0 Babel 7 is used which supports TypeScript out of the box.

## Setup

1. Update to RN 0.56.0:

    ```
    react-native-git-upgrade 0.56.0-rc.4
    ```

2. Update babel-preset-react-native to ^5.0.1 or newer (as per RN Changelog instructions).

    ```
    yarn upgrade babel-preset-react-native@^5.0.1
    ```

3. Add TypeScript dependencies.

    ```
    yarn add --dev typescript @types/react @types/react-dom
    ```

4. Configure TypeScript.

    ```
    Edit rn-cli.config.js
    Edit tsconfig.json
    mv App.js App.tsx
    ```

5. Convert .babelrc to babel.config.js. See https://github.com/babel/babel/pull/7358

    ````
    SyntaxError:

    node_modules/react-native/Libraries/Utilities/Platform.ios.js:
    Unexpected token, expected "{" (35:17)
    ````

6. Configuring jest.

    ```
    yarn add --dev @types/jest
    Add jest config to package.json
    mv App.ts into src/ or otherwise it seems the babel.config.js is not used (SyntaxError: Unexpected token import)
    ```
