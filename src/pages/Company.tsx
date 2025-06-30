import Header from '../components/company/Header'
import Contents from '../components/company/Contents';

type Props = {
    onBack:() => void;
}
const Company = ({onBack}: Props) => {
    return(
        <>
        <Header />
        <Contents />
        </>
    );
};

export default Company;