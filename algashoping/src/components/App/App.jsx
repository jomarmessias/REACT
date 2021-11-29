import React, { useState } from "react";
import Checkbox from "../../shared/Checkbox/Checkbox";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import { Wrapper, Container } from './App.styles';

function App () {

    const [lettuce, setLettuce] = useState()

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={<div>
                    produtos disponiveis

                    <Checkbox value={lettuce} title="Alface"/>
                    <Checkbox value={false} title="Arroz"/>
                    </div>}
                middle={<div >
                    sua lista de compra
                    </div>}
                right={<div>
                    estatisticas
                    </div>}    

            />
        </Container>
    </Wrapper>
}

export default App