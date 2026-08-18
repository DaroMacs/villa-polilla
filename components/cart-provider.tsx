'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '@/lib/products'

export type CartItem = {
  slug: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartState = { items: CartItem[] }

type CartAction =
  | { type: 'add'; product: Product; quantity: number }
  | { type: 'remove'; slug: string }
  | { type: 'setQty'; slug: string; quantity: number }
  | { type: 'clear' }
  | { type: 'hydrate'; items: CartItem[] }

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'hydrate':
      return { items: action.items }
    case 'add': {
      const existing = state.items.find((i) => i.slug === action.product.slug)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === action.product.slug
              ? { ...i, quantity: i.quantity + action.quantity }
              : i,
          ),
        }
      }
      return {
        items: [
          ...state.items,
          {
            slug: action.product.slug,
            name: action.product.name,
            price: action.product.price,
            image: action.product.image,
            quantity: action.quantity,
          },
        ],
      }
    }
    case 'remove':
      return { items: state.items.filter((i) => i.slug !== action.slug) }
    case 'setQty':
      return {
        items: state.items
          .map((i) =>
            i.slug === action.slug ? { ...i, quantity: action.quantity } : i,
          )
          .filter((i) => i.quantity > 0),
      }
    case 'clear':
      return { items: [] }
    default:
      return state
  }
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (product: Product, quantity?: number) => void
  removeItem: (slug: string) => void
  setQuantity: (slug: string, quantity: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'villa-polilla-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) dispatch({ type: 'hydrate', items: JSON.parse(raw) })
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    } catch {
      // ignore
    }
  }, [state.items])

  const value = useMemo<CartContextValue>(() => {
    const count = state.items.reduce((n, i) => n + i.quantity, 0)
    const subtotal = state.items.reduce((n, i) => n + i.quantity * i.price, 0)
    return {
      items: state.items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (product, quantity = 1) => {
        dispatch({ type: 'add', product, quantity })
        setIsOpen(true)
      },
      removeItem: (slug) => dispatch({ type: 'remove', slug }),
      setQuantity: (slug, quantity) =>
        dispatch({ type: 'setQty', slug, quantity }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [state.items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
