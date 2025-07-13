import { useState } from 'react';
import { dogType } from '../../data/petMain';
import { DogType } from '../../types/MenuItems';

const dogData: {[key:string]: string} = {
    '柴犬': 'shiba',
    'ゴールデンレトリバー': 'retriever/golden',
    'ビーグル': 'beagle',
    'ポメラニアン': 'pomeranian',
    'チワワ': 'chihuahua',
    'コーギー': 'corgi',
    'トイプードル':'poodle/toy',
    'シュナウザー':'schnauzer',
    'ビションフリーゼ':'bichon',
};

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async() => {
        const breed = dogData[searchTerm];
        if(!breed){
            setError('お探しのワンちゃんは旅に出てます✈️');
            setImageUrl('');
            return;
        }
        setError('');
        try{
            const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
            const data = await res.json();
            setImageUrl(data.message);
        } catch(err) {
            console.error(err);
            setError('画像がありません。');
        }
    };

    return(
        <div className='max-w-md mx-auto p-4'>
            <h2 className='text-2xl font-bold mb-4 text-center text-gray-500'>ワンワンサーチ🐶🔍</h2>
            <div className='flex gap-2 mb-4'>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='ワンちゃんを探す'
                    className='flex-1 p-2 rounded border'
                />
                <button onClick={handleSearch} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>検索</button>
            </div>
            {error && <p className='text-red-400 text-center mb-2'>{error}</p>}
            {imageUrl && (
                <div className='animate-fade-in'>
                    <img
                        src={imageUrl}
                        className='w-full aspect-[4/3] object-cover rounded shadow'
                    />
                    <h3 className='text-xl font-semibold mt-2 text-gray-500 text-center'>{searchTerm}</h3>
                </div>
            )}
        </div>
    );
};

export default Search;