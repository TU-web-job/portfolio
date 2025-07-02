import { footerList } from "../../data/contents";

const Footer = () => {
    return(
        <footer>
            <div><h3 className="font-bold text-navy-100">Company</h3></div>
            <div>
                {footerList.map((list) => {
                    return(
                    <>
                    <ul>
                        <li key={list.id} className="style-none">{list.name}</li>
                    </ul>
                    </>
                    );
                })}
            </div>
        </footer>
    )
}

export default Footer;