import Header from "../components/diary/Header";
import Section from "../components/diary/Section";

type Props = {
    onBack:() => void;
}

const Diary = ({onBack}:Props) => {
    return(
        <>
            <Header />
            <Section />
        </>
    );
}

export default Diary;