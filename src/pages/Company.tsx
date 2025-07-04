import Header from '../components/company/Header'
import Contents from '../components/company/Contents';
import WorkList from '../components/company/WorkList';
import Footer from '../components/company/Footer';
import Tenpo from '../components/company/Tenpo';

type Props = {
    onBack:() => void;
}
const Company = ({onBack}: Props) => {
    return(
        <>
        <Header />
        <Contents />
        <WorkList /> 
        <Tenpo />
        <Footer />
        </>
    );
};

export default Company;