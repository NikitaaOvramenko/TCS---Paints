declare module '*.svg' {
  import type { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.svg?url' {
  const content: import('next/image').StaticImageData
  export default content
}
