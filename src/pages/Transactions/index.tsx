import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
} from './styles'

export function Transactions() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        //watch
        return context.transactions
    })

    return (
        <div>
            <Header />
            <TransactionsContainer>
                <Summary />
                <SearchForm />
                <TransactionsTable>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td width="50%">{transaction.title}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                    {transaction.type === 'income'
                                        ? priceFormatter.format(
                                              transaction.price,
                                          )
                                        : priceFormatter.format(
                                              -1 * transaction.price,
                                          )}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.type}</td>
                            <td>
                                {dateFormatter.format(
                                    new Date(transaction.createdAt),
                                )}
                            </td>
                        </tr>
                    ))}
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}
