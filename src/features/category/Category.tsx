import React from 'react';
import {MainProps} from "../../types";

export type CategoryProps = {
    data: MainProps
    title: string
}

export default function Category({data, title}: CategoryProps) {
    return (<div className="category">{title}</div>);
}
