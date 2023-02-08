# GSAP React

![npm](https://img.shields.io/npm/v/gsap-react)

## Collection of React utilities and hooks for GSAP.

---

### Installation

- Requires gsap version 3.11.0 or newer

###### npm

```shell
npm install gsap-react gsap
```

###### yarn

```shell
yarn add gsap-react gsap
```

###### pnpm

```shell
pnpm add gsap-react gsap
```

### Hooks

#### `useGsapContext`

Memoises a GSAP Context instance.

##### usage:

```tsx
import { useGsapContext } from 'gsap-react'
import { useLayoutEffect, useRef } from 'react'

function App() {
  const ref = useRef<HTMLDivElement>(null)
  const ctx = useGsapContext(ref)

  useLayoutEffect(() => {
    ctx.add(() => {
      gsap.to('.box', {
        x: 200,
        stagger: 0.1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="app" ref={ref}>
      <div className="box">Box 1</div>
      <div className="box">Box 2</div>
      <div className="box">Box 3</div>
    </div>
  )
}
```

[See demo](https://codepen.io/rhernando/pen/poVXMzO/2f8fddc88612bba7c19c017acb56ff27)

#### `useGsapEffect`

Use register effect.

##### usage:

```tsx
import { useGsapEffect } from 'gsap-react'
import { useRef } from 'react'

function App() {
  const box = useRef()
  const animation = useGsapEffect(box, 'spin')

  return <Box ref={box}>Hello</Box>
}
```

#### `useSelector`

Query selector

##### usage:

```tsx
import { gsap } from 'gsap'
import { useSelector } from 'gsap-react'
import { useLayoutEffect } from 'react'

function App() {
  const [q, ref] = useSelector<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.to(q('.box'), { x: 200 })
  }, [])

  return (
    <div ref={ref}>
      <div className="box">Box 1</div>
    </div>
  )
}
```

#### `useStateRef`

This hook helps solve the problem of accessing stale values in your callbacks. It works exactly like useState, but returns a third value, a ref with the current state.

##### usage:

```tsx
const [count, setCount, countRef] = useStateRef(5)
const [gsapCount, setGsapCount] = useState(0)

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.box', {
      x: 200,
      repeat: -1,
      onRepeat: () => setGsapCount(countRef.current),
    })
  }, app)
  return () => ctx.revert()
}, [])
```

[See demo](https://codepen.io/GreenSock/pen/f7a9589f001a66076d7e03ef61859cfd)

#### `useMergeRefs`

Merge multiple refs, useful especially when using with forwardRef.

```tsx
import { gsap } from 'gsap'
import { useMergeRefs } from 'gsap-react'
import { forwardRef, useLayoutEffect, useRef } from 'react'

const Button = forwardRef(({ children, ...props }, ref) => {
  const internalRef = useRef<HTMLButtonElement>(null)
  const refs = useMergeRefs(ref, internalRef)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, internalRef)
  }, [])

  return (
    <button ref={refs} {...props}>
      <span className="button-text">{children}</span>
    </button>
  )
})
```

### `useIsomorphicLayoutEffect`

Server side rendering (SSR)

#### Usage

```tsx
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from 'gsap-react'
import { useRef } from 'react'

function App() {
  const app = useRef()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.box', { opacity: 0 })
    }, app)
    return () => ctx.revert()
  }, [])

  return (
    <div className="app" ref={app}>
      <div className="box">Box 1</div>
    </div>
  )
}
```

For more information, visit [GSAP Hooks](https://greensock.com/react-advanced/#hooks).

### Components (WIP)
Coming Soon

### Contributing

Accepting PRs 💜
