import React, { useState } from "react";
import Checkbox from "../../shared/Checkbox/Checkbox";
import LineChart from "../../shared/LineChart/LineChart";
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

                        <LineChart 
                        color="#09f"
                        title="saudavel"
                        percentage={80}
                        />
                    </div>}    

            />
        </Container>
    </Wrapper>
}

export default App