# React Additional Hooks & CSS Frameworks

## SWBATs:

- [ ] useContext
- [ ] useRef
- [ ] External CSS

### UseRef

What if we want to have a variable that perpetuates throughout rerenders without triggering a rerender ourself? This is where `useRef` comes in!

```js
import React, { useRef } from "react";

function CounterRef() {
  const count = useRef(0);

  function handleClick() {
    count.current = count.current + 1;
    console.log(count.current);
  }

  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{count.current}</button>
    </div>
  );
}
```

This way we can update and `perpetuate` a variable without causing a rerender!

### UseContext

So lets say we have a component 5 levels down a tree that needs access to a state created at the app level. Normally we could just pass the state down and that is a process called prop drilling, if we want to avoid that thats where `useContext` comes in
```js
import React, { useState } from "react";
export default const UserContext = React.createContext(undefined)
 
const App = () => {
  //using the state to dynamicallly pass the values to the context
 
  const [user, setUsers] = useState(false);
  return (
    <UserContext.Provider value={user}>
      <Auth />
    </UserContext.Provider>
  );
};
export default App;
```

and now from any prop we can bring this in by calling this:

```js
function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user.name}!`}</h2>
    </>
  );
}
```

### Other CSS Frameworks

Bootstrap
Tailwind
Foundation
Bulma
Skeleton
Material UI
Semantic UI
Sass
