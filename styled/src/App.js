import { ThemeProvider } from "styled-components";
import Header from "./Header";
import GlobalStyles from "./styled/Global";
import { Container } from "./styled/container.styled";
import content from './content'
import Card from "./Card";
import Footer from "./Footer";

const theme = {
    colors: {
        header: '#ebfebff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px',
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    {content.map((item) => {
                        return <Card key={item.id} item={item} />
                    })}
                </Container>
                <Footer />
            </>
        </ThemeProvider>
    )
}

export default App