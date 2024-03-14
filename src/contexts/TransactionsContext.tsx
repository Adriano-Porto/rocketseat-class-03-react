import { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../libs/axios'

interface Transaction {
    id: number
    title: string
    price: number
    type: 'income' | 'outcome'
    category: string
    createdAt: string
}

interface TransactionsContextType {
    transactions: Transaction[]
    fetchTransactions: (q: string) => Promise<void>
    createTransaction: (data: CreateNewTransactionProps) => Promise<void>
}

interface TransactionsProviderProps {
    children: React.ReactNode
}

interface CreateNewTransactionProps {
    description: string
    price: number
    type: 'income' | 'outcome'
    category: string
}

export const TransactionsContext = createContext({} as TransactionsContextType)
export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    const fetchTransactions = useCallback(async (q?: string) => {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q,
            },
        })

        const data = response.data
        setTransactions(data)
    }, [])

    useEffect(() => {
        fetchTransactions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchTransactions])

    const createTransaction = useCallback(
        async (data: CreateNewTransactionProps) => {
            const { description: title, price, category, type } = data

            const response = await api.post('/transactions', {
                title,
                price,
                category,
                type,
                createdAt: new Date().toISOString(),
            })

            setTransactions((state) => [...state, response.data])
        },
        [],
    )

    return (
        <TransactionsContext.Provider
            value={{ transactions, fetchTransactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}
