type Props = {
    age: number;
    name: string;
}

export const Header = ({ name, age }: Props) => {
    return (
        <header>
            <h1 className="">Olá</h1>
        </header>
    );
}