import Header from "../components/pet/Header";

type Props = {
    onBack:() => void;
}

const Pet = ({onBack}: Props) => {
    return(
        <>
        <Header />
        </>
    )
};

export default Pet;