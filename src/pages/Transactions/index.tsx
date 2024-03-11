import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
} from './styles'

export function Transactions() {
    return (
        <div>
            <Header />
            <TransactionsContainer>
                <Summary />
                <SearchForm />
                <TransactionsTable>
                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                R$ -2.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                R$ -8.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}
