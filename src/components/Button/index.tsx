import React from 'react';
import { Button as BaseButton } from "antd";

interface IProps {
    children: string | React.ReactNode;
    type?: 'primary' | 'text' | 'default';
}

const Button = (props: IProps) => {
    const { children, type = 'default' } = props;
    return (
        <BaseButton type={type}>
            {children}
        </BaseButton>
    );
};

export default Button;
