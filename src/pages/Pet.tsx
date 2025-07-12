import Header from "../components/pet/Header";
import Main from "../components/pet/Main";

type Props = {
    onBack:() => void;
}

const Pet = ({onBack}: Props) => {
    return(
        <>
        <Header />
        <Main />
        </>
    )
};

export default Pet;