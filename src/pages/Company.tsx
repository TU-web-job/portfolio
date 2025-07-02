import Header from '../components/company/Header'
import Contents from '../components/company/Contents';
import Footer from '../components/company/Footer';

type Props = {
    onBack:() => void;
}
const Company = ({onBack}: Props) => {
    return(
        <>
        <Header />
        <Contents />
        <Footer />
        </>
    );
};

export default Company;