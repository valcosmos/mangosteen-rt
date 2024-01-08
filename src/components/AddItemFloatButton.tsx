import React from 'react'
import add from '../assets/icons/add.svg'

export default function AddItemFloatButton() {
  return (
    <button w-56px h-56px bg="#5f34bf" rounded="50%" b-none text-6xl p-4px fixed bottom-16px right-16px>
      <img src={add} max-w="100%" max-h="100%" />
    </button>
  )
}
