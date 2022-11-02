// import type { AttributifyAttributes } from '@unocss/preset-attributify'

// declare module 'react' {
//   interface HTMLAttributes<T> extends AttributifyAttributes {
//     flex?: boolean
//     block?: boolean
//     relative?: boolean
//     absolute?: boolean
//     bold?: boolean
//   }
// }


import * as React from 'react'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    flex?: boolean
    relative?: boolean
    text?: string
    grid?: boolean
    before?: string
    after?: string
    shadow?: boolean
  }
}