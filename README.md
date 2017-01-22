# MyLittleColor

## usage

add in dep section of package.json
```
"myLittleColor": "CountJr/myLittleColor"
```

## example of using

```
import printColorText from 'myLittleColor';

const boo = 'red booo';
const message = `#red{this} is #cyan{a} #yellow{nice} message. And big #green{${boo}}`;

printColorText(message);
```