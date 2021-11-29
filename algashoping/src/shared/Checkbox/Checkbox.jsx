import React from "react";
import { Wrapper, Indicator } from "../Checkbox/Checkbox.styles"

    function Checkbox ({ value, title }) {
        return <Wrapper>
            <Indicator value={value} />
            { title }
        </Wrapper>
    }

    export default Checkbox