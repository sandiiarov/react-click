# React Click

Handle outside click with render-props comoponent

```javascript
import ReactClick from './src';

<ReactClick onClickOutside={() => console.log('clicked outside')}>
  {({ ref, active }) => <div ref={ref}>{active ? 'on' : 'off'}</div>}
</ReactClick>;
```

## TODO

- [ ] - Add tests
- [ ] - Publish package
