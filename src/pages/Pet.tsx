import Header from "../components/pet/Header";
import Main from "../components/pet/Main";
import Search from "../components/pet/Search";

type Props = {
    onBack:() => void;
}

const Pet = ({onBack}: Props) => {
    return(
        <>
        <Header />
        <Main />
        <Search />
        </>
    )
};

export default Pet;