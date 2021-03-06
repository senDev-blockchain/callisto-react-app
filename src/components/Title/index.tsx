import { Theme } from 'constants/theme';
import styled from 'styled-components'

const Title = styled.h1<{ fontWeight: string}>`
    font-weight: ${({fontWeight}) => fontWeight};
    font-family: ${Theme.fonts.title};
    font-size: 36px;
    padding: 10px 30px;
    @media (max-width:768px) {
        text-align: center;
    }
`

export default Title;
