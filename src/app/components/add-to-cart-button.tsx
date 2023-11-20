'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToButtonProps {
  productId: number
}

export function AddToButton({ productId }: AddToButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCard() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCard}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
