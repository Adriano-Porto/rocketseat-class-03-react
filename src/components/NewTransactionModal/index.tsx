import { Portal, Title } from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import {
    CloseButton,
    ContentStyled,
    OverlayStyled,
    TransactionType,
    TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
    return (
        <Portal>
            <OverlayStyled>
                <ContentStyled>
                    <CloseButton>
                        <X />
                    </CloseButton>
                    <Title>Nova transação</Title>

                    <form action="">
                        <input type="text" placeholder="Descrição" required />
                        <input type="number" placeholder="Preço" required />
                        <input type="text" placeholder="Categoria" required />

                        <TransactionType>
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

                        <button type="submit">Cadastrar</button>
                    </form>
                </ContentStyled>
            </OverlayStyled>
        </Portal>
    )
}
