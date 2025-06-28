import { useNavigate, useParams } from "react-router-dom";
import { works } from '../data/works';
import { Link } from "react-router-dom";

const WorkDetail = () => {
    const { id } = useParams();
    const work = works.find((w) => w.id === id);
    const navigate = useNavigate();

    if(!work) return <p>Not Found</p>;

    return(
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
            <img src={work.image} alt={work.title} className="w-full rounded mb-4" />
            <Link to={work.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">デモサイトを見る</Link>
            <button onClick={() => navigate(-1)} className="inline-block bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600">戻る</button>
        </section>
    );
};

export default WorkDetail;