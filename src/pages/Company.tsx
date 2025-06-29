import Header from '../components/company/Header'

type Props = {
    onBack:() => void;
}
const Company = ({onBack}: Props) => {
    return(
        <>
        <Header />
        </>
    );
};

export default Company;