import React from 'react';
import Styled from 'styled-components';

const StyleButton = Styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    border: 1px;
    border-color: #333333;
`;

const Label = Styled.Text`
    color: #FFFFFF;
`;

const Button = ({ label, style, onPress }) => {
    return (
        <StyleButton style={style} onPress={onPress}>
            <Label>{label}</Label>
        </StyleButton>
    );
}

export default Button;

