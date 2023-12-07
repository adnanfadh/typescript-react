import { ReactElement, ReactNode } from "react";

export interface HeadingProps {
    title: string;
}

export const Heading = ({ title }: HeadingProps) => {
    return (
        <div>
            <h3>
                {title}
            </h3>
        </div>
    );
}

export const List = <ListItems, >({items, render}: { items: ListItems[]; render: (item: ListItems) => ReactNode}) => {
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {render(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export type ListComponent = <ListItems>({
    items, 
    render
}: { 
    items: ListItems[]; 
    render: (item: ListItems) => ReactNode;
}) => ReactElement;

export const List2: ListComponent = ({ items, render}) => {
    return (
        <div>
            <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
            </ul>
        </div>
        
    );
}

const TestComponent = () => {
    return <>
        <Heading title="Test Component" />
        <List items={['a', 'b', "c"]} render={(str) => <strong>{str}</strong>} />
        <List2 items={['a', 'b', "c"]} render={(str) => <strong>{str}</strong>} />
        </>
}

export default TestComponent