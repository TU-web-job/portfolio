import { content } from '../../data/contents';

const Contents = () => {
    return(
        <div className="py-20 px-4 text-center items-center">
            <section>
                {content.map((item) =>(
                    <div key={item.id}>
                    <h2 className='text-semibold font-gray-200'>{item.title}</h2>
                    <p className='text-center'>{item.text}</p>
                    </div>
                ))}
            </section>
            
        </div>
    );
};

export default Contents;