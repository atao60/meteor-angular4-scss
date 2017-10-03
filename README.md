A demo to test scss import under Windows
==============

See [[barbatus:scss-compiler] error under Windows #1647](https://github.com/Urigo/angular-meteor/issues/1647).

Even if the <em>Typescript</em> compiler is used, the code is written with vanilla javascript (".js" as file extension), i.e. ES6/ES2015.


Angular annotations such as <em>component</em>, <em>directive</em>, ... are used but as plain javascript, i.e. without the "@" syntax. Therefor the <em>typescript</em> options <em>emitDecoratorMetadata</em> and <em>experimentalDecorators</em> are disabled.

To run this demo:

    >meteor npm install
    >meteor

Under Windows, such a launching may freeze (see [Meteor stuck at starting your app](
https://forums.meteor.com/t/meteor-stuck-at-starting-your-app/25592)). Then use an external instance of Meteor. With the default port:

    >set MONGO_URL=mongodb://localhost:27017/db
    >meteor
