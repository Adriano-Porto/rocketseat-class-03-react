import { Portal, Title } from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { z } from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
    CloseButton,
    ContentStyled,
    OverlayStyled,
    TransactionType,
    TransactionTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFromInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const createTransaction = useContextSelector(
        TransactionsContext,
        (context) => {
            //watch
            return context.createTransaction
        },
    )

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewTransactionFromInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income',
        },
    })

    async function handleCreateNewTransaction(data: NewTransactionFromInputs) {
        await createTransaction(data)

        reset()
    }

    return (
        <Portal>
            <OverlayStyled>
                <ContentStyled>
                    <CloseButton>
                        <X />
                    </CloseButton>
                    <Title>Nova transação</Title>

                    <form
                        action=""
                        onSubmit={handleSubmit(handleCreateNewTransaction)}
                    >
                        <input
                            type="text"
                            placeholder="Descrição"
                            required
                            {...register('description')}
                        />
                        <input
                            type="number"
                            placeholder="Preço"
                            required
                            {...register('price', { valueAsNumber: true })}
                        />
                        <input
                            type="text"
                            placeholder="Categoria"
                            required
                            {...register('category')}
                        />

                        <Controller
                            control={control}
                            name="type"
                            render={(props) => (
                                <TransactionType
                                    onValueChange={props.field.onChange}
                                    value={props.field.value}
                                >
                                    <TransactionTypeButton
                                        variant="income"
                                        value="income"
                                    >
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton
                                        variant="outcome"
                                        value="outcome"
                                    >
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )}
                        />

                        <button type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>
                </ContentStyled>
            </OverlayStyled>
        </Portal>
    )
}
