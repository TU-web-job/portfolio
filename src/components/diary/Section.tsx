import { petSection } from "../../data/petSection";

const Section = () => {
    return(
        <div className="w-full bg-gray-200 p-4">
            <h2 className="text-4xl font-bold flex justify-center items-center p-4 mb-4">My Pet Diary & Memory</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {petSection.map((item) => (
                    <div className="bg-gray-100 cursor-pointer shadow-md mb-4 rounded-md" key={item.id}>
                        <div className="p-4">
                        <img src={item.image} className="w-full h-48 object-cover rounded-md" />
                        </div>
                        <div className="text-left font-semibold p-2">
                            <h3>Title : {item.title}</h3>
                            <label>Date : {item.date.toLocaleDateString()}</label>
                            <p>Description : {item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section;