// if you set a value off the initialization it will set the type, otherwise it's any
let message;
message = 'abc';
let endsWithC = (<string>message.endsWith('c'));  // type assertion
let alternativeWay = (message as string).endsWith('c');
