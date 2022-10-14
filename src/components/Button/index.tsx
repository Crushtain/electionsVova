import React from 'react';
import { Button as BaseButton } from "antd";

interface IProps {
    children: string | React.ReactNode;
    className?: string;
    type?: 'primary' | 'text' | 'default' | 'link';
}

const Button = (props: IProps) => {
    const { children, className, type = 'default' } = props;
    return (
        <BaseButton className={className} type={type}>
            {children}
        </BaseButton>
    );
};

export default Button;
