import type { AttributifyAttributes } from 'unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {
    flex?: boolean
    block?: boolean
    relative?: boolean
    absolute?: boolean
    bold?: boolean
  }
}
