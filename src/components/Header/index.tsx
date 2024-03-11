import { Root, Trigger } from '@radix-ui/react-dialog'
import logoSvg from '../../assets/Logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoSvg} alt="" />

                <Root>
                    <Trigger asChild>
                        <NewTransactionButton>
                            Nova transação
                        </NewTransactionButton>
                    </Trigger>
                    <NewTransactionModal />
                </Root>
            </HeaderContent>
        </HeaderContainer>
    )
}
