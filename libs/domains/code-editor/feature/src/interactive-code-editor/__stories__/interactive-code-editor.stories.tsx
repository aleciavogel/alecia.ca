import type { Meta, StoryObj } from '@storybook/react'

import type { SandpackFile } from '@alecia/sanity-types/sanity.types'

import InteractiveCodeEditor from '../index'

const meta: Meta<typeof InteractiveCodeEditor> = {
  title: 'Features/Code Snippets/Interactive Code Editor',
  component: InteractiveCodeEditor,
}

const STORY_FILES: SandpackFile[] = [
  {
    _type: 'sandpack.file',
    code: {
      _type: 'code',
      filename: 'App.tsx',
      code: `import { MyComponent } from './MyComponent'

export default function App(): JSX.Element {
  return <MyComponent />
}`,
    },
  },
  {
    _type: 'sandpack.file',
    code: {
      _type: 'code',
      filename: 'MyComponent.tsx',
      code: `export function MyComponent(): JSX.Element {
  return <h1>Hello again world</h1>
}`,
    },
  },
]

export default meta

type Story = StoryObj<typeof InteractiveCodeEditor>

export const Default: Story = {
  args: {},
}

export const WithTabs: Story = {
  args: {
    options: {
      showTabs: true,
    },
    files: STORY_FILES,
  },
}

export const WithoutTabs: Story = {
  args: {
    options: {
      showTabs: false,
    },
    files: STORY_FILES,
  },
}

export const WithDependencies: Story = {
  args: {
    dependencies: [
      { name: 'three', version: '0.168.0' },
      { name: '@types/three', version: '0.168.0' },
      { name: '@react-three/fiber', version: '8.17.7' },
    ],
    template: 'react-ts',
    files: [
      {
        _type: 'sandpack.file',
        code: {
          _type: 'code',
          filename: 'App.tsx',
          code: `import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App(): JSX.Element {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}`,
        },
      },
    ],
  },
}
